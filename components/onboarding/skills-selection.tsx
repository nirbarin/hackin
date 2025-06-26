"use client"

import { Award, Filter, Search, X } from "lucide-react"
import * as React from "react"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
// Consolidated types and data - no longer importing from skills-selection
export interface Skill {
	id: string
	name: string
	category: string
}

export interface SelectedSkill {
	skill: Skill
	level: SkillLevel
}

export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert"

export const skillLevels: {
	value: SkillLevel
	label: string
	description: string
}[] = [
	{
		value: "beginner",
		label: "Beginner",
		description: "Just getting started, basic understanding",
	},
	{
		value: "intermediate",
		label: "Intermediate",
		description: "Comfortable with fundamentals, some experience",
	},
	{
		value: "advanced",
		label: "Advanced",
		description: "Extensive experience, can handle complex tasks",
	},
	{
		value: "expert",
		label: "Expert",
		description: "Mastery level, can teach and lead others",
	},
]

export const skillsData: Skill[] = [
	// Frontend Technologies
	{ id: "html", name: "HTML", category: "Frontend" },
	{ id: "css", name: "CSS", category: "Frontend" },
	{ id: "javascript", name: "JavaScript", category: "Frontend" },
	{ id: "typescript", name: "TypeScript", category: "Frontend" },
	{ id: "react", name: "React", category: "Frontend" },
	{ id: "nextjs", name: "Next.js", category: "Frontend" },
	{ id: "vue", name: "Vue.js", category: "Frontend" },
	{ id: "angular", name: "Angular", category: "Frontend" },
	{ id: "svelte", name: "Svelte", category: "Frontend" },
	{ id: "tailwind", name: "Tailwind CSS", category: "Frontend" },

	// Backend Technologies
	{ id: "nodejs", name: "Node.js", category: "Backend" },
	{ id: "python", name: "Python", category: "Backend" },
	{ id: "java", name: "Java", category: "Backend" },
	{ id: "csharp", name: "C#", category: "Backend" },
	{ id: "php", name: "PHP", category: "Backend" },
	{ id: "golang", name: "Go", category: "Backend" },
	{ id: "rust", name: "Rust", category: "Backend" },
	{ id: "ruby", name: "Ruby", category: "Backend" },

	// Databases
	{ id: "mysql", name: "MySQL", category: "Database" },
	{ id: "postgresql", name: "PostgreSQL", category: "Database" },
	{ id: "mongodb", name: "MongoDB", category: "Database" },
	{ id: "redis", name: "Redis", category: "Database" },
	{ id: "sqlite", name: "SQLite", category: "Database" },

	// DevOps & Tools
	{ id: "docker", name: "Docker", category: "DevOps" },
	{ id: "kubernetes", name: "Kubernetes", category: "DevOps" },
	{ id: "aws", name: "AWS", category: "DevOps" },
	{ id: "azure", name: "Azure", category: "DevOps" },
	{ id: "gcp", name: "Google Cloud", category: "DevOps" },
	{ id: "git", name: "Git", category: "DevOps" },

	// Mobile
	{ id: "react-native", name: "React Native", category: "Mobile" },
	{ id: "flutter", name: "Flutter", category: "Mobile" },
	{ id: "swift", name: "Swift", category: "Mobile" },
	{ id: "kotlin", name: "Kotlin", category: "Mobile" },
]

interface SkillsSelectionProps {
	onSkillsChange?: (skills: SelectedSkill[]) => void
	selectedSkills?: SelectedSkill[]
}

export function SkillsSelection({
	onSkillsChange,
	selectedSkills: initialSkills = [],
}: SkillsSelectionProps) {
	const [selectedSkills, setSelectedSkills] =
		React.useState<SelectedSkill[]>(initialSkills)
	const [openItems, setOpenItems] = React.useState<string[]>([])
	const [searchTerm, setSearchTerm] = React.useState("")
	const [selectedCategory, setSelectedCategory] = React.useState<string>("all")

	// Filter skills based on search and category
	const filteredSkills = React.useMemo(() => {
		let filtered = skillsData

		if (searchTerm) {
			filtered = filtered.filter(
				skill =>
					skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
					skill.category.toLowerCase().includes(searchTerm.toLowerCase()),
			)
		}

		if (selectedCategory !== "all") {
			filtered = filtered.filter(skill => skill.category === selectedCategory)
		}

		return filtered
	}, [searchTerm, selectedCategory])

	// Group filtered skills by category
	const skillsByCategory = React.useMemo(() => {
		return filteredSkills.reduce(
			(acc, skill) => {
				if (!acc[skill.category]) {
					acc[skill.category] = []
				}
				acc[skill.category].push(skill)
				return acc
			},
			{} as Record<string, Skill[]>,
		)
	}, [filteredSkills])

	// Get unique categories
	const categories = React.useMemo(() => {
		return Array.from(new Set(skillsData.map(skill => skill.category)))
	}, [])

	const isSkillSelected = (skillId: string) => {
		return selectedSkills.some(s => s.skill.id === skillId)
	}

	const getSelectedSkillLevel = (skillId: string) => {
		return selectedSkills.find(s => s.skill.id === skillId)?.level
	}

	const handleSkillSelect = (skill: Skill, level: SkillLevel) => {
		const newSelectedSkills = [...selectedSkills]
		const existingIndex = newSelectedSkills.findIndex(
			s => s.skill.id === skill.id,
		)

		if (existingIndex >= 0) {
			newSelectedSkills[existingIndex] = { skill, level }
		} else {
			newSelectedSkills.push({ skill, level })
		}

		setSelectedSkills(newSelectedSkills)
		onSkillsChange?.(newSelectedSkills)

		// Close the accordion after selecting a level
		setOpenItems(prev => prev.filter(item => item !== skill.id))
	}

	const handleSkillDeselect = (skillId: string) => {
		const newSelectedSkills = selectedSkills.filter(s => s.skill.id !== skillId)
		setSelectedSkills(newSelectedSkills)
		onSkillsChange?.(newSelectedSkills)

		// Close the accordion item when deselecting
		setOpenItems(prev => prev.filter(item => item !== skillId))
	}

	const handleAccordionValueChange = (value: string[]) => {
		setOpenItems(value)
	}

	const getLevelIcon = (level: SkillLevel) => {
		const icons: Record<SkillLevel, string> = {
			beginner: "🌱",
			intermediate: "🌿",
			advanced: "🌳",
			expert: "⭐",
		}
		return icons[level]
	}

	const getLevelColor = (level: SkillLevel) => {
		const colors: Record<SkillLevel, string> = {
			beginner:
				"bg-green-100 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-200 dark:border-green-700",
			intermediate:
				"bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/50 dark:text-blue-200 dark:border-blue-700",
			advanced:
				"bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/50 dark:text-purple-200 dark:border-purple-700",
			expert:
				"bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/50 dark:text-yellow-200 dark:border-yellow-700",
		}
		return colors[level]
	}

	return (
		<div className="w-full max-w-6xl mx-auto p-6">
			{/* Header */}
			<div className="mb-8">
				<h2 className="text-3xl font-bold mb-2">Tell us about your skills</h2>
				<p className="text-muted-foreground text-lg">
					Select the technologies you&apos;re familiar with and indicate your
					level of expertise.
				</p>
			</div>

			{/* Selected Skills Summary - Moved to Top */}

			{/* Skill Level Reference */}
			<div className="mb-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg border">
				<h4 className="font-semibold mb-3 text-sm">Skill Level Reference:</h4>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					{skillLevels.map(level => (
						<div key={level.value} className="flex items-start gap-2">
							<span className="text-lg mt-0.5">
								{getLevelIcon(level.value)}
							</span>
							<div className="min-w-0">
								<div className="font-medium text-sm">{level.label}</div>
								<div className="text-xs text-muted-foreground leading-tight">
									{level.description}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Search and Filter */}
			<div className="mb-6 flex flex-col sm:flex-row gap-4">
				<div className="relative flex-1">
					<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
					<Input
						placeholder="Search skills..."
						value={searchTerm}
						onChange={e => setSearchTerm(e.target.value)}
						className="pl-10"
					/>
				</div>

				<div className="flex items-center gap-2">
					<Filter className="h-4 w-4 text-muted-foreground" />
					<select
						value={selectedCategory}
						onChange={e => setSelectedCategory(e.target.value)}
						className="px-3 py-2 bg-background border border-input rounded-md text-sm"
					>
						<option value="all">All Categories</option>
						{categories.map(category => (
							<option key={category} value={category}>
								{category}
							</option>
						))}
					</select>
				</div>
			</div>

			{/* Skills Grid */}
			{Object.entries(skillsByCategory).map(([category, skills]) => (
				<div key={category} className="mb-8">
					<div className="flex items-center gap-2 mb-4">
						<h3 className="text-lg font-semibold text-primary">{category}</h3>
						<Badge variant="outline">
							{skills.filter(skill => isSkillSelected(skill.id)).length} /{" "}
							{skills.length}
						</Badge>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-start auto-rows-max">
						{skills.map(skill => {
							const isSelected = isSkillSelected(skill.id)
							const selectedLevel = getSelectedSkillLevel(skill.id)

							return (
								<div
									key={skill.id}
									className={cn(
										"border border-border rounded-lg transition-all duration-200 hover:shadow-md mb-3 overflow-hidden",
										isSelected
											? "bg-primary/5 border-primary shadow-sm ring-1 ring-primary/20"
											: "bg-background hover:border-primary/50",
									)}
								>
									<Accordion
										type="multiple"
										value={openItems}
										onValueChange={handleAccordionValueChange}
										className="w-full"
									>
										<AccordionItem value={skill.id} className="border-0">
											<AccordionTrigger
												className={cn(
													"px-4 py-3 hover:no-underline",
													isSelected && "text-primary font-medium",
												)}
											>
												<div className="flex items-center justify-between w-full">
													<div className="flex items-center gap-2">
														<span>{skill.name}</span>
														{isSelected && selectedLevel && (
															<Badge
																variant="outline"
																className={cn(
																	"text-xs",
																	getLevelColor(selectedLevel),
																)}
															>
																{getLevelIcon(selectedLevel)} {selectedLevel}
															</Badge>
														)}
													</div>
													{isSelected && (
														<div
															role="button"
															tabIndex={0}
															onClick={e => {
																e.stopPropagation()
																handleSkillDeselect(skill.id)
															}}
															onKeyDown={e => {
																if (e.key === "Enter" || e.key === " ") {
																	e.stopPropagation()
																	handleSkillDeselect(skill.id)
																}
															}}
															className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive cursor-pointer rounded flex items-center justify-center transition-colors"
														>
															<X className="h-4 w-4 stroke-[2.5]" />
														</div>
													)}
												</div>
											</AccordionTrigger>

											<AccordionContent className="px-4 pb-4">
												<div className="space-y-2">
													{skillLevels.map(level => (
														<Button
															key={level.value}
															variant={
																selectedLevel === level.value
																	? "default"
																	: "outline"
															}
															size="sm"
															onClick={() =>
																handleSkillSelect(skill, level.value)
															}
															className="w-full justify-start h-auto p-3"
														>
															<div className="flex items-center gap-2">
																<span className="text-lg">
																	{getLevelIcon(level.value)}
																</span>
																<span className="font-medium">
																	{level.label}
																</span>
															</div>
														</Button>
													))}
												</div>
											</AccordionContent>
										</AccordionItem>
									</Accordion>
								</div>
							)
						})}
					</div>
				</div>
			))}

			{/* No results message */}
			{Object.keys(skillsByCategory).length === 0 && (
				<div className="text-center py-12">
					<div className="text-muted-foreground mb-4">
						<Search className="h-12 w-12 mx-auto mb-2 opacity-50" />
						<p>No skills found matching your search.</p>
					</div>
					<Button
						variant="outline"
						onClick={() => {
							setSearchTerm("")
							setSelectedCategory("all")
						}}
					>
						Clear filters
					</Button>
				</div>
			)}

			{/* Selected Skills Summary */}
			{selectedSkills.length > 0 && (
				<div className="mt-8 p-6 bg-muted/30 rounded-lg border">
					<div className="flex items-center gap-2 mb-4">
						<Award className="h-5 w-5 text-primary" />
						<h4 className="font-semibold">
							Selected Skills ({selectedSkills.length})
						</h4>
					</div>
					<div className="flex flex-wrap gap-2">
						{selectedSkills.map(({ skill, level }) => (
							<div
								key={skill.id}
								className={cn(
									"flex items-center gap-2 px-3 py-2 rounded-full text-sm border",
									getLevelColor(level),
								)}
							>
								<span className="text-sm">{getLevelIcon(level)}</span>
								<span className="font-medium">{skill.name}</span>
								<span className="text-xs opacity-75 capitalize">({level})</span>
								<Button
									variant="ghost"
									size="sm"
									onClick={() => handleSkillDeselect(skill.id)}
									className="h-4 w-4 p-0 hover:text-destructive ml-1"
								>
									<X className="h-3 w-3" />
								</Button>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	)
}
