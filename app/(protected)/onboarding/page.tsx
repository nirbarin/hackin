import { AlertCircle } from "lucide-react"
import { getExistingSkills, saveSkills } from "@/app/actions/onboarding"
import { SkillsSelectionForm } from "@/components/onboarding/skills-selection"
import { SuccessPage } from "@/components/onboarding/success-page"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Nav } from "@/components/user/nav"

interface PageProps {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function OnboardingPage({ searchParams }: PageProps) {
	const resolvedSearchParams = await searchParams

	const { success, error, count } = resolvedSearchParams
	const existingSkills = await getExistingSkills()

	// Show success page if skills were submitted
	if (
		success === "true" ||
		(Array.isArray(success) && success.includes("true"))
	) {
		const countValue = Array.isArray(count) ? count[0] : count
		return (
			<div className="min-h-screen bg-background flex flex-col">
				<Nav />
				<SuccessPage skillsCount={Number.parseInt(countValue || "0")} />
			</div>
		)
	}

	return (
		<div className="min-h-screen bg-background">
			<Nav />
			<div className="container mx-auto py-8">
				{error === "true" ||
				(Array.isArray(error) && error.includes("true")) ? (
					<Alert variant="destructive" className="mb-6 max-w-6xl mx-auto">
						<AlertCircle className="h-4 w-4" />
						<AlertTitle>Error Saving Skills</AlertTitle>
						<AlertDescription>
							There was an error saving your skills. Please try again.
						</AlertDescription>
					</Alert>
				) : null}

				<SkillsSelectionForm
					initialSkills={existingSkills.map(skill => ({
						skill: {
							id: skill.name.toLowerCase().replace(/\s+/g, "-"),
							name: skill.name,
							category: "",
						},
						level: skill.level as
							| "beginner"
							| "intermediate"
							| "advanced"
							| "expert",
					}))}
					saveSkillsAction={saveSkills}
				/>
			</div>
		</div>
	)
}
