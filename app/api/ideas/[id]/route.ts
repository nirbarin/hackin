import { eq } from "drizzle-orm"
import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { ideas } from "@/lib/schema"
import { getCurrentSession } from "@/lib/session"

export async function GET(
	_request: Request,
	{ params }: { params: Promise<{ id: string }> },
) {
	try {
		const { id } = await params
		const { user } = await getCurrentSession()

		if (!user) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
		}

		const ideaId = Number.parseInt(id)

		if (Number.isNaN(ideaId)) {
			return NextResponse.json({ error: "Invalid idea ID" }, { status: 400 })
		}

		// Get the idea
		const idea = await db
			.select()
			.from(ideas)
			.where(eq(ideas.id, ideaId))
			.limit(1)

		if (idea.length === 0) {
			return NextResponse.json({ error: "Idea not found" }, { status: 404 })
		}

		return NextResponse.json(idea[0])
	} catch (error) {
		console.error("Error fetching idea:", error)
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 },
		)
	}
}

export async function DELETE(
	_request: Request,
	{ params }: { params: Promise<{ id: string }> },
) {
	try {
		const { id } = await params
		const { user } = await getCurrentSession()

		if (!user) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
		}

		const ideaId = Number.parseInt(id)

		if (Number.isNaN(ideaId)) {
			return NextResponse.json({ error: "Invalid idea ID" }, { status: 400 })
		}

		// Check if the idea exists
		const existingIdea = await db
			.select()
			.from(ideas)
			.where(eq(ideas.id, ideaId))
			.limit(1)

		if (existingIdea.length === 0) {
			return NextResponse.json({ error: "Idea not found" }, { status: 404 })
		}

		// Delete the idea
		await db.delete(ideas).where(eq(ideas.id, ideaId))

		return NextResponse.json({
			success: true,
			message: "Idea deleted successfully",
		})
	} catch (error) {
		console.error("Error deleting idea:", error)
		return NextResponse.json(
			{ error: "Failed to delete idea" },
			{ status: 500 },
		)
	}
}
