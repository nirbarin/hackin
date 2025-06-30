"use client"

import clsx from "clsx"
import { X } from "lucide-react"
import { useState } from "react"
import { list } from "@/components/skills/list"
import { type SkillLevel, SkillLevels } from "@/components/skills/types"
import {
	Accordion,
	AccordionItem,
	AccordionTitle,
} from "@/components/ui/accordion"

const grouped = list.reduce<Record<string, typeof list>>((acc, skill) => {
	acc[skill.category] = acc[skill.category] || []
	acc[skill.category].push(skill)
	return acc
}, {})

export default function Onboarding() {
	const [showReference, setShowReference] = useState(true)

	const [selected, setSelected] = useState<Record<string, SkillLevel>>({})

	const selectCount = (category: string) =>
		(grouped[category] || []).map(s => s.id).filter(id => selected[id]).length

	return (
		<div className="flex flex-col grow p-6 w-full max-w-7xl mx-auto">
			<div className="text-3xl font-semibold">What do you know?</div>
			<div className="text-lg text-base-content/60">and how well?</div>

			{showReference ? (
				<div className="my-5 p-4 bg-base-100">
					<div className="flex font-semibold mb-3 text-sm text-base-content items-center">
						<div>Skill Level Reference :</div>
						<div className="grow" />
						<button
							type="button"
							onClick={() => setShowReference(false)}
							className="btn btn-circle btn-soft btn-error"
						>
							<X className="w-4 h-4" />
						</button>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						{SkillLevels.map(level => (
							<div key={level.value} className="flex flex-col p-2 gap-1">
								<div className="flex gap-2 items-center font-medium text-sm text-base-content">
									<span className={clsx("capitalize", `text-${level.bgClass}`)}>
										{level.label}
									</span>
									<span
										className={clsx(
											"w-2 h-2 rounded-full animate-ping-slow",
											level.bgClass,
										)}
									/>
								</div>
								<div className="text-xs text-base-content/60 leading-tight">
									{level.description}
								</div>
							</div>
						))}
					</div>
				</div>
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

			<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
				<div className="lg:col-span-3 flex flex-col gap-5">
					<input
						type="text"
						placeholder="Search or add skills"
						className="input input-bordered w-full"
					/>
					<Accordion onlyOne className="space-y-6">
						{Object.entries(grouped).map(([category, skills]) => {
							const selectedCount = selectCount(category)
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
												l => l.value === selected[skill.id],
											)
											const skillbgClass = selectedLevel
												? `${selectedLevel.bgClass} text-black`
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
																selected[skill.id] === level.value
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
																	onClick={() => {
																		if (isSelected) {
																			const rest = { ...selected }
																			delete rest[skill.id]
																			setSelected(rest)
																		} else {
																			setSelected({
																				...selected,
																				[skill.id]: level.value,
																			})
																		}
																	}}
																	onKeyDown={e => {
																		if (e.key === "Enter" || e.key === " ") {
																			e.preventDefault()
																			if (isSelected) {
																				const rest = { ...selected }
																				delete rest[skill.id]
																				setSelected(rest)
																			} else {
																				setSelected({
																					...selected,
																					[skill.id]: level.value,
																				})
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
				</div>
				<div className="lg:col-span-1">
					<div className="p-6 sticky top-6 bg-base-200">
						<div className="flex items-center gap-2 mb-4">
							<h3 className="font-semibold text-lg">Selected Skills</h3>
						</div>
						<div>
							{Object.keys(selected).length === 0 ? (
								<div className="text-base-content/70 text-sm">
									No skills selected yet
								</div>
							) : (
								<>
									<ul className="space-y-2">
										{Object.entries(selected).map(([skillId, levelValue]) => {
											const skill = list.find(s => s.id === skillId)
											const level = SkillLevels.find(
												l => l.value === levelValue,
											)
											if (!skill || !level) return null
											return (
												<li key={skillId} className="flex items-center gap-2">
													<button
														type="button"
														className={clsx(
															"btn btn-sm grow justify-start",
															level.btnClass,
														)}
													>
														<span className="font-medium">{skill.name}</span>
														<span className="ml-2">{level.label}</span>
													</button>
													<button
														type="button"
														className="btn btn-xs btn-circle btn-ghost ml-1"
														aria-label={`Remove ${skill.name}`}
														onClick={() => {
															const rest = { ...selected }
															delete rest[skillId]
															setSelected(rest)
														}}
													>
														<span className="text-lg leading-none">×</span>
													</button>
												</li>
											)
										})}
									</ul>
									<button type="button" className="btn btn-soft btn-block mt-4">
										Done choosing?
									</button>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
