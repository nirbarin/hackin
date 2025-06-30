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
}[] = [
        {
            value: "beginner",
            label: "Beginner",
            description: "Just getting started, basic understanding",
            bgClass: "bg-info",
        },
        {
            value: "intermediate",
            label: "Intermediate",
            description: "Comfortable, some experience",
            bgClass: "bg-success",
        },
        {
            value: "advanced",
            label: "Advanced",
            description: "Experienced, can handle complex tasks",
            bgClass: "bg-warning",
        },
        {
            value: "expert",
            label: "Expert",
            description: "Mastered, can teach and lead others",
            bgClass: "bg-error",
        },
    ]