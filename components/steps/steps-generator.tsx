"use client"

import {
	CheckCircle2,
	Circle,
	Loader2,
	Plus,
	Sparkles,
	Target,
	Trash2,
} from "lucide-react"
import Link from "next/link"
import { useCallback, useEffect, useState } from "react"
import { toast } from "sonner"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
	todos: Todo[]
}

type Idea = {
	id: number
	title: string
	description: string
	content: string
	isFinal: boolean
	projectId: number
}

type StepsGeneratorProps = {
	projectId: number
	ideaId: string
	idea: Idea
}

export function StepsGenerator({ projectId, ideaId, idea }: StepsGeneratorProps) {
	const [sections, setSections] = useState<Section[]>([])
	const [loading, setLoading] = useState(false)
	const [generating, setGenerating] = useState(false)
	const [showAddSection, setShowAddSection] = useState(false)
	const [newSectionTitle, setNewSectionTitle] = useState("")
	const [newSectionDescription, setNewSectionDescription] = useState("")
	const [showAddTodo, setShowAddTodo] = useState<number | null>(null)
	const [newTodoTitle, setNewTodoTitle] = useState("")
	const [newTodoDescription, setNewTodoDescription] = useState("")

	const loadSections = useCallback(async () => {
		setLoading(true)
		try {
			const response = await fetch(`/api/step-sections?ideaId=${ideaId}`)
			const result = await response.json()

			if (result.success) {
				setSections(result.data)
			} else {
				toast.error("Failed to load implementation plan")
			}
		} catch (error) {
			console.error("Error loading sections:", error)
			toast.error("Failed to load implementation plan")
		} finally {
			setLoading(false)
		}
	}, [ideaId])

	// Load existing sections
	useEffect(() => {
		loadSections()
	}, [loadSections])

	const generateSections = async () => {
		setGenerating(true)
		try {
			const response = await fetch("/api/step-sections/generate", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ ideaId }),
			})

			const result = await response.json()

			if (result.success) {
				setSections(result.sections)
				toast.success("Generated implementation plan!")
			} else {
				toast.error(result.error || "Failed to generate implementation plan")
			}
		} catch (error) {
			console.error("Error generating sections:", error)
			toast.error("Failed to generate implementation plan")
		} finally {
			setGenerating(false)
		}
	}

	const addSection = async () => {
		if (!newSectionTitle.trim()) return

		try {
			const response = await fetch("/api/step-sections", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					ideaId,
					title: newSectionTitle,
					description: newSectionDescription,
				}),
			})

			const result = await response.json()

			if (result.success) {
				setSections(prev => [...prev, result.data])
				setNewSectionTitle("")
				setNewSectionDescription("")
				setShowAddSection(false)
				toast.success("Section added!")
			} else {
				toast.error("Failed to add section")
			}
		} catch (error) {
			console.error("Error adding section:", error)
			toast.error("Failed to add section")
		}
	}

	const addTodo = async (sectionId: number) => {
		if (!newTodoTitle.trim()) return

		try {
			const response = await fetch("/api/step-todos", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					sectionId,
					title: newTodoTitle,
					description: newTodoDescription,
				}),
			})

			const result = await response.json()

			if (result.success) {
				setSections(prev => prev.map(section => 
					section.id === sectionId 
						? { ...section, todos: [...section.todos, result.data] }
						: section
				))
				setNewTodoTitle("")
				setNewTodoDescription("")
				setShowAddTodo(null)
				toast.success("Todo added!")
			} else {
				toast.error("Failed to add todo")
			}
		} catch (error) {
			console.error("Error adding todo:", error)
			toast.error("Failed to add todo")
		}
	}

	const toggleSectionCompletion = async (sectionId: number) => {
		const section = sections.find(s => s.id === sectionId)
		if (!section) return

		// Optimistic update - update UI immediately
		setSections(prev => prev.map(s => 
			s.id === sectionId ? { ...s, isCompleted: !s.isCompleted } : s
		))

		try {
			const response = await fetch(`/api/step-sections/${sectionId}`, {
				method: "PATCH",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ isCompleted: !section.isCompleted }),
			})

			if (!response.ok) {
				// Rollback on error
				setSections(prev => prev.map(s => 
					s.id === sectionId ? { ...s, isCompleted: section.isCompleted } : s
				))
				toast.error("Failed to update section")
			}
		} catch (error) {
			// Rollback on error
			setSections(prev => prev.map(s => 
				s.id === sectionId ? { ...s, isCompleted: section.isCompleted } : s
			))
			console.error("Error updating section:", error)
			toast.error("Failed to update section")
		}
	}

	const toggleTodoCompletion = async (todoId: number, sectionId: number) => {
		const section = sections.find(s => s.id === sectionId)
		const todo = section?.todos.find(t => t.id === todoId)
		if (!todo) return

		// Optimistic update - update UI immediately
		setSections(prev => prev.map(section => ({
			...section,
			todos: section.todos.map(t => 
				t.id === todoId ? { ...t, isCompleted: !t.isCompleted } : t
			)
		})))

		try {
			const response = await fetch(`/api/step-todos/${todoId}`, {
				method: "PATCH",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ isCompleted: !todo.isCompleted }),
			})

			if (!response.ok) {
				// Rollback on error
				setSections(prev => prev.map(section => ({
					...section,
					todos: section.todos.map(t => 
						t.id === todoId ? { ...t, isCompleted: todo.isCompleted } : t
					)
				})))
				toast.error("Failed to update task")
			}
		} catch (error) {
			// Rollback on error
			setSections(prev => prev.map(section => ({
				...section,
				todos: section.todos.map(t => 
					t.id === todoId ? { ...t, isCompleted: todo.isCompleted } : t
				)
			})))
			console.error("Error updating todo:", error)
			toast.error("Failed to update task")
		}
	}

	const deleteSection = async (sectionId: number) => {
		try {
			const response = await fetch(`/api/step-sections/${sectionId}`, {
				method: "DELETE",
			})

			if (response.ok) {
				setSections(prev => prev.filter(s => s.id !== sectionId))
				toast.success("Section deleted")
			}
		} catch (error) {
			console.error("Error deleting section:", error)
			toast.error("Failed to delete section")
		}
	}

	const deleteTodo = async (todoId: number, sectionId: number) => {
		try {
			const response = await fetch(`/api/step-todos/${todoId}`, {
				method: "DELETE",
			})

			if (response.ok) {
				setSections(prev => prev.map(section => 
					section.id === sectionId 
						? { ...section, todos: section.todos.filter(t => t.id !== todoId) }
						: section
				))
				toast.success("Todo deleted")
			}
		} catch (error) {
			console.error("Error deleting todo:", error)
			toast.error("Failed to delete todo")
		}
	}

	// Calculate progress
	const totalTodos = sections.reduce((acc, section) => acc + section.todos.length, 0)
	const completedTodos = sections.reduce((acc, section) => 
		acc + section.todos.filter(todo => todo.isCompleted).length, 0
	)
	const progressPercentage = totalTodos > 0 ? (completedTodos / totalTodos) * 100 : 0

	if (loading) {
		return (
			<div className="w-full space-y-6">
				<div className="space-y-4">
					<div className="h-8 bg-muted rounded w-64 animate-pulse"></div>
					<div className="h-4 bg-muted rounded w-96 animate-pulse"></div>
				</div>
				<div className="space-y-4">
					{[1, 2, 3].map(i => (
						<div key={i} className="h-24 bg-muted rounded-lg animate-pulse"></div>
					))}
				</div>
			</div>
		)
	}

	return (
		<div className="max-w-5xl mx-auto p-6 space-y-8">
			{/* Header */}
			<div className="space-y-6">
				<div className="flex items-start justify-between">
					<div className="space-y-3">
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
								<Target className="w-5 h-5 text-muted-foreground" />
							</div>
							<h1 className="text-2xl font-semibold text-foreground">Implementation Plan</h1>
						</div>
						<div className="space-y-1">
							<h2 className="text-lg font-medium text-foreground">{idea.title}</h2>
							<p className="text-muted-foreground">{idea.description}</p>
						</div>
					</div>
					
					{sections.length === 0 && (
						<Button 
							onClick={generateSections} 
							disabled={generating}
						>
							{generating ? (
								<>
									<Loader2 className="w-4 h-4 mr-2 animate-spin" />
									Generating...
								</>
							) : (
								<>
									<Sparkles className="w-4 h-4 mr-2" />
									Generate Plan
								</>
							)}
						</Button>
					)}
				</div>

				{/* Progress Overview */}
				{sections.length > 0 && (
					<div className="bg-muted/50 rounded-lg p-6">
						<div className="flex items-center justify-between mb-4">
							<div>
								<div className="text-sm font-medium text-foreground">
									{completedTodos} of {totalTodos} tasks completed
								</div>
								<div className="text-sm text-muted-foreground">
									{sections.filter(s => s.isCompleted).length} of {sections.length} sections done
								</div>
							</div>
							<div className="text-2xl font-bold text-foreground">
								{progressPercentage.toFixed(0)}%
							</div>
						</div>
						<div className="w-full bg-muted rounded-full h-2">
							<div 
								className="bg-primary h-2 rounded-full transition-all duration-300"
								style={{ width: `${progressPercentage}%` }}
							/>
						</div>
					</div>
				)}
			</div>

			{/* Sections */}
			{sections.length === 0 ? (
				<div className="bg-muted/50 rounded-lg p-12 text-center">
					<div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
						<Target className="w-8 h-8 text-muted-foreground" />
					</div>
					<h3 className="text-lg font-medium text-foreground mb-2">No implementation plan yet</h3>
					<p className="text-muted-foreground mb-6">
						Generate an AI-powered implementation plan or create sections manually
					</p>
				</div>
			) : (
				<div className="space-y-6">
					<div className="flex items-center justify-between">
						<h3 className="text-lg font-semibold text-foreground">
							Implementation Sections
							<span className="ml-2 text-sm font-normal text-muted-foreground">({sections.length})</span>
						</h3>
						<Button
							variant="outline"
							onClick={() => setShowAddSection(!showAddSection)}
						>
							<Plus className="w-4 h-4 mr-2" />
							Add Section
						</Button>
					</div>

					{/* Add Section Form */}
					{showAddSection && (
						<div className="bg-muted/50 rounded-lg p-6 border border-dashed border-border">
							<div className="space-y-4">
								<div>
									<Label htmlFor="section-title" className="text-sm font-medium text-foreground">Section Title</Label>
									<Input
										id="section-title"
										value={newSectionTitle}
										onChange={(e) => setNewSectionTitle(e.target.value)}
										placeholder="e.g., Frontend Development"
										className="mt-1"
									/>
								</div>
								<div>
									<Label htmlFor="section-description" className="text-sm font-medium text-foreground">Description (Optional)</Label>
									<Textarea
										id="section-description"
										value={newSectionDescription}
										onChange={(e) => setNewSectionDescription(e.target.value)}
										placeholder="Brief description of what this section covers"
										rows={2}
										className="mt-1"
									/>
								</div>
								<div className="flex gap-3">
									<Button 
										onClick={addSection} 
										disabled={!newSectionTitle.trim()}
									>
										Add Section
									</Button>
									<Button 
										variant="ghost"
										onClick={() => {
											setShowAddSection(false)
											setNewSectionTitle("")
											setNewSectionDescription("")
										}}
									>
										Cancel
									</Button>
								</div>
							</div>
						</div>
					)}

					{/* Sections List */}
					<Accordion type="multiple" className="space-y-4">
						{sections.map((section) => {
							const completedTodosInSection = section.todos.filter(t => t.isCompleted).length
							const progressInSection = section.todos.length > 0 
								? (completedTodosInSection / section.todos.length) * 100 
								: 0

							return (
								<AccordionItem 
									key={section.id} 
									value={section.id.toString()}
									className="bg-card rounded-lg border border-border overflow-hidden"
								>
									<AccordionTrigger className="px-6 py-5 hover:no-underline [&[data-state=open]>div]:border-b [&[data-state=open]>div]:border-border">
										<div className="flex items-center justify-between w-full mr-4">
											<div className="flex items-center gap-4">
												<button
													onClick={(e) => {
														e.stopPropagation()
														toggleSectionCompletion(section.id)
													}}
													className="hover:scale-105 transition-transform"
												>
													{section.isCompleted ? (
														<CheckCircle2 className="w-5 h-5 text-green-600" />
													) : (
														<Circle className="w-5 h-5 text-muted-foreground hover:text-foreground" />
													)}
												</button>
												
												<div className="text-left">
													<div className="flex items-center gap-3 mb-1">
														<Link 
															href={`/project/${projectId}/idea/${ideaId}/steps/${section.id}`}
															className="text-lg font-semibold text-foreground hover:text-muted-foreground transition-colors"
															onClick={(e) => e.stopPropagation()}
														>
															{section.title}
														</Link>
														{section.isCompleted && (
															<span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
																Complete
															</span>
														)}
													</div>
													{section.description && (
														<p className="text-sm text-muted-foreground">
															{section.description}
														</p>
													)}
												</div>
											</div>
											
											<div className="flex items-center gap-4">
												<div className="text-right">
													<div className="text-sm font-medium text-foreground">
														{completedTodosInSection}/{section.todos.length} tasks
													</div>
													<div className="text-xs text-muted-foreground">
														{progressInSection.toFixed(0)}% complete
													</div>
												</div>
												<Button
													variant="ghost"
													size="sm"
													onClick={(e) => {
														e.stopPropagation()
														deleteSection(section.id)
													}}
													className="text-muted-foreground hover:text-destructive"
												>
													<Trash2 className="w-4 h-4" />
												</Button>
											</div>
										</div>
										
										{/* Progress bar */}
										<div className="mt-4 w-full">
											<div className="w-full bg-muted rounded-full h-1">
												<div 
													className="bg-primary h-1 rounded-full transition-all duration-300"
													style={{ width: `${progressInSection}%` }}
												/>
											</div>
										</div>
									</AccordionTrigger>
									
									<AccordionContent className="px-6 pb-6">
										{/* Tasks */}
										<div className="space-y-3">
											{section.todos.map((todo, index) => (
												<div
													key={todo.id}
													className={`group flex items-start gap-3 p-4 rounded-lg transition-all ${
														todo.isCompleted 
															? 'bg-green-50 border border-green-100 dark:bg-green-900/20 dark:border-green-800' 
															: 'bg-muted/50'
													}`}
												>
													<button
														onClick={() => toggleTodoCompletion(todo.id, section.id)}
														className="mt-0.5 hover:scale-105 transition-transform"
													>
														{todo.isCompleted ? (
															<CheckCircle2 className="w-4 h-4 text-green-600" />
														) : (
															<Circle className="w-4 h-4 text-muted-foreground hover:text-foreground" />
														)}
													</button>
													
													<div className="flex-1 min-w-0">
														<div className="flex items-center gap-2 mb-1">
															<span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">
																{(index + 1).toString().padStart(2, '0')}
															</span>
															{todo.isCompleted && (
																<span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
																	Done
																</span>
															)}
														</div>
														<p className={`text-sm font-medium ${
															todo.isCompleted 
																? "line-through text-muted-foreground" 
																: "text-foreground"
														}`}>
															{todo.title}
														</p>
														{todo.description && (
															<p className={`text-xs mt-1 ${
																todo.isCompleted 
																	? "line-through text-muted-foreground" 
																	: "text-muted-foreground"
															}`}>
																{todo.description}
															</p>
														)}
													</div>

													<Button
														variant="ghost"
														size="sm"
														onClick={() => deleteTodo(todo.id, section.id)}
														className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive h-6 w-6 p-0"
													>
														<Trash2 className="w-3 h-3" />
													</Button>
												</div>
											))}

											{/* Add Todo */}
											{showAddTodo === section.id ? (
												<div className="bg-muted/50 rounded-lg p-4 border border-dashed border-border">
													<div className="space-y-3">
														<Input
															value={newTodoTitle}
															onChange={(e) => setNewTodoTitle(e.target.value)}
															placeholder="Task title..."
															className="text-sm"
														/>
														<Textarea
															value={newTodoDescription}
															onChange={(e) => setNewTodoDescription(e.target.value)}
															placeholder="Description (optional)..."
															className="text-sm"
															rows={2}
														/>
														<div className="flex gap-2">
															<Button 
																onClick={() => addTodo(section.id)} 
																disabled={!newTodoTitle.trim()}
																size="sm"
															>
																Add
															</Button>
															<Button 
																variant="ghost" 
																size="sm"
																onClick={() => {
																	setShowAddTodo(null)
																	setNewTodoTitle("")
																	setNewTodoDescription("")
																}}
															>
																Cancel
															</Button>
														</div>
													</div>
												</div>
											) : (
												<Button
													variant="outline"
													size="sm"
													onClick={() => setShowAddTodo(section.id)}
													className="w-full border-dashed"
												>
													<Plus className="w-3 h-3 mr-2" />
													Add Task
												</Button>
											)}
										</div>
									</AccordionContent>
								</AccordionItem>
							)
						})}
					</Accordion>
				</div>
			)}
		</div>
	)
}