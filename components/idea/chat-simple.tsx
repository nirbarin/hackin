"use client"

import { useChat } from "@ai-sdk/react"
import {
	ArrowLeft,
	Check,
	Lightbulb,
	Loader2,
	MessageCircle,
	Send,
	Sparkles,
} from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
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
	// Use the useChat hook for streaming chat
	const {
		messages,
		input,
		handleInputChange,
		handleSubmit,
		isLoading: chatLoading,
		setMessages,
	} = useChat({
		api: "/api/ideas/chat",
		body: {
			data: {
				ideaId: selectedIdea.id,
			},
		},
		onError: error => {
			toast.error("Failed to send message")
			console.error("Chat error:", error)
		},
	})

	// Reset chat when idea changes
	useEffect(() => {
		setMessages([])
	}, [setMessages])

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

	return (
		<div className="flex flex-col h-[calc(100vh-4rem)] bg-background">
			{/* Header */}
			<div className="p-6 border-b bg-background">
				<div className="flex items-center justify-between mb-4">
					<div className="flex items-center gap-3">
						<Link href={`/project/${projectId}/idea`}>
							<Button variant="ghost" size="sm">
								<ArrowLeft className="h-4 w-4 mr-2" />
								Back to Ideas
							</Button>
						</Link>
					</div>
					{selectedIdea.isFinal && (
						<Badge variant="default" className="bg-green-600">
							<Check className="h-3 w-3 mr-1" />
							Final Idea
						</Badge>
					)}
				</div>

				<div className="space-y-4">
					<div>
						<h1 className="text-2xl font-bold flex items-center gap-2">
							<Lightbulb className="h-6 w-6 text-yellow-500" />
							{selectedIdea.title}
						</h1>
						<p className="text-muted-foreground mt-2">
							{selectedIdea.description}
						</p>
					</div>

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
			<div className="flex-1 flex flex-col">
				{/* Messages */}
				<ScrollArea className="flex-1 p-6">
					<div className="space-y-4">
						{messages.length === 0 ? (
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
									className={`flex ${
										message.role === "user" ? "justify-end" : "justify-start"
									}`}
								>
									<div
										className={`max-w-[80%] rounded-lg px-4 py-2 ${
											message.role === "user"
												? "bg-primary text-primary-foreground"
												: "bg-muted"
										}`}
									>
										<p className="whitespace-pre-wrap">{message.content}</p>
									</div>
								</div>
							))
						)}
						{chatLoading && (
							<div className="flex justify-start">
								<div className="bg-muted rounded-lg px-4 py-2">
									<Loader2 className="h-4 w-4 animate-spin" />
								</div>
							</div>
						)}
					</div>
				</ScrollArea>

				{/* Input */}
				<div className="p-6 border-t">
					<form onSubmit={handleSubmit} className="flex gap-2">
						<Textarea
							value={input}
							onChange={handleInputChange}
							placeholder="Discuss this idea..."
							className="flex-1 min-h-[2.5rem] max-h-32 resize-none"
							onKeyDown={e => {
								if (e.key === "Enter" && !e.shiftKey) {
									e.preventDefault()
									handleSubmit(e)
								}
							}}
						/>
						<Button
							type="submit"
							disabled={chatLoading || !input.trim()}
							size="icon"
							className="self-end"
						>
							<Send className="h-4 w-4" />
						</Button>
					</form>
				</div>
			</div>
		</div>
	)
}
