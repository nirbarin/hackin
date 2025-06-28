"use client"

import {
	CheckCircle2,
	Circle,
	ExternalLink,
	Loader2,
	Plus,
	Sparkles,
	Target,
	Trash2,
} from "lucide-react"
import Link from "next/link"
import { useCallback, useEffect, useState } from "react"
import { toast } from "sonner"
import { Badge } from "@/components/ui/badge"
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

		try {
			const response = await fetch(`/api/step-sections/${sectionId}`, {
				method: "PATCH",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ isCompleted: !section.isCompleted }),
			})

			if (response.ok) {
				setSections(prev => prev.map(s => 
					s.id === sectionId ? { ...s, isCompleted: !s.isCompleted } : s
				))
			}
		} catch (error) {
			console.error("Error updating section:", error)
		}
	}

	const toggleTodoCompletion = async (todoId: number, sectionId: number) => {
		const section = sections.find(s => s.id === sectionId)
		const todo = section?.todos.find(t => t.id === todoId)
		if (!todo) return

		try {
			const response = await fetch(`/api/step-todos/${todoId}`, {
				method: "PATCH",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ isCompleted: !todo.isCompleted }),
			})

			if (response.ok) {
				setSections(prev => prev.map(section => ({
					...section,
					todos: section.todos.map(t => 
						t.id === todoId ? { ...t, isCompleted: !t.isCompleted } : t
					)
				})))
			}
		} catch (error) {
			console.error("Error updating todo:", error)
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
			<div className="max-w-5xl mx-auto p-6 space-y-8">
				<div className="space-y-6">
					<div className="animate-pulse">
						<div className="h-8 bg-slate-200 rounded w-64 mb-4"></div>
						<div className="h-4 bg-slate-200 rounded w-96"></div>
					</div>
				</div>
				<div className="space-y-4">
					{[1, 2, 3].map(i => (
						<div key={i} className="h-24 bg-slate-100 rounded-lg animate-pulse"></div>
					))}
				</div>
			</div>
		)
	}

	return (
		<div className="space-y-6">
			{/* Header */}
			<div className="space-y-4">
				<div className="flex items-start justify-between">
					<div className="space-y-2">
						<h1 className="text-3xl font-bold flex items-center gap-3">
							<div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl shadow-sm">
								<Target className="h-7 w-7 text-blue-700" />
							</div>
							Implementation Plan
						</h1>
						<div className="space-y-1">
							<h2 className="text-lg font-medium text-foreground">{idea.title}</h2>
							<p className="text-muted-foreground">{idea.description}</p>
						</div>
					</div>
					
					{sections.length === 0 && (
						<Button onClick={generateSections} disabled={generating} size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg">
							{generating ? (
								<>
									<Loader2 className="h-5 w-5 mr-2 animate-spin" />
									Generating Plan...
								</>
							) : (
								<>
									<Sparkles className="h-5 w-5 mr-2" />
									Generate AI Implementation Plan
								</>
							)}
						</Button>
					)}
				</div>

				{/* Progress Overview */}
				{sections.length > 0 && (
					<Card>
						<CardHeader className="pb-3">
							<CardTitle className="text-lg">Progress Overview</CardTitle>
						</CardHeader>
						<CardContent className="space-y-3">
							<div className="flex items-center justify-between">
								<div className="space-y-1">
									<div className="text-sm font-medium text-muted-foreground">
										{completedTodos} of {totalTodos} todos completed
									</div>
									<div className="text-sm text-muted-foreground">
										{sections.filter(s => s.isCompleted).length} of {sections.length} sections done
									</div>
								</div>
								<div className="text-right">
										<div className="text-3xl font-bold text-blue-700 flex items-center gap-1">
											{progressPercentage.toFixed(0)}%
											<span className="text-xs text-blue-500 font-normal">complete</span>
										</div>								</div>
							</div>
							<div className="w-full bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full h-3 shadow-inner">
								<div 
									className="bg-gradient-to-r from-blue-600 to-indigo-500 h-3 rounded-full transition-all duration-300"
									style={{ width: `${progressPercentage}%` }}
								/>
							</div>
						</CardContent>
					</Card>
				)}
			</div>

			{/* Sections */}
			{sections.length === 0 ? (
					<Card className="border-2 border-dashed border-blue-100 bg-gradient-to-br from-blue-50/50 to-indigo-50/50">
						<CardContent className="py-16">
							<div className="text-center space-y-6">
								<div className="p-5 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full w-fit mx-auto shadow-md">
									<Target className="h-10 w-10 text-blue-700" />
								</div>
								<div className="space-y-3 max-w-md mx-auto">
									<h3 className="text-xl font-semibold text-blue-900">No implementation plan yet</h3>
									<p className="text-blue-700">
										Generate an AI-powered implementation plan to organize your project development or create custom sections manually
									</p>
								</div>
							</div>
						</CardContent>
					</Card>			) : (
				<div className="space-y-4">
					<div className="flex items-center justify-between">
						<h3 className="text-lg font-semibold">
							Implementation Sections
							<Badge variant="secondary" className="ml-2">
								{sections.length}
							</Badge>
						</h3>
						<Button
							variant="outline"
							onClick={() => setShowAddSection(!showAddSection)}
							className="border-blue-200 bg-blue-50 hover:bg-blue-100 text-blue-700 shadow-sm"
						>
							<Plus className="h-4 w-4 mr-2" />
							Add New Section
						</Button>
					</div>

					{/* Add Section Form */}
					{showAddSection && (
						<Card className="border-dashed">
							<CardContent className="pt-6 space-y-4">
								<div className="space-y-2">
									<Label htmlFor="section-title">Section Title</Label>
									<Input
										id="section-title"
										value={newSectionTitle}
										onChange={(e) => setNewSectionTitle(e.target.value)}
										placeholder="e.g., Frontend Development"
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="section-description">Description (Optional)</Label>
									<Textarea
										id="section-description"
										value={newSectionDescription}
										onChange={(e) => setNewSectionDescription(e.target.value)}
										placeholder="Brief description of what this section covers"
										rows={2}
									/>
								</div>
								<div className="flex gap-2">
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
							</CardContent>
						</Card>
					)}

					{/* Sections Accordion */}
					<Accordion type="multiple" className="space-y-4 pb-6">
						{sections.map((section) => {
							const completedTodosInSection = section.todos.filter(t => t.isCompleted).length
							const progressInSection = section.todos.length > 0 
								? (completedTodosInSection / section.todos.length) * 100 
								: 0

							return (
							<AccordionItem 
								key={section.id} 
								value={section.id.toString()}
								className="border-2 border-blue-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
							>									<AccordionTrigger className="px-6 py-5 hover:no-underline bg-gradient-to-r from-blue-50/50 to-indigo-50/30">
										<div className="flex items-center justify-between w-full mr-4">
											<div className="flex items-center gap-4">
											<button
												onClick={(e) => {
													e.stopPropagation()
													toggleSectionCompletion(section.id)
												}}
												className="hover:scale-125 transition-transform p-1 rounded-full bg-white shadow-sm"
											>
												{section.isCompleted ? (
													<CheckCircle2 className="h-6 w-6 text-green-600" />
												) : (
													<Circle className="h-6 w-6 text-blue-400 hover:text-blue-600" />
												)}
											</button>												<div className="text-left">
													<div className="flex items-center gap-2 mb-1">
														<Link 
															href={`/project/${projectId}/idea/${ideaId}/steps/${section.id}`}
															className="font-semibold text-lg text-blue-800 hover:text-blue-600 transition-colors flex items-center gap-2"
														>
															{section.title}
															<ExternalLink className="h-4 w-4 text-blue-500 opacity-70" />
														</Link>
														{section.isCompleted && (
															<Badge className="bg-green-600 hover:bg-green-700 px-3 py-1 font-medium">
																✓ Complete
															</Badge>
														)}
													</div>
														{section.description && (
															<p className="text-sm text-muted-foreground mt-1 italic bg-blue-50/50 p-1 px-2 rounded-md inline-block">
																{section.description}
															</p>
														)}												</div>
											</div>
											<div className="flex items-center gap-4">
									<div className="text-right">
										<div className="text-base font-bold flex items-center gap-1">
											<span className="text-green-600">{completedTodosInSection}</span>
											<span className="text-slate-300">/</span>
											<span>{section.todos.length}</span>
										</div>
										<div className="text-xs text-blue-500 font-medium">tasks completed</div>
									</div>									<div className="w-16 text-lg font-bold text-blue-700">
										{progressInSection.toFixed(0)}%
									</div>												<Button
													variant="ghost"
													size="sm"
													onClick={(e) => {
														e.stopPropagation()
														deleteSection(section.id)
													}}
													className="text-red-500 hover:text-red-700 hover:bg-red-50"
												>
													<Trash2 className="h-4 w-4" />
												</Button>
											</div>
										</div>
									</AccordionTrigger>
									<AccordionContent className="px-6 pb-6">
										<div className="space-y-3">
											{/* Progress bar for section */}
									<div className="w-full bg-blue-100 rounded-full h-2">
										<div 
											className="bg-blue-600 h-2 rounded-full transition-all duration-300 shadow-inner"
											style={{ width: `${progressInSection}%` }}
										/>
									</div>
											{/* Todos */}
											<div className="space-y-2">
												{section.todos.map((todo, index) => (
							<div
								key={todo.id}
								className={`group flex items-start gap-3 p-4 rounded-xl border transition-all hover:shadow-md ${
									todo.isCompleted 
										? 'bg-green-50/70 border-green-200' 
										: 'bg-white hover:bg-blue-50/30 border-blue-100/50'
								}`}
							>														<button
															onClick={() => toggleTodoCompletion(todo.id, section.id)}
															className="mt-0.5 hover:scale-125 transition-transform p-1 rounded-full bg-white shadow-sm"
														>
															{todo.isCompleted ? (
																<CheckCircle2 className="h-4 w-4 text-green-600" />
															) : (
																<Circle className="h-4 w-4 text-blue-400 hover:text-blue-600" />
															)}
														</button>
														
														<div className="flex-1 min-w-0">
															<div className="flex items-center gap-2 mb-1">
																<Badge variant="outline" className="text-xs font-mono px-1">
																	{(index + 1).toString().padStart(2, '0')}
																</Badge>
												{todo.isCompleted && (
													<Badge className="text-xs bg-green-600 hover:bg-green-700 px-2">
														✓ Done
													</Badge>
												)}															</div>
												<p className={`text-base font-medium leading-relaxed ${
													todo.isCompleted 
														? "line-through text-muted-foreground" 
														: "text-blue-900"
												}`}>
													{todo.title}
												</p>
												{todo.description && (
													<p className={`text-sm mt-2 bg-slate-50 p-1.5 px-2 rounded-md ${
														todo.isCompleted 
															? "line-through text-muted-foreground" 
															: "text-slate-600"
													}`}>
														{todo.description}
													</p>
												)}														</div>

														<Button
															variant="ghost"
															size="sm"
															onClick={() => deleteTodo(todo.id, section.id)}
															className="opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-700 hover:bg-red-50 h-6 w-6 p-0"
														>
															<Trash2 className="h-3 w-3" />
														</Button>
													</div>
												))}

												{/* Add Todo Form */}
												{showAddTodo === section.id ? (
													<Card className="border-dashed">
														<CardContent className="p-3 space-y-2">
															<Input
																value={newTodoTitle}
																onChange={(e) => setNewTodoTitle(e.target.value)}
																placeholder="Todo title..."
																className="text-sm"
															/>
															<Textarea
																value={newTodoDescription}
																onChange={(e) => setNewTodoDescription(e.target.value)}
																placeholder="Description (optional)..."
																className="text-sm min-h-[60px]"
																rows={2}
															/>
															<div className="flex gap-1">
																<Button 
																	onClick={() => addTodo(section.id)} 
																	disabled={!newTodoTitle.trim()}
																	size="sm"
																	className="text-xs h-7"
																>
																	Add
																</Button>
																<Button 
																	variant="ghost" 
																	size="sm"
																	className="text-xs h-7"
																	onClick={() => {
																		setShowAddTodo(null)
																		setNewTodoTitle("")
																		setNewTodoDescription("")
																	}}
																>
																	Cancel
																</Button>
															</div>
														</CardContent>
													</Card>
												) : (
												<Button
													variant="outline"
													size="sm"
													onClick={() => setShowAddTodo(section.id)}
													className="w-full border-dashed bg-blue-50/50 hover:bg-blue-100/50 text-blue-700"
												>
													<Plus className="h-3 w-3 mr-2" />
													Add New Task
												</Button>												)}
											</div>
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
