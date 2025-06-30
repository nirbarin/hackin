import { ArrowDown, ArrowUpDown } from "lucide-react"

export function PipelineFlowchart() {
	return (
		<section className="flex flex-col items-center justify-center w-full min-h-[80dvh] gap-6 p-8">
			<h2 className="text-3xl md:text-4xl font-bold text-center">
				Pipeline Flowchart
			</h2>

			<p className="text-lg md:text-xl text-center text-base-content/70 max-w-2xl">
				How does Hackin guide you through every step of the hackathon journey?
			</p>

			<div className="card bg-base-100 border-2 border-base-content/40 w-full max-w-4xl p-6">
				<div className="flex flex-col items-center gap-4">
					<Step label="Team Input + Hackathon Info" />
					<FlowArrow />
					<Step label="Smart Idea Generation" />
					<FlowArrow />
					<Step label="Project Breakdown ( Steps + Tasks )" />
					<FlowArrow />
					<Step label="Contextual AI Assistance" />
					<ArrowUpDown className="w-6 h-6 text-base-content/50" />
					<Step label="Mock Pitching" />
					<FlowArrow />
					<Step label="Demo Ready" />
					<FlowArrow />
					<Step label="Ship It" />
				</div>
			</div>
		</section>
	)
}

function Step({ label }: { label: string }) {
	return (
		<div className="badge badge-lg badge-accent px-6 py-2 h-fit text-base text-center text-accent-content">
			{label}
		</div>
	)
}

function FlowArrow() {
	return <ArrowDown className="w-6 h-6 text-base-content/60" />
}
