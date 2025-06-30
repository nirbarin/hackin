import { X } from "lucide-react"
import type { FC } from "react"
import { type Skill, SkillLevels } from "./types"

interface SelectedSkillsProps {
	setSearchQuery: (q: string) => void
	selectedSkills: Record<string, string>
	allSkills: Skill[]
	customSkills: Skill[]
	onClearAll: () => void
	onRemoveSkill: (skillId: string) => void
	onDone?: () => void
}

export const SelectedSkills: FC<SelectedSkillsProps> = ({
	selectedSkills,
	allSkills,
	customSkills,
	onClearAll,
	onRemoveSkill,
	onDone,
	setSearchQuery,
}) => {
	const renderSkillList = (skills: Skill[]) =>
		skills.length > 0 && (
			<ul className="space-y-2">
				{skills.map(skill => {
					const levelValue = selectedSkills[skill.id]
					const level = SkillLevels.find(l => l.value === levelValue)
					if (!level) return null

					return (
						<li
							key={skill.id}
							className="flex justify-between items-center p-2 bg-base-100 rounded-lg group cursor-pointer"
							onClick={() => {
								setSearchQuery(skill.name)
							}}
							onKeyDown={e => {
								if (e.key === "Enter" || e.key === " ") {
									e.preventDefault()
									setSearchQuery(skill.name)
								}
							}}
						>
							<div className="flex-1">
								<div className="font-medium">{skill.name}</div>
								<div className="text-sm text-base-content/60">
									{level.label}
								</div>
							</div>
							<button
								type="button"
								onClick={e => {
									e.stopPropagation()
									onRemoveSkill(skill.id)
								}}
								className={`btn btn-xs btn-circle transition-opacity ${level.btnClass}`}
								aria-label={`Remove ${skill.name}`}
							>
								<X className="w-4 h-4" />
							</button>
						</li>
					)
				})}
			</ul>
		)

	const selectedSkillIds = [
		...allSkills.map(s => s.id),
		...customSkills.map(s => s.id),
	].filter(id => selectedSkills[id])

	if (selectedSkillIds.length === 0) {
		return (
			<div className="text-base-content/70 text-sm">No skills selected yet</div>
		)
	}
	const allpluscustomSkills = [...allSkills, ...customSkills]
	return (
		<>
			<div className="flex justify-between items-center mb-4">
				<h3 className="font-semibold text-lg">Selected Skills</h3>
				<button
					type="button"
					onClick={onClearAll}
					className="btn btn-sm btn-ghost text-error"
				>
					Clear All
				</button>
			</div>
			{renderSkillList(allpluscustomSkills)}
			<button
				type="button"
				className="btn btn-soft btn-block mt-4"
				onClick={onDone}
			>
				Done choosing?
			</button>
		</>
	)
}
