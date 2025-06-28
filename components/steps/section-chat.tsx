"use client"

import { useChat } from "@ai-sdk/react"
import {
	ArrowLeft,
	CheckCircle2,
	Circle,
	Loader2,
	MessageSquare,
	Send,
	Target,
} from "lucide-react"
import Link from "next/link"
import { useCallback, useEffect, useState } from "react"
import { toast } from "sonner"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
} from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Skeleton } from "@/components/ui/skeleton"
import { Textarea } from "@/components/ui/textarea"

type Todo = {
	id: number
	title: string
	description?: string
	isCompleted: boolean
	order: number
	createdAt: string
}

type Section = {
	id: number
	title: string
	description?: string
	order: number
	isCompleted: boolean
	createdAt: string
}

type Idea = {
	id: number
	title: string
	description: string
	content: string
	isFinal: boolean
	projectId: number
}

type SectionChatProps = {
	projectId: number
	ideaId: string
	sectionId: string
	idea: Idea
	section: Section
}

export function SectionChat({ projectId, ideaId, sectionId, idea, section }: SectionChatProps) {
	const [todos, setTodos] = useState<Todo[]>([])
	const [loading, setLoading] = useState(false)

	// Add chat functionality
	const {
		messages,
		input,
		handleInputChange,
		handleSubmit,
		isLoading: chatLoading,
	} = useChat({
		api: `/api/step-sections/${sectionId}/chat`,
		body: {
			data: {
				sectionId: sectionId,
				ideaId: ideaId,
			},
		},
		onError: error => {
			toast.error("Failed to send message")
			console.error("Chat error:", error)
		},
	})

	const loadTodos = useCallback(async () => {
		setLoading(true)
		try {
			const response = await fetch(`/api/step-todos?sectionId=${sectionId}`)
			const result = await response.json()

			if (result.success) {
				setTodos(result.data)
			} else {
				toast.error("Failed to load todos")
			}
		} catch (error) {
			console.error("Error loading todos:", error)
			toast.error("Failed to load todos")
		} finally {
			setLoading(false)
		}
	}, [sectionId])

	// Load existing todos
	useEffect(() => {
		loadTodos()
	}, [loadTodos])

	const toggleTodoCompletion = async (todoId: number) => {
		const todo = todos.find(t => t.id === todoId)
		if (!todo) return

		try {
			const response = await fetch(`/api/step-todos/${todoId}`, {
				method: "PATCH",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ isCompleted: !todo.isCompleted }),
			})

			if (response.ok) {
				setTodos(prev => prev.map(t => 
					t.id === todoId ? { ...t, isCompleted: !t.isCompleted } : t
				))
			}
		} catch (error) {
			console.error("Error updating todo:", error)
		}
	}

	// Calculate progress
	const completedTodos = todos.filter(todo => todo.isCompleted).length
	const progressPercentage = todos.length > 0 ? (completedTodos / todos.length) * 100 : 0

	if (loading) {
		return (
			<div className="space-y-6">
				<div className="space-y-4">
					<Skeleton className="h-8 w-64" />
					<Skeleton className="h-4 w-96" />
				</div>
				<div className="space-y-4">
					{[1, 2, 3].map(i => (
						<Skeleton key={i} className="h-16 w-full" />
					))}
				</div>
			</div>
		)
	}

	return (
		<div className="flex h-[calc(100vh-4rem)] bg-background">
			{/* Todos Sidebar */}
			<div className="w-full max-w-sm lg:w-96 border-r bg-muted/20 flex flex-col">
				{/* Header */}
				<div className="p-4 lg:p-6 border-b bg-background">
					<div className="space-y-3">
						<Link 
							href={`/project/${projectId}/idea/${ideaId}/steps`}
							className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
						>
							<ArrowLeft className="h-4 w-4 mr-1" />
							<span className="hidden sm:inline">Back to Implementation Plan</span>
						</Link>
						
						<div className="space-y-2">
							<h1 className="text-lg lg:text-xl font-bold flex items-center gap-3">
								<div className="p-2 bg-blue-100 rounded-lg">
									<Target className="h-4 w-4 lg:h-5 lg:w-5 text-blue-600" />
								</div>
								<span className="hidden sm:inline">{section.title}</span>
							</h1>
							{section.description && (
								<p className="text-xs lg:text-sm text-muted-foreground">{section.description}</p>
							)}
							<div className="text-xs lg:text-sm text-muted-foreground">
								From: <span className="font-medium">{idea.title}</span>
							</div>
						</div>
					</div>

					{/* Progress Overview */}
					<Card className="mt-4">
						<CardContent className="p-3 lg:p-4 space-y-3">
							<div className="flex items-center justify-between">
								<div className="space-y-1">
									<div className="text-xs lg:text-sm font-medium text-muted-foreground">
										{completedTodos} of {todos.length} todos completed
									</div>
								</div>
								<div className="text-right">
									<div className="text-lg lg:text-xl font-bold text-blue-600">
										{progressPercentage.toFixed(0)}%
									</div>
								</div>
							</div>
							<div className="w-full bg-blue-200 rounded-full h-2">
								<div 
									className="bg-blue-600 h-2 rounded-full transition-all duration-300"
									style={{ width: `${progressPercentage}%` }}
								/>
							</div>
						</CardContent>
					</Card>
				</div>

				{/* Todos List */}
				<div className="flex-1 overflow-hidden">
					<ScrollArea className="h-full">
						<div className="p-3 lg:p-4 space-y-4">
							<h3 className="text-sm lg:text-base font-semibold">
								Todo Items
								<Badge variant="secondary" className="ml-2">
									{todos.length}
								</Badge>
							</h3>

							{loading ? (
								<div className="space-y-4">
									{[1, 2, 3].map(i => (
										<Skeleton key={i} className="h-16 w-full" />
									))}
								</div>
							) : todos.length === 0 ? (
								<div className="text-center py-6 lg:py-8 space-y-4">
									<div className="p-4 bg-muted/30 rounded-full w-fit mx-auto">
										<MessageSquare className="h-6 w-6 lg:h-8 lg:w-8 text-muted-foreground" />
									</div>
									<div className="space-y-2">
										<h3 className="text-sm lg:text-base font-medium">No todos yet</h3>
										<p className="text-xs lg:text-sm text-muted-foreground">
											Todos for this section will appear here
										</p>
									</div>
								</div>
							) : (
								<div className="space-y-3">
									{todos.map((todo, index) => (
										<Card
											key={todo.id}
											className={`transition-all hover:shadow-sm ${
												todo.isCompleted 
													? 'bg-green-50/50 border-green-200' 
													: 'hover:bg-muted/30'
											}`}
										>
											<CardContent className="p-3 lg:p-4">
												<div className="flex items-start gap-3">
													<button
														onClick={() => toggleTodoCompletion(todo.id)}
														className="mt-0.5 hover:scale-110 transition-transform"
													>
														{todo.isCompleted ? (
															<CheckCircle2 className="h-4 w-4 lg:h-5 lg:w-5 text-green-600" />
														) : (
															<Circle className="h-4 w-4 lg:h-5 lg:w-5 text-muted-foreground hover:text-foreground" />
														)}
													</button>
													
													<div className="flex-1 min-w-0">
														<div className="flex items-center gap-2 mb-2">
															<Badge variant="outline" className="text-xs font-mono px-2">
																{(index + 1).toString().padStart(2, '0')}
															</Badge>
															{todo.isCompleted && (
																<Badge className="text-xs bg-green-600 hover:bg-green-700">
																	Completed
																</Badge>
															)}
														</div>
														<h4 className={`text-sm lg:text-base font-medium mb-1 ${
															todo.isCompleted 
																? "line-through text-muted-foreground" 
																: "text-foreground"
														}`}>
															{todo.title}
														</h4>
														{todo.description && (
															<p className={`text-xs lg:text-sm ${
																todo.isCompleted 
																	? "line-through text-muted-foreground" 
																	: "text-muted-foreground"
															}`}>
																{todo.description}
															</p>
														)}
													</div>
												</div>
											</CardContent>
										</Card>
									))}
								</div>
							)}
						</div>
					</ScrollArea>
				</div>
			</div>

			{/* Chat Interface */}
			<div className="flex-1 flex flex-col min-w-0">
				{/* Chat Header */}
				<div className="p-4 lg:p-6 border-b bg-background">
					<div className="flex items-start gap-4">
						<div className="p-2 bg-primary/10 rounded-lg">
							<MessageSquare className="h-4 w-4 lg:h-5 lg:w-5 text-primary" />
						</div>
						<div className="flex-1 min-w-0">
							<h1 className="text-lg lg:text-xl font-semibold">Section Chat</h1>
							<p className="text-muted-foreground mt-1 text-sm lg:text-base">
								Chat about this specific implementation section
							</p>
						</div>
					</div>
				</div>

				{/* Chat Messages */}
				<div className="flex-1 overflow-hidden">
					<ScrollArea className="h-full p-4 lg:p-6">
						{messages.length === 0 ? (
							<div className="flex flex-col items-center justify-center h-full text-center space-y-4">
								<div className="p-4 bg-muted/30 rounded-full">
									<MessageSquare className="h-8 w-8 text-muted-foreground" />
								</div>
								<div className="space-y-2 max-w-md">
									<h3 className="text-lg font-medium">Ready to discuss this section?</h3>
									<p className="text-muted-foreground text-sm lg:text-base">
										Ask questions about implementation details, get guidance, or discuss specific tasks for this section.
									</p>
								</div>
							</div>
						) : (
							<div className="space-y-4 max-w-4xl">
								{messages.map((message, index) => (
									<div
										key={index}
										className={`flex ${
											message.role === "user" ? "justify-end" : "justify-start"
										}`}
									>
										<div
											className={`max-w-[85%] lg:max-w-[80%] p-3 lg:p-4 rounded-lg ${
												message.role === "user"
													? "bg-primary text-primary-foreground"
													: "bg-muted"
											}`}
										>
											<p className="text-sm leading-relaxed whitespace-pre-wrap">
												{message.content}
											</p>
										</div>
									</div>
								))}
								{chatLoading && (
									<div className="flex justify-start">
										<div className="bg-muted p-3 lg:p-4 rounded-lg">
											<div className="flex items-center gap-2">
												<Loader2 className="h-4 w-4 animate-spin" />
												<span className="text-sm text-muted-foreground">
													AI is thinking...
												</span>
											</div>
										</div>
									</div>
								)}
							</div>
						)}
					</ScrollArea>
				</div>

				{/* Chat Input */}
				<div className="p-4 lg:p-6 border-t bg-background">
					<form onSubmit={handleSubmit} className="flex gap-3">
						<Textarea
							value={input}
							onChange={handleInputChange}
							placeholder="Ask about this section, request todos, or discuss implementation details..."
							className="flex-1 min-h-[60px] max-h-32 resize-none text-sm lg:text-base"
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
							size="lg"
							className="h-[60px] px-4 lg:px-6"
						>
							{chatLoading ? (
								<Loader2 className="h-4 w-4 animate-spin" />
							) : (
								<Send className="h-4 w-4" />
							)}
						</Button>
					</form>
				</div>
			</div>
		</div>
	)
}
