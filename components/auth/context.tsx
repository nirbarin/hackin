"use client"

import type { User } from "@/lib/session"
import { createContext, useContext } from "react"

interface AuthContextType {
	user: User
}

const AuthContext = createContext<AuthContextType | null>(null)

interface AuthContextProviderProps {
	children: React.ReactNode
	user: User
}

export function AuthContextProvider({ children, user }: AuthContextProviderProps) {
	return (
		<AuthContext.Provider value={{ user }}>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuth(): AuthContextType {
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider")
	}
	return context
}
