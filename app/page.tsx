import LoginButton from "@/components/identify/login"
import LogoutButton from "@/components/identify/logout"
import ThemeToggle from "@/components/theme/toggle"
import { getCurrentSession } from "@/lib/session"
import { Bot, Brain, Compass, Github, Hammer, Users } from "lucide-react"

const features = [
	{
		key: "smart-team-insights",
		title: "Smart Team Insights",
		description:
			"Hackin looks at your team's skills, goals, and time available to suggest a project that actually fits. No more blank stares on day one.",
		icon: <Users className="size-4 md:size-6" />,
	},
	{
		key: "idea-generation",
		title: "Idea Generation",
		description:
			"Not sure what to build? Hackin helps you figure it out. It suggests ideas based on who you are, what you know, and what the hackathon's about.",
		icon: <Brain className="size-4 md:size-6" />,
	},
	{
		key: "guided-building",
		title: "Guided Building",
		description:
			"Once you’ve picked an idea, Hackin breaks it down into steps. You’ll always know what to do next, and you can check off tasks as you go.",
		icon: <Hammer className="size-4 md:size-6" />,
	},
	{
		key: "contextual-ai-help",
		title: "Contextual AI Help",
		description:
			"If you're stuck, you can ask for help right in the step you're working on. Hackin understands what you’re building and gives useful, focused answers.",
		icon: <Bot className="size-4 md:size-6" />,
	},
	{
		key: "open-source",
		title: "Open Source, Built for Builders",
		description:
			"Hackin is open source so you can fork it, improve it, or even run your own version. It's made by hackers, for hackers.",
		icon: <Github className="size-4 md:size-6" />,
	},
	{
		key: "project-compass",
		title: "Project Compass",
		description:
			"Hackin keeps your project on track from start to finish. It's like having a technical mentor and a product manager rolled into one.",
		icon: <Compass className="size-4 md:size-6" />,
	},
]

function Features() {
	return (
		<div className="container mx-auto max-w-7xl">
			<h2 className="text-3xl font-medium md:pl-5 lg:text-4xl">
				Hackin&apos;s Core Features
			</h2>
			<div className="mx-auto mt-14 grid gap-x-20 gap-y-8 md:grid-cols-2 md:gap-y-6 lg:mt-20">
				{features.map(feature => (
					<div
						className="flex gap-6 rounded-lg md:block md:p-5"
						key={feature.key}
					>
						<span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
							{feature.icon}
						</span>
						<div>
							<h3 className="font-medium md:mb-2 md:text-xl">
								{feature.title}
							</h3>
							<p className="text-sm text-muted-foreground md:text-base">
								{feature.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default async function Index() {
	const { user } = await getCurrentSession()

	return (
		<div className="min-h-[100dvh] flex flex-col items-center justify-center p-10 relative">
			<div className="py-5">{!user ? <LoginButton /> : <LogoutButton />}</div>
			<Features />
			<ThemeToggle className="absolute top-5 right-5" />
		</div>
	)
}
