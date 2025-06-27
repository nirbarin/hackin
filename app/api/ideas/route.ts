import { desc, eq } from "drizzle-orm"
import { type NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { ideas } from "@/lib/schema"
import { getCurrentSession } from "@/lib/session"

export async function GET(request: NextRequest) {
	try {
		const { user } = await getCurrentSession()

		if (!user) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
		}

		const { searchParams } = new URL(request.url)
		const projectId = searchParams.get("projectId")

		if (!projectId) {
			return NextResponse.json(
				{ error: "Project ID is required" },
				{ status: 400 },
			)
		}

		// Get all ideas for the project
		const projectIdeas = await db
			.select()
			.from(ideas)
			.where(eq(ideas.projectId, Number.parseInt(projectId)))
			.orderBy(desc(ideas.id))

		return NextResponse.json({
			success: true,
			data: projectIdeas,
		})
	} catch (error) {
		console.error("Error fetching ideas:", error)
		return NextResponse.json(
			{ error: "Failed to fetch ideas" },
			{ status: 500 },
		)
	}
}

export async function POST(request: NextRequest) {
	try {
		const { user } = await getCurrentSession()

		if (!user) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
		}

		const body = await request.json()
		const { ideaId, action } = body

		if (!ideaId || !action) {
			return NextResponse.json(
				{ error: "Idea ID and action are required" },
				{ status: 400 },
			)
		}

		if (action === "choose") {
			// Mark the idea as final and unmark others
			await db
				.update(ideas)
				.set({ isFinal: false })
				.where(
					eq(
						ideas.projectId,
						(
							await db
								.select({ projectId: ideas.projectId })
								.from(ideas)
								.where(eq(ideas.id, ideaId))
								.limit(1)
						)[0].projectId,
					),
				)

			await db.update(ideas).set({ isFinal: true }).where(eq(ideas.id, ideaId))

			return NextResponse.json({
				success: true,
				message: "Idea selected successfully",
			})
		}

		return NextResponse.json({ error: "Invalid action" }, { status: 400 })
	} catch (error) {
		console.error("Error updating idea:", error)
		return NextResponse.json(
			{ error: "Failed to update idea" },
			{ status: 500 },
		)
	}
}
