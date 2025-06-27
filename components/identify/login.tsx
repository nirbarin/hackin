"use client"
import { usePathname } from "next/navigation"
import LinkButton from "@/components/link/button"

export default function Signin() {
	const pathname = usePathname()

	return (
		<LinkButton
			to={`/identify/github/?redirect=${encodeURIComponent(pathname)}`}
		>
			Sign in with GitHub
		</LinkButton>
	)
}
