"use client"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

interface ThemeChangerProps {
	className?: string
}

export default function ThemeChanger({ className = "" }: ThemeChangerProps) {
	const [isDark, setIsDark] = useState(false)

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme")
		let current =
			storedTheme || document.documentElement.getAttribute("data-theme")

		if (current !== "light" && current !== "dark") {
			const prefersDark = window.matchMedia(
				"(prefers-color-scheme: dark)",
			).matches
			current = prefersDark ? "dark" : "light"
		}

		document.documentElement.setAttribute("data-theme", current)
		setIsDark(current === "dark")
	}, [])

	const toggleTheme = () => {
		const newTheme = isDark ? "light" : "dark"
		setIsDark(!isDark)
		document.documentElement.setAttribute("data-theme", newTheme)
		localStorage.setItem("theme", newTheme)
	}

	return (
		<button
			type="button"
			className={`btn btn-circle btn-ghost swap swap-rotate ${className}`}
			aria-label="Toggle Theme"
			onClick={toggleTheme}
		>
			<input type="checkbox" checked={isDark} readOnly />
			<Sun className="swap-on w-5 h-5" />
			<Moon className="swap-off w-5 h-5" />
		</button>
	)
}
