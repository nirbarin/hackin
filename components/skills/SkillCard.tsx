import clsx from "clsx"
import type { FC } from "react"
import { AccordionItem, AccordionTitle } from "@/components/ui/accordion"
import { SkillLevels } from "./types"

interface SkillCardProps {
	skill: {
		id: string
		name: string
		category?: string
	}
	selectedLevel?: string
	onLevelSelect: (skillId: string, level: string) => void
	onLevelDeselect: (skillId: string) => void
	open: boolean
	setOpenSkillId: (id: string) => void
}

export const SkillCard: FC<SkillCardProps> = ({
	skill,
	selectedLevel,
	onLevelSelect,
	onLevelDeselect,
	open,
	setOpenSkillId,
}) => {
	const selectedLevelData = SkillLevels.find(l => l.value === selectedLevel)
	const skillBgClass = selectedLevelData
		? `${selectedLevelData.bgClass} text-black`
		: undefined

	return (
		<AccordionItem id={skill.id} className={skillBgClass} open={open}>
			<AccordionTitle>
				<button
					className="flex justify-between w-full items-center bg-transparent border-none p-0"
					onClick={() => setOpenSkillId(skill.id)}
					type="button"
					onKeyDown={e => {
						if (e.key === "Enter" || e.key === " ") setOpenSkillId(skill.id)
					}}
				>
					<span className="font-semibold">{skill.name}</span>
				</button>
			</AccordionTitle>
			<AccordionTitle>
				<button
					className="flex justify-between w-full items-center bg-transparent border-none p-0"
					onClick={() => setOpenSkillId(skill.id)}
					type="button"
					onKeyDown={e => {
						if (e.key === "Enter" || e.key === " ") setOpenSkillId(skill.id)
					}}
				>
					<span className="font-semibold">{skill.name}</span>
				</button>
			</AccordionTitle>
			<div className="grid grid-rows-4 gap-2">
				{SkillLevels.map(level => {
					const isSelected = selectedLevel === level.value
					return (
						<button
							key={level.value}
							type="button"
							className={clsx(
								"card shadow-md grow cursor-pointer text-left",
								level.btnClass,
								isSelected && "ring-2 ring-offset-2 ring-current",
							)}
							onClick={e => {
								e.stopPropagation()
								if (isSelected) {
									onLevelDeselect(skill.id)
								} else {
									onLevelSelect(skill.id, level.value)
								}
							}}
							onKeyDown={e => {
								if (e.key === "Enter" || e.key === " ") {
									e.preventDefault()
									if (isSelected) {
										onLevelDeselect(skill.id)
									} else {
										onLevelSelect(skill.id, level.value)
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
								<div className="capitalize p-2">{level.label}</div>
							</div>
						</button>
					)
				})}
			</div>
		</AccordionItem>
	)
}
