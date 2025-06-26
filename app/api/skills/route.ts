import { eq } from "drizzle-orm"
import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { users } from "@/lib/schema"
import { getCurrentSession } from "@/lib/session"

export async function GET() {
	try {
		// Get the current session and user
		const { user } = await getCurrentSession()
		if (!user) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
		}

		// Get the user's current skills
		const userData = await db
			.select({ skills: users.skills })
			.from(users)
			.where(eq(users.id, user.id))
			.limit(1)

		if (!userData.length) {
			return NextResponse.json({ error: "User not found" }, { status: 404 })
		}

		return NextResponse.json({ skills: userData[0].skills }, { status: 200 })
	} catch (error) {
		console.error("Error fetching skills:", error)
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 },
		)
	}
}

export async function POST(request: Request) {
	try {
		// Get the current session and user
		const { user } = await getCurrentSession()
		if (!user) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
		}

		// Parse the request body
		const body = await request.json()
		const { skills } = body

		// Validate that skills is an array
		if (!Array.isArray(skills)) {
			return NextResponse.json(
				{ error: "Skills must be an array" },
				{ status: 400 },
			)
		}

		// Validate each skill object
		for (const skill of skills) {
			if (
				typeof skill !== "object" ||
				typeof skill.name !== "string" ||
				typeof skill.level !== "string"
			) {
				return NextResponse.json(
					{
						error:
							"Each skill must be an object with 'name' and 'level' properties",
					},
					{ status: 400 },
				)
			}
		}

		// Update the user's skills in the database
		await db.update(users).set({ skills }).where(eq(users.id, user.id))

		return NextResponse.json(
			{ message: "Skills updated successfully", skillsCount: skills.length },
			{ status: 200 },
		)
	} catch (error) {
		console.error("Error updating skills:", error)
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 },
		)
	}
}
