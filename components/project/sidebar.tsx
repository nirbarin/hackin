"use client"

import { usePathname } from "next/navigation"
import { useMemo } from "react"
import {
	AppSidebar,
	type RawApiData,
	type SidebarConfig,
	type SidebarItem,
} from "@/components/app/sidebar"
import type { User } from "@/lib/session"

export function ProjectAppSidebar({ user }: { user: User | undefined }) {
	const pathname = usePathname()

	// Determine context type
	const isInChatContext =
		pathname.includes("/chat") && !pathname.includes("/idea")
	const isInIdeaContext = pathname.includes("/idea")

	// Extract project ID from pathname
	const projectId = useMemo(() => {
		const match = pathname.match(/\/project\/(\d+)/)
		return match ? match[1] : null
	}, [pathname])

	// Dynamic configuration based on context
	const config: SidebarConfig = useMemo(() => {
		if (isInIdeaContext && projectId) {
			return {
				title: "Project Ideas",
				titleHref: `/project/${projectId}/idea`,
				prevItemText: "go to project",
				prevItemHref: `/project/${projectId}`,
				newItemText: "Generate Ideas",
				newItemHref: `/project/${projectId}/idea`,
				emptyStateText: "No ideas yet",
				apiEndpoint: `/api/ideas?projectId=${projectId}`,
			}
		}
		if (isInChatContext && projectId) {
			return {
				title: "Chat History",
				titleHref: `/project/${projectId}/chat`,
				prevItemText: "go to project",
				prevItemHref: `/project/${projectId}`,
				newItemText: "New Chat",
				newItemHref: `/project/${projectId}/new`,
				emptyStateText: "No chat sessions yet",
				apiEndpoint: `/api/chats?projectId=${projectId}`,
			}
		}
		return {
			title: "Your Projects",
			titleHref: "/project",
			prevItemText: "go to home",
			prevItemHref: "/",
			newItemText: "Add New Project?",
			newItemHref: "/project/new",
			emptyStateText: "No projects yet",
			apiEndpoint: "/api/projects",
		}
	}, [isInChatContext, isInIdeaContext, projectId])

	const transformData = useMemo(() => {
		if (isInIdeaContext) {
			return (data: RawApiData[]): SidebarItem[] => {
				return data.map(idea => ({
					id: idea.id as string,
					title: (idea.title as string) || `Idea ${idea.id}`,
					href: `/project/${projectId}/idea/${idea.id}`,
				}))
			}
		}
		if (isInChatContext) {
			return (data: RawApiData[]): SidebarItem[] => {
				return data.map(chat => ({
					id: chat.id as string,
					title:
						(chat.title as string) ||
						(chat.name as string) ||
						`Chat ${chat.id}`,
					href: `/project/${projectId}/${chat.id}`,
				}))
			}
		}
		return (data: RawApiData[]): SidebarItem[] => {
			return data.map(project => ({
				id: project.id as number,
				title: project.hackathonName as string,
				href: `/project/${project.id}`,
			}))
		}
	}, [isInChatContext, isInIdeaContext, projectId])

	const isActiveItem = useMemo(() => {
		if (isInIdeaContext) {
			return (item: SidebarItem, pathname: string): boolean => {
				return pathname === `/project/${projectId}/idea/${item.id}`
			}
		}
		if (isInChatContext) {
			return (item: SidebarItem, pathname: string): boolean => {
				return pathname === `/project/${projectId}/${item.id}`
			}
		}
		return (item: SidebarItem, pathname: string): boolean => {
			return pathname === `/project/${item.id}`
		}
	}, [isInChatContext, isInIdeaContext, projectId])

	return (
		<AppSidebar
			user={user}
			config={config}
			isActiveItem={isActiveItem}
			transformApiData={transformData}
		/>
	)
}
