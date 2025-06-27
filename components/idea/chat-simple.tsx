"use client"

import { useChat } from "@ai-sdk/react"
import {
	ArrowLeft,
	ArrowRight,
	Check,
	Lightbulb,
	Loader2,
	MessageCircle,
	Send,
	Sparkles,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { toast } from "sonner"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"

type Idea = {
	id: number
	title: string
	description: string
	content: string
	isFinal: boolean
	projectId: number
}

interface IdeaChatSimpleProps {
	projectId: number
	selectedIdea: Idea
}

export function IdeaChatSimple({
	projectId,
	selectedIdea,
}: IdeaChatSimpleProps) {
	const router = useRouter()
	const [isLoadingMessages, setIsLoadingMessages] = useState(true)
	const scrollAreaRef = useRef<HTMLDivElement>(null)
	const messagesEndRef = useRef<HTMLDivElement>(null)

	// Use the useChat hook for streaming chat
	const {
		messages,
		input,
		handleInputChange,
		handleSubmit,
		status,
		setMessages,
		error,
	} = useChat({
		api: "/api/ideas/chat",
		body: {
			data: {
				ideaId: selectedIdea.id,
			},
		},
		onError: error => {
			console.error("Chat error details:", error)
			toast.error(`Failed to send message: ${error.message || 'Unknown error'}`)
		},
	})

	// Function to scroll to bottom
	const scrollToBottom = () => {
		// Method 1: Use the messagesEndRef (most reliable)
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
			return
		}

		// Method 2: Try to find the Radix ScrollArea viewport
		if (scrollAreaRef.current) {
			// Try different possible selectors for Radix ScrollArea
			const selectors = [
				'[data-radix-scroll-area-viewport]',
				'.scroll-area-viewport',
				'[data-radix-scroll-area-viewport] > div',
				'div[style*="overflow"]'
			]

			for (const selector of selectors) {
				const scrollContainer = scrollAreaRef.current.querySelector(selector)
				if (scrollContainer) {
					scrollContainer.scrollTop = scrollContainer.scrollHeight
					return
				}
			}

			// Method 3: If Radix selectors don't work, try to find any scrollable element
			const allDivs = scrollAreaRef.current.querySelectorAll('div')
			for (const div of allDivs) {
				if (div.scrollHeight > div.clientHeight) {
					div.scrollTop = div.scrollHeight
					return
				}
			}
		}
	}

	// Auto-scroll when messages change or loading states change
	useEffect(() => {
		// Use requestAnimationFrame to ensure DOM has fully updated
		const frameId = requestAnimationFrame(() => {
			const timeoutId = setTimeout(() => {
				scrollToBottom()
			}, 50)
			
			// Cleanup timeout if component unmounts
			return () => clearTimeout(timeoutId)
		})

		return () => cancelAnimationFrame(frameId)
	}, [messages, isLoadingMessages, status])

	// Initial scroll to bottom when component mounts
	useEffect(() => {
		// Multiple attempts to ensure scrolling works
		const timeouts = [
			setTimeout(() => scrollToBottom(), 100),
			setTimeout(() => scrollToBottom(), 300),
			setTimeout(() => scrollToBottom(), 500),
		]

		return () => timeouts.forEach(timeout => clearTimeout(timeout))
	}, [])

	// Fetch existing chat messages when idea changes
	useEffect(() => {
		const fetchChatMessages = async () => {
			setIsLoadingMessages(true)
			try {
				const response = await fetch(`/api/ideas/${selectedIdea.id}/messages`)
				if (response.ok) {
					const data = await response.json()
					setMessages(data.messages || [])
					
					// Scroll to bottom after messages are loaded
					setTimeout(() => {
						scrollToBottom()
					}, 100)
				} else {
					console.error("Failed to fetch chat messages")
				}
			} catch (error) {
				console.error("Error fetching chat messages:", error)
			} finally {
				setIsLoadingMessages(false)
			}
		}

		fetchChatMessages()
	}, [selectedIdea.id, setMessages])

	const parseTechStack = (content: string): string[] => {
		const techMatch = content.match(/\*\*Tech Stack:\*\* (.+?)(?:\n|$)/)
		return techMatch ? techMatch[1].split(", ") : []
	}

	const parseDifficulty = (content: string): string => {
		const diffMatch = content.match(/\*\*Difficulty:\*\* (.+?)(?:\n|$)/)
		return diffMatch ? diffMatch[1] : "Unknown"
	}

	const parseTimeEstimate = (content: string): string => {
		const timeMatch = content.match(/\*\*Time Estimate:\*\* (.+?)(?:\n|$)/)
		return timeMatch ? timeMatch[1] : "Unknown"
	}

	const techStack = parseTechStack(selectedIdea.content)
	const difficulty = parseDifficulty(selectedIdea.content)
	const timeEstimate = parseTimeEstimate(selectedIdea.content)

	const finalizeIdea = async () => {
		try {
			const response = await fetch("/api/ideas", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ ideaId: selectedIdea.id, action: "choose" }),
			})

			const result = await response.json()

			if (result.success) {
				// Trigger sidebar refresh
				window.dispatchEvent(new CustomEvent("sidebar-refresh"))

				toast.success("Idea finalized successfully!")

				// Navigate to steps
				router.push(`/project/${projectId}/idea/${selectedIdea.id}/steps`)
			} else {
				toast.error(result.error || "Failed to finalize idea")
			}
		} catch (error) {
			console.error("Error finalizing idea:", error)
			toast.error(`Error finalizing idea: ${error instanceof Error ? error.message : 'Unknown error'}`)
		}
	}

	const goToSteps = () => {
		router.push(`/project/${projectId}/idea/${selectedIdea.id}/steps`)
	}

	return (
		<div className="flex flex-col bg-background">
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sticky top-0 z-20 p-6 border-b bg-background gap-4">
				<div className="flex flex-col sm:flex-row sm:items-center gap-3">				<div className="flex items-center gap-3">
					<Link href={`/project/${projectId}/idea`}>
						<Button variant="ghost" size="sm">
							<ArrowLeft className="h-4 w-4 mr-2" />
							<span className="xs:inline">Back to Ideas</span>
						</Button>
					</Link>
				</div>
				</div>
				<div className="flex items-center gap-2">
					{selectedIdea.isFinal && (
						<Badge variant="default" className="bg-green-600 dark:bg-green-800 dark:border-green-700">
							<Check className="h-3 w-3 mr-1" />
							Final Idea
						</Badge>
					)}
					{selectedIdea.isFinal ? (
						<Button onClick={goToSteps} size="sm" variant="secondary">
							Go to Steps
							<ArrowRight className="h-4 w-4 ml-2" />
						</Button>
					) : (
						<Button onClick={finalizeIdea} size="sm" variant="secondary">
							Finalize & Go to Steps
							<ArrowRight className="h-4 w-4 ml-2" />
						</Button>
					)}
				</div>
			</div>
			<div className="p-6 border-b bg-background">

				<div className="space-y-4">
					<div>
						<h1 className="text-2xl font-bold flex items-center gap-2">
							<Lightbulb className="h-6 w-6 text-yellow-500" />
							<span className="truncate">{selectedIdea.title}</span>
						</h1>
						<p className="text-muted-foreground mt-2">
							{selectedIdea.description}
						</p>
					</div>

					{/* Full Content Display */}
					{selectedIdea.content && (
						<div className="bg-muted/30 rounded-lg p-4 border">
							<h3 className="font-semibold mb-2 text-sm text-muted-foreground uppercase tracking-wide">
								Detailed Content
							</h3>
							<div className="prose prose-sm max-w-none text-foreground">
								<pre className="whitespace-pre-wrap font-sans text-sm">
									{selectedIdea.content}
								</pre>
							</div>
						</div>
					)}

					{/* Idea Details */}
					<div className="flex flex-wrap gap-4">
						{techStack.length > 0 && (
							<div className="flex flex-wrap gap-1">
								{techStack.map((tech, index) => (
									<Badge key={index} variant="secondary">
										{tech}
									</Badge>
								))}
							</div>
						)}
						<Badge variant="outline">
							<Sparkles className="h-3 w-3 mr-1" />
							{difficulty}
						</Badge>
						<Badge variant="outline">⏱️ {timeEstimate}</Badge>
					</div>
				</div>
			</div>

			{/* Chat Interface */}
			<div className="flex-1 flex flex-col mb-25">
				{/* Messages */}
				<ScrollArea ref={scrollAreaRef} className="flex-1 p-6">
					<div className="space-y-4">
						{isLoadingMessages ? (
							<div className="text-center py-12">
								<Loader2 className="h-8 w-8 mx-auto animate-spin text-muted-foreground mb-4" />
								<p className="text-muted-foreground">Loading chat history...</p>
							</div>
						) : messages.length === 0 ? (
							<div className="text-center py-12">
								<MessageCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
								<h3 className="text-lg font-medium mb-2">
									Start discussing this idea
								</h3>
								<p className="text-muted-foreground">
									Ask questions, refine details, or explore implementation
									possibilities
								</p>
							</div>
						) : (
							messages.map(message => (
								<div
									key={message.id}
									className={`flex ${message.role === "user" ? "justify-end" : "justify-start"
										}`}
								>
									<div
										className={`max-w-[80%] rounded-lg px-4 py-2 ${message.role === "user"
												? "bg-primary text-primary-foreground"
												: "bg-muted"
											}`}
									>
										<p className="whitespace-pre-wrap">{message.content}</p>
									</div>
								</div>
							))
						)}
						{(status === 'submitted' || status === 'streaming') && (
							<div className="flex justify-start">
								<div className="bg-muted rounded-lg px-4 py-2">
									<Loader2 className="h-4 w-4 animate-spin" />
								</div>
							</div>
						)}
						{error && (
							<div className="flex justify-center">
								<div className="bg-destructive/10 border border-destructive/20 text-destructive rounded-lg px-4 py-2 text-sm">
									Error: {error.message}
								</div>
							</div>
						)}
						{/* Invisible element to scroll to */}
						<div ref={messagesEndRef} />
					</div>
				</ScrollArea>

			</div>

			{/* Input */}
			<div
				className="p-6 border-t fixed bottom-0 bg-background"
				style={{
					left: "var(--sidebar-width, 16rem)", // fallback to 16rem if not set
					width: "calc(100vw - var(--sidebar-width, 16rem))",
					right: 0,
					zIndex: 30,
				}}
			>
				<form onSubmit={handleSubmit} className="flex gap-3 items-end">
					<div className="flex-1 relative">
						<Textarea
							value={input}
							onChange={handleInputChange}
							placeholder="Discuss this idea..."
							className="flex-1 min-h-[2.5rem] max-h-32 resize-none rounded-xl border-2 border-border/50 focus:border-primary/60 transition-all duration-200 placeholder:text-muted-foreground/70 shadow-sm hover:shadow-md focus:shadow-lg pr-4 py-3 px-4"
							disabled={isLoadingMessages}
							onKeyDown={e => {
								if (e.key === "Enter" && !e.shiftKey) {
									e.preventDefault()
									handleSubmit(e)
								}
							}}
						/>
						{input.trim() && (
							<div className="absolute bottom-2 right-2 text-xs text-muted-foreground/60">
								Press Enter to send, Shift+Enter for new line
							</div>
						)}
					</div>
					<Button
						type="submit"
						disabled={status !== 'ready' || !input.trim() || isLoadingMessages}
						size="icon"
						className="h-10 w-10 rounded-xl bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg shrink-0"
					>
						{status === 'submitted' || status === 'streaming' ? (
							<Loader2 className="h-4 w-4 animate-spin" />
						) : (
							<Send className="h-4 w-4" />
						)}
					</Button>
				</form>
			</div>
		</div>
	)
}
