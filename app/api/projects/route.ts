import { eq } from "drizzle-orm"
import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { projects } from "@/lib/schema"
import { getCurrentSession } from "@/lib/session"

export async function GET() {
	try {
		const { user } = await getCurrentSession()
		if (!user) {
			return new NextResponse("Unauthorized", { status: 401 })
		}

		const userProjects = await db.query.projects.findMany({
			where: eq(projects.userId, user.id),
			columns: {
				id: true,
				hackathonName: true,
			},
			orderBy: (projects, { desc }) => [desc(projects.id)],
		})

		return NextResponse.json({ data: userProjects })
	} catch (error) {
		console.error("Error fetching projects:", error)
		return new NextResponse("Internal Server Error", { status: 500 })
	}
}
