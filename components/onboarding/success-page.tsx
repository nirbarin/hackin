"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

interface CountdownProps {
	from: number
	onComplete?: () => void
}

function Countdown({ from, onComplete }: CountdownProps) {
	const [count, setCount] = useState(from)

	useEffect(() => {
		if (count <= 0) {
			onComplete?.()
			return
		}

		const timer = setTimeout(() => {
			setCount(count - 1)
		}, 1000)

		return () => clearTimeout(timer)
	}, [count, onComplete])

	return <span className="font-mono">{count} seconds</span>
}

interface SuccessPageProps {
	skillsCount: number
}

export function SuccessPage({ skillsCount }: SuccessPageProps) {
	const handleRedirect = () => {
		window.location.href = "/project"
	}

	if (skillsCount === 0) {
		return (
			<div className="grow bg-background flex flex-col">
				<div className="flex flex-col items-center justify-center grow gap-4 p-4 text-center">
					<div className="text-9xl mb-4">😠</div>
					<h1 className="text-2xl font-bold">No Skills Selected</h1>
					<p className="text-muted-foreground">
						You haven&apos;t selected any skills. Please go back and select at
						least one skill to continue.
					</p>
					<div className="flex flex-col gap-2">
						<Button
							variant="default"
							onClick={() => {
								window.location.href = "/onboarding"
							}}
						>
							Go Back to Skills Selection
						</Button>
						<Button
							variant="link"
							className="text-muted-foreground"
							onClick={handleRedirect}
						>
							Meh, just take me to project
						</Button>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className="grow bg-background flex flex-col">
			<div className="flex flex-col items-center justify-center grow gap-4">
				<div className="text-9xl mb-4">😊</div>
				<p className="text-xl">Skills updated successfully!</p>
				<p className="text-muted-foreground text-center">
					You have selected {skillsCount} skill{skillsCount !== 1 ? "s" : ""}.{" "}
					<br />
					You will be redirected in{" "}
					<Countdown from={5} onComplete={handleRedirect} />
				</p>
				<Button variant="link" onClick={handleRedirect}>
					Go to projects now
				</Button>
			</div>
		</div>
	)
}
