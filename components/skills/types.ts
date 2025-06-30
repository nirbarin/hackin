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

export const SkillLevels: {
	value: SkillLevel
	label: string
	description: string
	bgClass: string
	btnClass: string
}[] = [
	{
		value: "beginner",
		label: "Beginner",
		description: "Just getting started, basic understanding",
		bgClass: "bg-info",
		btnClass: "btn btn-info",
	},
	{
		value: "intermediate",
		label: "Intermediate",
		description: "Comfortable, some experience",
		bgClass: "bg-success",
		btnClass: "btn btn-success",
	},
	{
		value: "advanced",
		label: "Advanced",
		description: "Experienced, can handle complex tasks",
		bgClass: "bg-warning",
		btnClass: "btn btn-warning",
	},
	{
		value: "expert",
		label: "Expert",
		description: "Mastered, can teach and lead others",
		bgClass: "bg-error",
		btnClass: "btn btn-error",
	},
]
