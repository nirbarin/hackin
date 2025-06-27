import { getCurrentSession } from "@/lib/session"

export async function getCurrentUser() {
	const session = await getCurrentSession()
	return session.user
}
