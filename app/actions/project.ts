"use server"

import { and, eq } from "drizzle-orm"
import { db } from "@/lib/db"
import { projects } from "@/lib/schema"
import { getCurrentSession } from "@/lib/session"

export async function getUserProjects() {
	try {
		const { user } = await getCurrentSession()
		if (!user) {
			return {
				success: false,
				error: "Unauthorized",
			}
		}

		const userProjects = await db.query.projects.findMany({
			where: eq(projects.userId, user.id),
			orderBy: (projects, { desc }) => [desc(projects.id)],
		})

		return { success: true, data: userProjects }
	} catch (error) {
		console.error("Error fetching user projects:", error)
		return {
			success: false,
			error:
				error instanceof Error ? error.message : "Failed to fetch projects",
		}
	}
}

export async function deleteProject(projectId: number) {
	try {
		const { user } = await getCurrentSession()
		if (!user) {
			return {
				success: false,
				error: "Unauthorized",
			}
		}

		const [deletedProject] = await db
			.delete(projects)
			.where(and(eq(projects.id, projectId), eq(projects.userId, user.id)))
			.returning()

		if (!deletedProject) {
			return {
				success: false,
				error: "Project not found or you don't have permission to delete it",
			}
		}

		return { success: true, data: deletedProject }
	} catch (error) {
		console.error("Error deleting project:", error)
		return {
			success: false,
			error:
				error instanceof Error ? error.message : "Failed to delete project",
		}
	}
}

export async function getProject(projectId: number) {
	try {
		const { user } = await getCurrentSession()
		if (!user) {
			return {
				success: false,
				error: "Unauthorized",
			}
		}

		if (Number.isNaN(projectId)) {
			return {
				success: false,
				error: "Invalid project ID",
			}
		}

		const project = await db.query.projects.findFirst({
			where: and(eq(projects.id, projectId), eq(projects.userId, user.id)),
		})

		if (!project) {
			return {
				success: false,
				error: "Project not found",
			}
		}

		return { success: true, data: project }
	} catch (error) {
		console.error("Error in getProject action:", error)
		return {
			success: false,
			error: error instanceof Error ? error.message : "Failed to fetch project",
		}
	}
}
