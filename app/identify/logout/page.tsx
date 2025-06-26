import { redirect } from "next/navigation"
import LinkButton from "@/components/link/button"
import {
	deleteSessionTokenCookie,
	getCurrentSession,
	invalidateSession,
} from "@/lib/session"

export default async function Page() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<div className="w-full max-w-md p-6 space-y-6 bg-background rounded-lg shadow-md border">
				<h1 className="text-2xl font-semibold tracking-tight text-center">
					Sign Out
				</h1>
				<p className="text-center text-muted-foreground">
					Are you sure you want to sign out?
				</p>
				<form action={logout} className="space-y-4">
					<button
						type="submit"
						className="w-full px-4 py-2 text-sm font-medium text-primary-foreground bg-destructive hover:bg-destructive/90 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
					>
						Sign out
					</button>
					<LinkButton
						to="/"
						className="block w-full px-4 py-2 text-sm font-medium text-center text-foreground bg-secondary rounded-md hover:bg-secondary/80 transition-colors"
					>
						Cancel
					</LinkButton>
				</form>
			</div>
		</div>
	)
}

async function logout(): Promise<void> {
	"use server"
	const { session } = await getCurrentSession()
	if (!session) {
		redirect("/")
	}

	await invalidateSession(session.id)
	await deleteSessionTokenCookie()
	redirect("/")
}
