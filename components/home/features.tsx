import { Bot, Brain, Compass, Github, Hammer, Users } from "lucide-react"

const features = [
	{
		key: "smart-team-insights",
		title: "Smart Team Insights",
		description:
			"Hackin looks at your team's skills, goals, and time available to suggest a project that actually fits. No more blank stares on day one.",
		icon: <Users className="size-5 md:size-6" />,
	},
	{
		key: "idea-generation",
		title: "Idea Generation",
		description:
			"Not sure what to build? Hackin helps you figure it out. It suggests ideas based on who you are, what you know, and what the hackathon's about.",
		icon: <Brain className="size-5 md:size-6" />,
	},
	{
		key: "guided-building",
		title: "Guided Building",
		description:
			"Once you’ve picked an idea, Hackin breaks it down into steps. You’ll always know what to do next, and you can check off tasks as you go.",
		icon: <Hammer className="size-5 md:size-6" />,
	},
	{
		key: "contextual-ai-help",
		title: "Contextual AI Help",
		description:
			"If you're stuck, you can ask for help right in the step you're working on. Hackin understands what you’re building and gives useful, focused answers.",
		icon: <Bot className="size-5 md:size-6" />,
	},
	{
		key: "open-source",
		title: "Open Source, Built for Builders",
		description:
			"Hackin is open source so you can fork it, improve it, or even run your own version. It's made by hackers, for hackers.",
		icon: <Github className="size-5 md:size-6" />,
	},
	{
		key: "project-compass",
		title: "Project Compass",
		description:
			"Hackin keeps your project on track from start to finish. It's like having a technical mentor and a product manager rolled into one.",
		icon: <Compass className="size-5 md:size-6" />,
	},
]

export function Features() {
	return (
		<section className="flex flex-col items-center justify-center w-full max-w-[1500px] px-6 py-16 mx-auto gap-12">
			<h2 className="text-3xl lg:text-4xl font-bold text-center">
				Feature Showcase
			</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
				{features.map(feature => (
					<div
						key={feature.key}
						className="card bg-base-100 border-2 border-base-content/40"
					>
						<div className="card-body">
							<div className="flex items-center gap-4 mb-4">
								<div className="bg-accent text-accent-content rounded-full p-3 md:p-4">
									{feature.icon}
								</div>
								<h3 className="card-title text-lg md:text-xl">
									{feature.title}
								</h3>
							</div>
							<p className="text-sm md:text-base text-base-content/80">
								{feature.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
