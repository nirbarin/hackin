import { sha256 } from "@oslojs/crypto/sha2"
import { encodeBase32, encodeHexLowerCase } from "@oslojs/encoding"
import { cookies } from "next/headers"
import { cache } from "react"
import { prisma } from "./db"

export interface User {
	id: number
	githubId: number
	username: string
}

export async function validateSessionToken(
	token: string,
): Promise<SessionValidationResult> {
	const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)))

	const sessionWithUser = await prisma.session.findUnique({
		where: { id: sessionId },
		include: { user: true },
	})

	if (!sessionWithUser) {
		return { session: null, user: null }
	}

	const session: Session = {
		id: sessionWithUser.id,
		userId: sessionWithUser.userId,
		expiresAt: sessionWithUser.expiresAt,
	}

	const user: User = {
		id: sessionWithUser.user.id,
		githubId: sessionWithUser.user.githubId,
		username: sessionWithUser.user.username,
	}

	if (Date.now() >= session.expiresAt.getTime()) {
		await prisma.session.delete({ where: { id: session.id } })
		return { session: null, user: null }
	}

	if (Date.now() >= session.expiresAt.getTime() - 1000 * 60 * 60 * 24 * 15) {
		session.expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
		await prisma.session.update({
			where: { id: session.id },
			data: { expiresAt: session.expiresAt },
		})
	}

	return { session, user }
}

export const getCurrentSession = cache(
	async (): Promise<SessionValidationResult> => {
		const cookiesStore = await cookies()
		const token = cookiesStore.get("session")?.value ?? null
		if (token === null) {
			return { session: null, user: null }
		}
		const result = await validateSessionToken(token)
		return result
	},
)

export async function invalidateSession(sessionId: string): Promise<void> {
	await prisma.session.delete({ where: { id: sessionId } })
}

export async function invalidateUserSessions(userId: number): Promise<void> {
	await prisma.session.deleteMany({ where: { userId } })
}

export async function setSessionTokenCookie(
	token: string,
	expiresAt: Date,
): Promise<void> {
	const cookiesStore = await cookies()
	cookiesStore.set("session", token, {
		httpOnly: true,
		path: "/",
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax",
		expires: expiresAt,
	})
}

export async function deleteSessionTokenCookie(): Promise<void> {
	const cookiesStore = await cookies()
	cookiesStore.set("session", "", {
		httpOnly: true,
		path: "/",
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax",
		maxAge: 0,
	})
}

export function generateSessionToken(): string {
	const tokenBytes = new Uint8Array(20)
	crypto.getRandomValues(tokenBytes)
	const token = encodeBase32(tokenBytes).toLowerCase()
	return token
}

export async function createSession(
	token: string,
	userId: number,
): Promise<Session> {
	const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)))
	const session: Session = {
		id: sessionId,
		userId,
		expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
	}

	await prisma.session.create({
		data: {
			id: session.id,
			userId: session.userId,
			expiresAt: session.expiresAt,
		},
	})

	return session
}

export interface Session {
	id: string
	expiresAt: Date
	userId: number
}

type SessionValidationResult =
	| { session: Session; user: User }
	| { session: null; user: null }
