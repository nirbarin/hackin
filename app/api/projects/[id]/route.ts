import { and, eq } from "drizzle-orm"
import { NextResponse } from "next/server"
import { z } from "zod"
import { db } from "@/lib/db"
import { projects } from "@/lib/schema"
import { getCurrentSession } from "@/lib/session"

// Define the schema for updating a project
const updateProjectSchema = z.object({
	hackathon_name: z.string().min(1, "Hackathon name is required"),
	theme: z.string().optional(),
	tools: z.string().optional(),
	judging_criteria: z.string().optional(),
	additional_data: z.string().optional(),
	submision_time: z.string().datetime(),
})

export async function PUT(
	request: Request,
	{ params }: { params: { id: string } }
) {
	try {
		// Get the current session
		const { user } = await getCurrentSession()
		if (!user) {
			return new NextResponse("Unauthorized", { status: 401 })
		}

		const projectId = Number.parseInt(params.id)
		if (Number.isNaN(projectId)) {
			return new NextResponse(
				JSON.stringify({ error: "Invalid project ID" }),
				{ status: 400, headers: { "Content-Type": "application/json" } }
			)
		}

		// Parse and validate request body
		const body = await request.json()
		const validation = updateProjectSchema.safeParse(body)

		if (!validation.success) {
			return new NextResponse(
				JSON.stringify({ error: validation.error.issues }),
				{ status: 400, headers: { "Content-Type": "application/json" } }
			)
		}

		const {
			hackathon_name,
			theme,
			tools,
			judging_criteria,
			additional_data,
			submision_time,
		} = validation.data

		// Update the project in the database
		const [updatedProject] = await db
			.update(projects)
			.set({
				hackathonName: hackathon_name,
				theme: theme || null,
				suggestedTech: tools || null,
				judgingCriteria: judging_criteria || null,
				additionalData: additional_data || null,
				submissionTime: new Date(submision_time),
			})
			.where(and(eq(projects.id, projectId), eq(projects.userId, user.id)))
			.returning()

		if (!updatedProject) {
			return new NextResponse(
				JSON.stringify({ error: "Project not found or you don't have permission to edit it" }),
				{ status: 404, headers: { "Content-Type": "application/json" } }
			)
		}

		return NextResponse.json(updatedProject, { status: 200 })
	} catch (error) {
		console.error("Error updating project:", error)
		return new NextResponse(
			JSON.stringify({ error: "Internal server error" }),
			{ status: 500, headers: { "Content-Type": "application/json" } }
		)
	}
}

export async function GET(
	_request: Request,
	{ params }: { params: { id: string } }
) {
	try {
		const { user } = await getCurrentSession()
		if (!user) {
			return new NextResponse("Unauthorized", { status: 401 })
		}

		const projectId = Number.parseInt(params.id)
		if (Number.isNaN(projectId)) {
			return new NextResponse(
				JSON.stringify({ error: "Invalid project ID" }),
				{ status: 400, headers: { "Content-Type": "application/json" } }
			)
		}

		const project = await db.query.projects.findFirst({
			where: and(eq(projects.id, projectId), eq(projects.userId, user.id)),
		})

		if (!project) {
			return new NextResponse(
				JSON.stringify({ error: "Project not found" }),
				{ status: 404, headers: { "Content-Type": "application/json" } }
			)
		}

		return NextResponse.json(project)
	} catch (error) {
		console.error("Error fetching project:", error)
		return new NextResponse(
			JSON.stringify({ error: "Internal server error" }),
			{ status: 500, headers: { "Content-Type": "application/json" } }
		)
	}
}
