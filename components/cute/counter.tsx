"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface CountdownProps {
	from: number
	onComplete?: () => void
}

export function Countdown({ from, onComplete }: CountdownProps) {
	const [count, setCount] = useState(from)
	const router = useRouter()

	useEffect(() => {
		if (count <= 0) {
			if (onComplete) {
				onComplete()
			} else {
				router.push("/home")
			}
			return
		}

		const timer = setTimeout(() => {
			setCount(count - 1)
		}, 1000)

		return () => clearTimeout(timer)
	}, [count, router, onComplete])

	return <span className="font-bold">{count}</span>
}
