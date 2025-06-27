"use client"

import { createContext, useContext } from "react"
import type { Session, User } from "@/lib/session"

interface GlobalAuthContextType {
	user: User | null
	session: Session | null
	isLoggedIn: boolean
}

const GlobalAuthContext = createContext<GlobalAuthContextType | null>(null)

interface GlobalAuthContextProviderProps {
	children: React.ReactNode
	user: User | null
	session: Session | null
}

export function GlobalAuthContextProvider({
	children,
	user,
	session,
}: GlobalAuthContextProviderProps) {
	const isLoggedIn = !!(user && session)

	return (
		<GlobalAuthContext.Provider value={{ user, session, isLoggedIn }}>
			{children}
		</GlobalAuthContext.Provider>
	)
}

export function useAuth(): GlobalAuthContextType {
	const context = useContext(GlobalAuthContext)
	if (!context) {
		throw new Error("useAuth must be used within a GlobalAuthProvider")
	}
	return context
}
