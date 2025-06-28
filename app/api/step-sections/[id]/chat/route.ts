import { createOpenRouter } from "@openrouter/ai-sdk-provider"
import { streamText, tool } from "ai"
import { eq, desc, max } from "drizzle-orm"
import { z } from "zod"
import { db } from "@/lib/db"
import { env } from "@/lib/env"
import { ideas, stepSections, stepSectionChats, stepTodos } from "@/lib/schema"
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

	// Get existing todos in this section for context
	const existingTodos = await db
		.select()
		.from(stepTodos)
		.where(eq(stepTodos.sectionId, section.id))
		.orderBy(stepTodos.order)

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
		model: openrouter("mistralai/mistral-small-3.2-24b-instruct:free"),
		system: `You are a helpful AI assistant specializing in software development implementation planning. You are currently helping with a specific section of an implementation plan.

Project Context:
- Idea: ${idea.title}
- Description: ${idea.description}
- Content: ${idea.content}

Current Section:
- Title: ${section.title}
- Description: ${section.description || 'No description provided'}

Existing Tasks in this Section:
${existingTodos.length > 0 
	? existingTodos.map((todo, index) => 
		`${index + 1}. ${todo.title}${todo.description ? ` - ${todo.description}` : ''} ${todo.isCompleted ? '✅ (completed)' : '⏳ (pending)'}`
	).join('\n')
	: 'No tasks have been created yet for this section.'}

Chat History:
${chatHistory}

Your role is to:
1. Help users understand and implement this specific section
2. Provide detailed guidance on the tasks within this section
3. Answer questions about implementation details
4. Create, update, or manage todos/tasks for this section using the available tools
5. Help troubleshoot issues related to this section
6. Provide code examples, architectural guidance, or best practices as needed

You have access to tools to manage todos in this section. Use them when users ask you to:
- Create new tasks or todos
- Update existing tasks
- Mark tasks as complete/incomplete
- Delete tasks that are no longer needed

Always be aware of the existing tasks listed above. Reference them when appropriate and suggest improvements or additional tasks based on what's already there. Focus on being practical and actionable.`,
		messages: [{ role: "user", content: userMessage }],
		tools: {
			createTodo: tool({
				description: "Create a new todo/task in this section",
				parameters: z.object({
					title: z.string().describe("The title of the todo/task"),
					description: z.string().optional().describe("Optional description of the task"),
				}),
				execute: async ({ title, description }) => {
					// Get the current max order for proper ordering
					const maxOrderResult = await db
						.select({ maxOrder: max(stepTodos.order) })
						.from(stepTodos)
						.where(eq(stepTodos.sectionId, section.id))

					const nextOrder = (maxOrderResult[0]?.maxOrder || 0) + 1

					const newTodo = await db
						.insert(stepTodos)
						.values({
							title,
							description: description || null,
							sectionId: section.id,
							order: nextOrder,
						})
						.returning()

					return {
						success: true,
						todo: newTodo[0],
						message: `Created new task: "${title}"`,
					}
				},
			}),
			updateTodo: tool({
				description: "Update an existing todo/task",
				parameters: z.object({
					todoId: z.number().describe("The ID of the todo to update"),
					title: z.string().optional().describe("New title for the todo"),
					description: z.string().optional().describe("New description for the todo"),
					isCompleted: z.boolean().optional().describe("Mark todo as completed or not"),
				}),
				execute: async ({ todoId, title, description, isCompleted }) => {
					const updateData: any = {}
					if (title !== undefined) updateData.title = title
					if (description !== undefined) updateData.description = description
					if (isCompleted !== undefined) updateData.isCompleted = isCompleted

					const updatedTodo = await db
						.update(stepTodos)
						.set(updateData)
						.where(eq(stepTodos.id, todoId))
						.returning()

					if (updatedTodo.length === 0) {
						return {
							success: false,
							message: "Todo not found",
						}
					}

					return {
						success: true,
						todo: updatedTodo[0],
						message: `Updated task: "${updatedTodo[0].title}"`,
					}
				},
			}),
			deleteTodo: tool({
				description: "Delete a todo/task",
				parameters: z.object({
					todoId: z.number().describe("The ID of the todo to delete"),
				}),
				execute: async ({ todoId }) => {
					const deletedTodo = await db
						.delete(stepTodos)
						.where(eq(stepTodos.id, todoId))
						.returning()

					if (deletedTodo.length === 0) {
						return {
							success: false,
							message: "Todo not found",
						}
					}

					return {
						success: true,
						message: `Deleted task: "${deletedTodo[0].title}"`,
					}
				},
			}),
			getCurrentTodos: tool({
				description: "Get all current todos/tasks in this section",
				parameters: z.object({}),
				execute: async () => {
					const todos = await db
						.select()
						.from(stepTodos)
						.where(eq(stepTodos.sectionId, section.id))
						.orderBy(stepTodos.order)

					return {
						success: true,
						todos,
						message: `Found ${todos.length} tasks in this section`,
					}
				},
			}),
		},
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