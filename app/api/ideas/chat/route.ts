import { createOpenRouter } from "@openrouter/ai-sdk-provider"
import { streamText } from "ai"
import { desc, eq } from "drizzle-orm"
import { db } from "@/lib/db"
import { env } from "@/lib/env"
import { ideaChats, ideas } from "@/lib/schema"
import { getCurrentSession } from "@/lib/session"

export async function POST(request: Request) {
	try {
		const { user } = await getCurrentSession()

		if (!user) {
			return new Response("Unauthorized", { status: 401 })
		}

		const body = await request.json()
		const { messages, data } = body

		// Extract ideaId from data and get the latest user message
		const ideaId = data?.ideaId
		const userMessage = messages[messages.length - 1]?.content

		if (!ideaId || !userMessage) {
			return new Response("Idea ID and message are required", { status: 400 })
		}

		// Get the idea details
		const idea = await db
			.select()
			.from(ideas)
			.where(eq(ideas.id, ideaId))
			.limit(1)

		if (idea.length === 0) {
			return new Response("Idea not found", { status: 404 })
		}

		const ideaData = idea[0]

		// Get previous chat messages for context
		const previousChats = await db
			.select()
			.from(ideaChats)
			.where(eq(ideaChats.ideaId, ideaId))
			.orderBy(desc(ideaChats.createdAt))
			.limit(10)

		// Save user message to database
		await db.insert(ideaChats).values({
			message: userMessage,
			ideaId: ideaId,
			userId: user.id,
		})

		// Build conversation context
		const chatHistory = previousChats
			.reverse()
			.map(chat =>
				chat.message.startsWith("AI: ")
					? `Assistant: ${chat.message.substring(4)}`
					: `User: ${chat.message}`,
			)
			.join("\n")

		const systemPrompt = `You are an AI assistant helping to refine and improve hackathon project ideas. You should be:
- Constructive and encouraging
- Focused on practical implementation
- Knowledgeable about technology trends
- Able to suggest improvements, features, and solutions
- Helpful with technical architecture and planning

Current Idea Details:
Title: ${ideaData.title}
Description: ${ideaData.description}
Content: ${ideaData.content}

Previous conversation:
${chatHistory}

Respond helpfully to improve and refine this project idea. Be specific and actionable in your suggestions.`

		const openrouter = createOpenRouter({
			apiKey: env.OPENROUTER_API_KEY,
		})

		const result = await streamText({
			model: openrouter("mistralai/mistral-small-3.2-24b-instruct:free"),
			system: systemPrompt,
			messages: [{ role: "user", content: userMessage }],
			onFinish: async completion => {
				// Save AI response to database after streaming is complete
				await db.insert(ideaChats).values({
					message: `AI: ${completion.text}`,
					ideaId: ideaId,
					userId: user.id,
				})
			},
		})

		return result.toDataStreamResponse()
	} catch (error) {
		console.error("Error in idea chat:", error)
		return new Response("Failed to process chat message", { status: 500 })
	}
}
