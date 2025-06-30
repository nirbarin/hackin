"use client"

import clsx from "clsx"
import { X } from "lucide-react"
import { useEffect, useMemo, useState } from "react"
import { list } from "@/components/skills/list"
import { ReferencePanel } from "@/components/skills/ReferencePanel"
import { SelectedSkills } from "@/components/skills/SelectedSkills"
import { type Skill, SkillLevels } from "@/components/skills/types"
import {
	Accordion,
	AccordionItem,
	AccordionTitle,
} from "@/components/ui/accordion"

export default function SkillsPage() {
	const [showReference, setShowReference] = useState(true)
	const [showForm, setShowForm] = useState(false)
	const [selectedSkills, setSelectedSkills] = useState<Record<string, string>>(
		{},
	)
	const [customSkills, setCustomSkills] = useState<Skill[]>([])
	const [searchQuery, setSearchQuery] = useState("")
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
		const savedSelectedSkills = localStorage.getItem("selectedSkills")
		const savedCustomSkills = localStorage.getItem("customSkills")
		if (savedSelectedSkills) {
			try {
				const selected = JSON.parse(savedSelectedSkills)
				let customs = savedCustomSkills ? JSON.parse(savedCustomSkills) : []
				customs = customs.filter((skill: Skill) => selected[skill.id])
				localStorage.setItem("customSkills", JSON.stringify(customs))
				setSelectedSkills(selected)
				setCustomSkills(customs)
			} catch (e) {
				console.error("Failed to parse saved skills", e)
			}
		}
		const handleStorageChange = (e: StorageEvent) => {
			if (e.key === "selectedSkills") {
				try {
					setSelectedSkills(e.newValue ? JSON.parse(e.newValue) : {})
				} catch (e) {
					console.error("Failed to parse skills from storage event", e)
				}
			}
		}
		window.addEventListener("storage", handleStorageChange)
		return () => window.removeEventListener("storage", handleStorageChange)
	}, [])

	const filteredList = useMemo(() => {
		if (!searchQuery.trim()) return list
		const query = searchQuery.toLowerCase()
		return list.filter(
			skill =>
				skill.name.toLowerCase().includes(query) ||
				skill.category.toLowerCase().includes(query),
		)
	}, [searchQuery])

	const groupedSkills = useMemo(() => {
		return [...filteredList, ...customSkills].reduce<Record<string, Skill[]>>(
			(acc, skill) => {
				acc[skill.category] = acc[skill.category] || []
				acc[skill.category].push(skill)
				return acc
			},
			{},
		)
	}, [filteredList, customSkills])

	const handleSkillSelect = (skillId: string, level: string) => {
		if (
			!list.some(skill => skill.id === skillId) &&
			!customSkills.some(skill => skill.id === skillId)
		) {
			setCustomSkills(prev => [
				...prev,
				{ id: skillId, name: skillId, category: "Beginner" },
			])
		}
		setSelectedSkills(prev => {
			const newSkills = {
				...prev,
				[skillId]: level,
			}
			localStorage.setItem("selectedSkills", JSON.stringify(newSkills))
			localStorage.setItem("customSkills", JSON.stringify(customSkills))
			return newSkills
		})
	}

	const handleSkillDeselect = (skillId: string) => {
		const rest = Object.fromEntries(
			Object.entries(selectedSkills).filter(([k]) => k !== skillId),
		)
		setSelectedSkills(rest)
		localStorage.setItem("selectedSkills", JSON.stringify(rest))
	}

	const clearAllSelections = () => {
		if (window.confirm("Are you sure you want to clear all selected skills?")) {
			setSelectedSkills({})
			localStorage.removeItem("selectedSkills")
		}
	}

	const handleDone = () => {
		setSelectedSkills({})
		localStorage.removeItem("selectedSkills")
	}

	return (
		<div className="flex flex-col grow p-6 w-full max-w-7xl mx-auto">
			<div className="space-y-1">
				<h1 className="text-3xl font-semibold">What do you know?</h1>
				<p className="text-lg text-base-content/60">and how well?</p>
			</div>

			{showReference ? (
				<ReferencePanel onClose={() => setShowReference(false)} />
			) : (
				<div className="my-4">
					<button
						type="button"
						onClick={() => setShowReference(true)}
						className="btn btn-sm btn-soft"
					>
						Show Skill Level Reference
					</button>
				</div>
			)}

			<div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
				<div className="lg:col-span-3 flex flex-col gap-5">
					<input
						type="text"
						placeholder="Search or add skills"
						className="input input-bordered w-full"
						value={searchQuery}
						onChange={e => setSearchQuery(e.target.value)}
					/>
					<Accordion className="space-y-6">
						{Object.entries(groupedSkills).map(([category, skills]) => {
							const selectedCount = skills.filter(
								s => selectedSkills[s.id],
							).length
							const totalInCategory = skills.length
							return (
								<div key={category} className="space-y-3">
									<div className="flex justify-between items-center">
										<h3 className="text-xl font-bold">{category}</h3>
										<span className="text-sm text-base-content/60">
											{selectedCount} / {totalInCategory}
										</span>
									</div>
									<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
										{skills.map(skill => {
											const selectedLevel = SkillLevels.find(
												l => l.value === selectedSkills[skill.id],
											)
											const skillbgClass = selectedLevel
												? `${selectedLevel.bgClass} text-base-100`
												: undefined
											return (
												<AccordionItem
													key={skill.id}
													id={skill.id}
													className={skillbgClass}
												>
													<AccordionTitle>
														<div className="flex justify-between w-full items-center">
															<span className="font-semibold">
																{skill.name}
															</span>
														</div>
													</AccordionTitle>
													<div className="grid grid-rows-4 gap-2">
														{SkillLevels.map(level => {
															const isSelected =
																selectedSkills[skill.id] === level.value
															return (
																<button
																	key={level.value}
																	type="button"
																	className={clsx(
																		"card shadow-md grow cursor-pointer text-left",
																		level.btnClass,
																		isSelected &&
																			"ring-2 ring-offset-2 ring-current",
																	)}
																	onClick={e => {
																		e.stopPropagation()
																		if (isSelected) {
																			handleSkillDeselect(skill.id)
																		} else {
																			handleSkillSelect(skill.id, level.value)
																		}
																	}}
																	onKeyDown={e => {
																		if (e.key === "Enter" || e.key === " ") {
																			e.preventDefault()
																			if (isSelected) {
																				handleSkillDeselect(skill.id)
																			} else {
																				handleSkillSelect(skill.id, level.value)
																			}
																		}
																	}}
																>
																	<div className="flex items-center gap-2 w-full">
																		<input
																			type="radio"
																			className="radio radio-sm"
																			checked={isSelected}
																			readOnly
																		/>
																		<div className="capitalize p-2">
																			{level.label}
																		</div>
																	</div>
																</button>
															)
														})}
													</div>
												</AccordionItem>
											)
										})}
									</div>
								</div>
							)
						})}
					</Accordion>
					{showForm ? (
						<form
							className="mt-4 flex items-center justify-center gap-2"
							onSubmit={e => e.preventDefault()}
						>
							<input
								type="text"
								placeholder="Add a custom skill"
								className="input input-bordered w-full"
								value={searchQuery}
								onChange={e => setSearchQuery(e.target.value)}
							/>
							<button
								type="submit"
								className="btn btn-soft"
								onClick={() => {
									if (!searchQuery.trim()) return
									if (
										customSkills.some(
											s =>
												s.name.toLowerCase() ===
												searchQuery.trim().toLowerCase(),
										) ||
										list.some(
											s =>
												s.name.toLowerCase() ===
												searchQuery.trim().toLowerCase(),
										)
									) {
										alert("This skill already exists!")
										setSearchQuery("")
										return
									}
									setCustomSkills(prev => {
										const updatedSkills = [
											...prev,
											{
												id: `${searchQuery}-${Date.now()}`,
												name: searchQuery,
												category: "Custom",
											},
										]
										localStorage.setItem(
											"customSkills",
											JSON.stringify(updatedSkills),
										)
										return updatedSkills
									})
									setSearchQuery("")
								}}
							>
								Add Skill
							</button>
							<button
								type="button"
								onClick={() => setShowForm(false)}
								className="btn btn-circle btn-soft btn-error"
							>
								<X className="w-4 h-4" />
							</button>
						</form>
					) : (
						<button
							type="button"
							onClick={() => setShowForm(true)}
							className="btn btn-soft"
						>
							Add a Custom Skill
						</button>
					)}
				</div>
				<div className="lg:col-span-1">
					{isClient && (
						<div className="p-6 sticky top-6 bg-base-200 rounded-lg">
							<SelectedSkills
								selectedSkills={selectedSkills}
								allSkills={list}
								customSkills={customSkills}
								onClearAll={clearAllSelections}
								onRemoveSkill={handleSkillDeselect}
								onDone={handleDone}
								setSearchQuery={setSearchQuery}
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
