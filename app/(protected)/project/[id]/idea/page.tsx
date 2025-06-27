import { IdeaGenerator } from "@/components/idea/generator"

export default async function Page({ params }: { params: { id: string } }) {
	return (
		<div className="p-6">
			{/* AI Idea Generator Section */}
			<IdeaGenerator projectId={Number(params.id)} />
		</div>
	)
}
