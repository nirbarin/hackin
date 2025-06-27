import { eq, or } from "drizzle-orm"
import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { projects, userTeams } from "@/lib/schema"
import { getCurrentSession } from "@/lib/session"

export async function GET() {
	try {
		const { user } = await getCurrentSession()
		if (!user) {
			return new NextResponse("Unauthorized", { status: 401 })
		}

		// Single query to get all projects where user is owner OR team member
		const userProjects = await db
			.selectDistinct({
				id: projects.id,
				hackathonName: projects.hackathonName,
			})
			.from(projects)
			.leftJoin(userTeams, eq(projects.teamId, userTeams.teamId))
			.where(
				or(
					eq(projects.userId, user.id), // User is project owner
					eq(userTeams.userId, user.id), // User is team member
				),
			)
			.orderBy(projects.id)

		// Sort by id descending
		userProjects.sort((a, b) => b.id - a.id)

		return NextResponse.json({ data: userProjects })
	} catch (error) {
		console.error("Error fetching projects:", error)
		return new NextResponse("Internal Server Error", { status: 500 })
	}
}
