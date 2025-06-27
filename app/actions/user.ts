"use server"

import { eq } from "drizzle-orm"
import { db } from "@/lib/db"
import { users } from "@/lib/schema"
import { getCurrentSession } from "@/lib/session"

export async function getCurrentUser() {
	const session = await getCurrentSession()
	return session.user
}

export async function updateUserProfile(formData: FormData) {
	try {
		const { user } = await getCurrentSession()
		if (!user) {
			return {
				success: false,
				error: "Unauthorized",
			}
		}

		const name = formData.get("name")?.toString() || null
		const avatar = formData.get("avatar")?.toString() || null

		const [updatedUser] = await db
			.update(users)
			.set({
				name,
				avatar,
			})
			.where(eq(users.id, user.id))
			.returning()

		return {
			success: true,
			data: {
				id: updatedUser.id,
				name: updatedUser.name,
				username: updatedUser.username,
				avatar: updatedUser.avatar,
				githubId: updatedUser.githubId,
			},
		}
	} catch (error) {
		console.error("Error updating profile:", error)
		return {
			success: false,
			error:
				error instanceof Error ? error.message : "Failed to update profile",
		}
	}
}

export async function getUserProfile() {
	try {
		const { user } = await getCurrentSession()
		if (!user) {
			return {
				success: false,
				error: "Unauthorized",
			}
		}

		const userProfile = await db.query.users.findFirst({
			where: eq(users.id, user.id),
			columns: {
				id: true,
				name: true,
				username: true,
				avatar: true,
				githubId: true,
				skills: true,
			},
		})

		if (!userProfile) {
			return {
				success: false,
				error: "User not found",
			}
		}

		return { success: true, data: userProfile }
	} catch (error) {
		console.error("Error fetching user profile:", error)
		return {
			success: false,
			error: error instanceof Error ? error.message : "Failed to fetch profile",
		}
	}
}
