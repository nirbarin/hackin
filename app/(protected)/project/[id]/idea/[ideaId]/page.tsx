import { eq } from "drizzle-orm"
import { notFound } from "next/navigation"
import { IdeaChatSimple } from "@/components/idea/chat-simple"
import { db } from "@/lib/db"
import { ideas, projects } from "@/lib/schema"
import { getCurrentSession } from "@/lib/session"

export const dynamic = "force-dynamic"

interface PageProps {
	params: Promise<{ id: string; ideaId: string }>
}

export default async function IdeaChatPage({ params }: PageProps) {
	const { id, ideaId } = await params
	const projectId = Number.parseInt(id)
	const selectedIdeaId = Number.parseInt(ideaId)

	const { user } = await getCurrentSession()
	if (!user) {
		return notFound()
	}

	if (Number.isNaN(projectId) || Number.isNaN(selectedIdeaId)) {
		return notFound()
	}

	// Get project details
	const project = await db
		.select()
		.from(projects)
		.where(eq(projects.id, projectId))
		.limit(1)

	if (project.length === 0) {
		return notFound()
	}

	// Get the specific idea
	const idea = await db
		.select()
		.from(ideas)
		.where(eq(ideas.id, selectedIdeaId))
		.limit(1)

	if (idea.length === 0) {
		return notFound()
	}

	return <IdeaChatSimple projectId={projectId} selectedIdea={idea[0]} />
}
