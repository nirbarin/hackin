import { prisma } from "@/lib/db"
import { github } from "@/lib/oauth"
import {
	createSession,
	generateSessionToken,
	setSessionTokenCookie,
} from "@/lib/session"
import { cookies } from "next/headers"

import type { OAuth2Tokens } from "arctic"

export async function GET(request: Request): Promise<Response> {
	const url = new URL(request.url)
	const code = url.searchParams.get("code")
	const state = url.searchParams.get("state")
	const cookieStore = await cookies()
	const storedState = cookieStore.get("github_oauth_state")?.value ?? null
	if (code === null || state === null || storedState === null) {
		return new Response(null, {
			status: 400,
		})
	}
	if (state !== storedState) {
		return new Response(null, {
			status: 400,
		})
	}

	let tokens: OAuth2Tokens
	try {
		tokens = await github.validateAuthorizationCode(code)
	} catch (error) {
		console.error("Error validating authorization code:", error)
		return new Response(null, {
			status: 400,
		})
	}
	const githubUserResponse = await fetch("https://api.github.com/user", {
		headers: {
			Authorization: `Bearer ${tokens.accessToken()}`,
		},
	})
	const githubUser = await githubUserResponse.json()
	const githubUserId = githubUser.id
	const githubUsername = githubUser.login

	const existingUser = await prisma.user.findUnique({
		where: {
			githubId: githubUserId,
		},
	})

	if (existingUser !== null) {
		const sessionToken = generateSessionToken()
		const session = await createSession(sessionToken, existingUser.id)
		await setSessionTokenCookie(sessionToken, session.expiresAt)
		return new Response(null, {
			status: 302,
			headers: {
				Location: "/",
			},
		})
	}

	const user = await createUser(githubUserId, githubUsername)

	const sessionToken = generateSessionToken()
	const session = await createSession(sessionToken, user.id)
	await setSessionTokenCookie(sessionToken, session.expiresAt)
	return new Response(null, {
		status: 302,
		headers: {
			Location: "/",
		},
	})
}
async function createUser(githubUserId: number, githubUsername: string) {
	const user = await prisma.user.create({
		data: {
			githubId: githubUserId,
			username: githubUsername,
		},
	})

	return user
}
