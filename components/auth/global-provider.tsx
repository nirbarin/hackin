import { GlobalAuthContextProvider } from "@/components/auth/global-context"
import { getCurrentSession } from "@/lib/session"

interface GlobalAuthProviderProps {
	children: React.ReactNode
}

export async function GlobalAuthProvider({
	children,
}: GlobalAuthProviderProps) {
	const { session, user } = await getCurrentSession()

	return (
		<GlobalAuthContextProvider user={user} session={session}>
			{children}
		</GlobalAuthContextProvider>
	)
}
