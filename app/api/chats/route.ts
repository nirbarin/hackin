import { type NextRequest, NextResponse } from "next/server"
import { getCurrentSession } from "@/lib/session"

export async function GET(request: NextRequest) {
	try {
		const { user } = await getCurrentSession()

		if (!user) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
		}

		const { searchParams } = new URL(request.url)
		const projectId = searchParams.get("projectId")

		if (!projectId) {
			return NextResponse.json(
				{ error: "Project ID is required" },
				{ status: 400 },
			)
		}

		// For now, return mock data since chat functionality isn't implemented yet
		// In the future, this would fetch real chat sessions from the database
		const mockChats = [
			{
				id: "1",
				title: "Project Planning Chat",
				name: "Planning Session",
				createdAt: new Date().toISOString(),
			},
			{
				id: "2",
				title: "Feature Discussion",
				name: "Features Chat",
				createdAt: new Date().toISOString(),
			},
			{
				id: "3",
				title: "Bug Reports",
				name: "Debugging Session",
				createdAt: new Date().toISOString(),
			},
		]

		// Filter chats by project (when real implementation is added)
		// For now, return the mock data for any project
		return NextResponse.json({
			data: mockChats,
			message: "Chats retrieved successfully",
		})
	} catch (error) {
		console.error("Error fetching chats:", error)
		return NextResponse.json(
			{ error: "Failed to fetch chats" },
			{ status: 500 },
		)
	}
}

export async function POST(request: NextRequest) {
	try {
		const { user } = await getCurrentSession()

		if (!user) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
		}

		const body = await request.json()
		const { projectId, title } = body

		if (!projectId) {
			return NextResponse.json(
				{ error: "Project ID is required" },
				{ status: 400 },
			)
		}

		// Mock creating a new chat
		const newChat = {
			id: Date.now().toString(),
			title: title || "New Chat",
			name: title || "New Chat",
			projectId,
			createdAt: new Date().toISOString(),
		}

		// In the future, this would save to the database
		console.log("Creating new chat:", newChat)

		return NextResponse.json({
			data: newChat,
			message: "Chat created successfully",
		})
	} catch (error) {
		console.error("Error creating chat:", error)
		return NextResponse.json(
			{ error: "Failed to create chat" },
			{ status: 500 },
		)
	}
}
