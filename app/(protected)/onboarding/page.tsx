"use client"

import { AlertCircle, CheckCircle } from "lucide-react"
import * as React from "react"
import { Nav } from "@/app/page"
import {
	type SelectedSkill,
	type SkillLevel,
	SkillsSelection,
} from "@/components/onboarding/skills-selection"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export default function OnboardingPage() {
	const [selectedSkills, setSelectedSkills] = React.useState<SelectedSkill[]>(
		[],
	)
	const [showSuccessAlert, setShowSuccessAlert] = React.useState(false)
	const [showErrorAlert, setShowErrorAlert] = React.useState(false)
	const [isSubmitting, setIsSubmitting] = React.useState(false)
	const [isLoading, setIsLoading] = React.useState(true)

	// Load existing skills on component mount
	React.useEffect(() => {
		const loadExistingSkills = async () => {
			try {
				const response = await fetch("/api/skills")
				if (response.ok) {
					const { skills } = await response.json()
					if (Array.isArray(skills)) {
						// Transform API skills back to SelectedSkill format
						const transformedSkills: SelectedSkill[] = skills.map(skill => ({
							skill: {
								id: skill.name.toLowerCase().replace(/\s+/g, "-"),
								name: skill.name,
								category: "Unknown", // We might need to map this properly
							},
							level: skill.level as SkillLevel,
						}))
						setSelectedSkills(transformedSkills)
					}
				}
			} catch (error) {
				console.error("Error loading existing skills:", error)
			} finally {
				setIsLoading(false)
			}
		}

		loadExistingSkills()
	}, [])

	const handleSkillsChange = (skills: SelectedSkill[]) => {
		console.log("Selected skills:", skills)
		setSelectedSkills(skills)
		// Hide alerts when skills change
		if (showSuccessAlert) {
			setShowSuccessAlert(false)
		}
		if (showErrorAlert) {
			setShowErrorAlert(false)
		}
	}

	const handleSubmit = async () => {
		console.log("Submit button clicked!")
		console.log("Final skills data:", selectedSkills)
		console.log("Number of selected skills:", selectedSkills.length)

		setIsSubmitting(true)
		setShowErrorAlert(false)

		try {
			// Transform selectedSkills to the format expected by the API
			const skillsToSave = selectedSkills.map(skill => ({
				name: skill.skill.name,
				level: skill.level,
			}))

			const response = await fetch("/api/skills", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ skills: skillsToSave }),
			})

			if (response.ok) {
				const result = await response.json()
				console.log("Skills saved successfully:", result)
				setShowSuccessAlert(true)

				// Auto-hide the alert after 5 seconds
				setTimeout(() => {
					setShowSuccessAlert(false)
				}, 5000)
			} else {
				const error = await response.json()
				console.error("Error saving skills:", error)
				setShowErrorAlert(true)
			}
		} catch (error) {
			console.error("Network error:", error)
			setShowErrorAlert(true)
		} finally {
			setIsSubmitting(false)
		}
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

				{showErrorAlert && (
					<Alert variant="destructive" className="mb-6">
						<AlertCircle className="h-4 w-4" />
						<AlertTitle>Error Saving Skills</AlertTitle>
						<AlertDescription>
							There was an error saving your skills. Please try again.
						</AlertDescription>
					</Alert>
				)}

				{isLoading ? (
					<div className="flex justify-center items-center min-h-[400px]">
						<div className="text-center">
							<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
							<p className="text-muted-foreground">Loading your skills...</p>
						</div>
					</div>
				) : (
					<>
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
								disabled={isSubmitting}
							>
								{isSubmitting
									? "Saving..."
									: `Continue to Next Step (${selectedSkills.length} skills selected)`}
							</Button>
						</div>
					</>
				)}
			</div>
		</div>
	)
}
