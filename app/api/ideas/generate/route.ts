import { createOpenRouter } from "@openrouter/ai-sdk-provider"
import { generateObject } from "ai"
import { eq } from "drizzle-orm"
import { type NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { db } from "@/lib/db"
import { env } from "@/lib/env"
import { ideas, projects, users, userTeams } from "@/lib/schema"
import { getCurrentSession } from "@/lib/session"

const IdeaSchema = z.object({
	ideas: z
		.array(
			z.object({
				title: z
					.string()
					.describe("A catchy, engaging title for the project idea"),
				description: z
					.string()
					.describe("A brief 1-2 sentence description of the core concept"),
				content: z
					.string()
					.describe(
						"Detailed explanation of the idea, including features, implementation approach, and potential impact. Should be 2-3 paragraphs.",
					),
				techStack: z
					.array(z.string())
					.describe("Suggested technologies and frameworks"),
				difficulty: z
					.enum(["beginner", "intermediate", "advanced"])
					.describe("Estimated difficulty level"),
				timeEstimate: z
					.string()
					.describe("Estimated time to complete (e.g., '2-3 days', '1 week')"),
				targetAudience: z
					.string()
					.describe("Who would benefit from this project"),
			}),
		)
		.length(3)
		.describe("Exactly 3 unique and creative project ideas"),
})

export async function POST(request: NextRequest) {
	try {
		const { user } = await getCurrentSession()

		if (!user) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
		}

		const body = await request.json()
		const { projectId } = body

		if (!projectId) {
			return NextResponse.json(
				{ error: "Project ID is required" },
				{ status: 400 },
			)
		}

		// Get project details with team members and their skills
		const project = await db
			.select()
			.from(projects)
			.where(eq(projects.id, projectId))
			.limit(1)

		if (project.length === 0) {
			return NextResponse.json({ error: "Project not found" }, { status: 404 })
		}

		const projectData = project[0]

		// Get team members and their skills
		let teamMembers: any[] = []
		if (projectData.teamId) {
			teamMembers = await db
				.select({
					id: users.id,
					name: users.name,
					username: users.username,
					skills: users.skills,
				})
				.from(users)
				.innerJoin(userTeams, eq(users.id, userTeams.userId))
				.where(eq(userTeams.teamId, projectData.teamId))
		} else {
			// Just get the project owner
			const owner = await db
				.select({
					id: users.id,
					name: users.name,
					username: users.username,
					skills: users.skills,
				})
				.from(users)
				.where(eq(users.id, projectData.userId))
				.limit(1)

			teamMembers = owner
		}

		// Compile all skills from team members
		const allSkills = teamMembers.flatMap(
			member => (member.skills as { name: string; level: string }[]) || [],
		)

		// Create context for AI
		const context = {
			hackathonName: projectData.hackathonName,
			theme: projectData.theme,
			suggestedTech: projectData.suggestedTech,
			judgingCriteria: projectData.judgingCriteria,
			additionalData: projectData.additionalData,
			teamSkills: allSkills,
			teamSize: teamMembers.length,
			submissionDeadline: projectData.submissionTime,
		}

		const prompt = `Generate 3 unique and innovative project ideas for a hackathon with the following context:

**Hackathon Details:**
- Name: ${context.hackathonName}
- Theme: ${context.theme || "Open theme"}
- Suggested Technologies: ${context.suggestedTech || "Any technology"}
- Judging Criteria: ${context.judgingCriteria || "Innovation, technical implementation, presentation"}
- Additional Requirements: ${context.additionalData || "None specified"}
- Submission Deadline: ${context.submissionDeadline}

**Team Information:**
- Team Size: ${context.teamSize} member(s)
- Team Skills: ${allSkills.map(skill => `${skill.name} (${skill.level})`).join(", ") || "No specific skills listed"}

**Requirements:**
1. Each idea should be unique and innovative
2. Consider the team's skill set and size
3. Ensure the project is feasible within the given timeframe
4. Align with the hackathon theme and judging criteria
5. Provide actionable, detailed implementation guidance
6. Consider market viability and real-world impact

Generate ideas that are creative, technically sound, and achievable by this specific team.`

		const openrouter = createOpenRouter({
			apiKey: env.OPENROUTER_API_KEY,
		})

		const result = await generateObject({
			model: openrouter("mistralai/mistral-small-3.2-24b-instruct:free"),
			schema: IdeaSchema,
			prompt,
		})

		// Store generated ideas in database
		const savedIdeas = []
		for (const idea of result.object.ideas) {
			const [savedIdea] = await db
				.insert(ideas)
				.values({
					title: idea.title,
					description: idea.description,
					content: `${idea.content}\n\n**Tech Stack:** ${idea.techStack.join(", ")}\n**Difficulty:** ${idea.difficulty}\n**Time Estimate:** ${idea.timeEstimate}\n**Target Audience:** ${idea.targetAudience}`,
					projectId: projectId,
					isFinal: false,
				})
				.returning()

			savedIdeas.push({
				...savedIdea,
				...idea, // Include the structured AI response
			})
		}

		return NextResponse.json({
			success: true,
			ideas: savedIdeas,
			context: context,
		})
	} catch (error) {
		console.error("Error generating ideas:", error)
		return NextResponse.json(
			{ error: "Failed to generate ideas" },
			{ status: 500 },
		)
	}
}
