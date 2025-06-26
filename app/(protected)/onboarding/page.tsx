"use client"

import { CheckCircle } from "lucide-react"
import * as React from "react"
import { Nav } from "@/app/page"
import {
	type SelectedSkill,
	SkillsSelection,
} from "@/components/onboarding/skills-selection"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export default function OnboardingPage() {
	const [selectedSkills, setSelectedSkills] = React.useState<SelectedSkill[]>(
		[],
	)
	const [showSuccessAlert, setShowSuccessAlert] = React.useState(false)

	const handleSkillsChange = (skills: SelectedSkill[]) => {
		console.log("Selected skills:", skills)
		setSelectedSkills(skills)
		// Hide success alert when skills change
		if (showSuccessAlert) {
			setShowSuccessAlert(false)
		}
	}

	const handleSubmit = () => {
		console.log("Submit button clicked!")
		console.log("Final skills data:", selectedSkills)
		console.log("Number of selected skills:", selectedSkills.length)

		// Here you would typically send the data to your backend
		setShowSuccessAlert(true)

		// Auto-hide the alert after 5 seconds
		setTimeout(() => {
			setShowSuccessAlert(false)
		}, 5000)
	}

	return (
		<div className="min-h-screen bg-background">
			<Nav />
			<div className="container mx-auto py-8">
				{showSuccessAlert && (
					<Alert className="mb-6">
						<CheckCircle className="h-4 w-4" />
						<AlertTitle>Skills Submitted Successfully!</AlertTitle>
						<AlertDescription>
							You have selected {selectedSkills.length} skills. Your skill
							profile has been updated and you can proceed to the next step.
						</AlertDescription>
					</Alert>
				)}

				<SkillsSelection
					onSkillsChange={handleSkillsChange}
					selectedSkills={selectedSkills}
				/>

				<div className="flex justify-center mt-8">
					<Button
						onClick={handleSubmit}
						size="lg"
						className="cursor-pointer"
						variant={selectedSkills.length === 0 ? "outline" : "default"}
					>
						Continue to Next Step ({selectedSkills.length} skills selected)
					</Button>
				</div>
			</div>
		</div>
	)
}
