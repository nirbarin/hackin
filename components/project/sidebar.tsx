"use client"

import { AppSidebar, type SidebarConfig, type SidebarItem, type RawApiData } from "@/components/app/sidebar"
import type { User } from "@/lib/session"

export function ProjectAppSidebar({ user }: { user: User | undefined }) {
	const projectConfig: SidebarConfig = {
		title: "Your Projects",
		titleHref: "/project",
		newItemText: "Add New Project?",
		newItemHref: "/project/new",
		emptyStateText: "No projects yet",
		apiEndpoint: "/api/projects",
	}

	const transformProjectData = (data: RawApiData[]): SidebarItem[] => {
		return data.map(project => ({
			id: project.id as number,
			title: project.hackathonName as string,
			href: `/project/${project.id}`,
		}))
	}

	const isActiveProject = (item: SidebarItem, pathname: string): boolean => {
		return pathname === `/project/${item.id}`
	}

	return (
		<AppSidebar
			user={user}
			config={projectConfig}
			isActiveItem={isActiveProject}
			transformApiData={transformProjectData}
		/>
	)
}
