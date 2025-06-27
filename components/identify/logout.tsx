import LinkButton from "@/components/link/button"
import { getCurrentSession } from "@/lib/session"

export default async function LogoutButton() {
	const { user } = await getCurrentSession()

	return (
		<LinkButton to="/identify/logout">
			Log out, {user?.username ?? "User"}
		</LinkButton>
	)
}
