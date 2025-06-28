import { createOpenRouter } from "@openrouter/ai-sdk-provider"
import { streamText } from "ai"
import { eq, desc } from "drizzle-orm"
import { db } from "@/lib/db"
import { env } from "@/lib/env"
import { ideas, stepSections, stepSectionChats } from "@/lib/schema"
import { getCurrentSession } from "@/lib/session"

export async function POST(
	request: Request,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {
		const { user } = await getCurrentSession()
		if (!user) {
			return new Response("Unauthorized", { status: 401 })
		}

		const { id: sectionId } = await params
		const { messages } = await request.json()
		const userMessage = messages[messages.length - 1].content

		// Get section and idea details
		const sectionData = await db
			.select({
				section: stepSections,
				idea: ideas,
			})
			.from(stepSections)
			.innerJoin(ideas, eq(stepSections.ideaId, ideas.id))
			.where(eq(stepSections.id, Number.parseInt(sectionId)))
			.limit(1)

		if (sectionData.length === 0) {
			return new Response("Section not found", { status: 404 })
		}

		const { section, idea } = sectionData[0]

		// Store user message
		await db.insert(stepSectionChats).values({
			sectionId: section.id,
			message: `User: ${userMessage}`,
			createdAt: new Date(),
		})

		// Get previous chat messages for context
		const previousChats = await db
			.select()
			.from(stepSectionChats)
			.where(eq(stepSectionChats.sectionId, section.id))
			.orderBy(desc(stepSectionChats.createdAt))
			.limit(10)

		const chatHistory = previousChats
			.reverse()
			.map(chat =>
				chat.message.startsWith("AI:")
					? `Assistant: ${chat.message.slice(3)}`
					: chat.message
			)
			.join("\n")

		const openrouter = createOpenRouter({
			apiKey: env.OPENROUTER_API_KEY,
		})

		const result = await streamText({
			model: openrouter("meta-llama/llama-3.1-8b-instruct:free"),
			system: `You are a helpful AI assistant specializing in software development implementation planning. You are currently helping with a specific section of an implementation plan.

Project Context:
- Idea: ${idea.title}
- Description: ${idea.description}
- Content: ${idea.content}

Current Section:
- Title: ${section.title}
- Description: ${section.description || 'No description provided'}

Your role is to:
1. Help users understand and implement this specific section
2. Provide detailed guidance on the tasks within this section
3. Answer questions about implementation details
4. Suggest specific todos or action items
5. Help troubleshoot issues related to this section
6. Provide code examples, architectural guidance, or best practices as needed

Chat History:
${chatHistory}

Focus on being practical and actionable. If the user asks for todos or tasks, provide specific, implementable items. If they ask technical questions, provide detailed explanations with examples when helpful.`,
			messages: [{ role: "user", content: userMessage }],
			onFinish: async (finishResult) => {
				// Store AI response
				await db.insert(stepSectionChats).values({
					sectionId: section.id,
					message: `AI: ${finishResult.text}`,
					createdAt: new Date(),
				})
			},
		})

		return result.toDataStreamResponse()
	} catch (error) {
		console.error("Error in section chat:", error)
		return new Response("Failed to process chat message", { status: 500 })
	}
}