import type { FC } from "react"
import { SkillCard } from "./SkillCard"

interface SkillCategoryProps {
	category: string
	skills: Array<{
		id: string
		name: string
		category?: string
	}>
	selectedSkills: Record<string, string>
	onSkillSelect: (skillId: string, level: string) => void
	onSkillDeselect: (skillId: string) => void
}

import { useState } from "react"

export const SkillCategory: FC<SkillCategoryProps> = ({
	category,
	skills,
	selectedSkills,
	onSkillSelect,
	onSkillDeselect,
}) => {
	const [openSkillId, setOpenSkillId] = useState<string | null>(null)

	const selectedCount = skills.filter(s => selectedSkills[s.id]).length
	const totalInCategory = skills.length

	return (
		<div className="space-y-3">
			<div className="flex justify-between items-center">
				<h3 className="text-xl font-bold">{category}</h3>
				<span className="text-sm text-base-content/60">
					{selectedCount} / {totalInCategory}
				</span>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
				{skills.map(skill => (
					<SkillCard
						key={skill.id}
						skill={skill}
						selectedLevel={selectedSkills[skill.id]}
						onLevelSelect={onSkillSelect}
						onLevelDeselect={onSkillDeselect}
						open={openSkillId === skill.id}
						setOpenSkillId={setOpenSkillId}
					/>
				))}
			</div>{" "}
		</div>
	)
}
