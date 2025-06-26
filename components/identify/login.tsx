"use client"
import LinkButton from "@/components/link/button"
import { usePathname } from "next/navigation"

export default function Signin() {
	const pathname = usePathname()

	return (
		<>
			<LinkButton
				to={`/identify/github/?redirect=${encodeURIComponent(pathname)}`}
			>
				Sign in with GitHub
			</LinkButton>
		</>
	)
}
