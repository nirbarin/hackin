import { getCurrentSession } from "@/lib/session"
import { redirect } from "next/navigation"
import type { User } from "@/lib/session"
import { AuthContextProvider } from "./context"

interface AuthProviderProps {
	children: React.ReactNode
}

export async function AuthProvider({ children }: AuthProviderProps) {
	const { session, user } = await getCurrentSession()

	if (!session || !user) {
		redirect("/identify/github")
	}

	return (
		<AuthContextProvider user={user}>
			{children}
		</AuthContextProvider>
	)
}

export { type User }
