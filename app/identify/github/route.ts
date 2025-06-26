import { generateState } from "arctic"
import { cookies } from "next/headers"
import { github } from "@/lib/oauth"

export async function GET(request: Request): Promise<Response> {
	const url = new URL(request.url)
	const redirectTo = url.searchParams.get("redirect") || "/home"

	console.log("GitHub OAuth initiated with redirect:", redirectTo)

	const state = generateState()
	const authUrl = github.createAuthorizationURL(state, [])

	const cookieStore = await cookies()
	cookieStore.set("github_oauth_state", state, {
		path: "/",
		secure: process.env.NODE_ENV === "production",
		httpOnly: true,
		maxAge: 60 * 10,
		sameSite: "lax",
	})

	cookieStore.set("github_oauth_redirect", redirectTo, {
		path: "/",
		secure: process.env.NODE_ENV === "production",
		httpOnly: true,
		maxAge: 60 * 10,
		sameSite: "lax",
	})

	console.log(
		"Set cookies - state:",
		`${state.substring(0, 10)}...`,
		"redirect:",
		redirectTo,
	)

	return new Response(null, {
		status: 302,
		headers: {
			Location: authUrl.toString(),
		},
	})
}
