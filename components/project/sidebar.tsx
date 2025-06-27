"use client"

import { Loader2 } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar"
import type { User } from "@/lib/session"

type Project = {
	id: number
	hackathonName: string
}

export function AppSidebar({ user }: { user: User | undefined }) {
	const pathname = usePathname()
	const { setOpenMobile } = useSidebar()
	const [projects, setProjects] = useState<Project[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const response = await fetch("/api/projects")
				if (!response.ok) {
					throw new Error("Failed to fetch projects")
				}
				const result = await response.json()
				setProjects(result.data || [])
			} catch (err) {
				console.error("Error fetching projects:", err)
				setError("Failed to load projects")
			} finally {
				setLoading(false)
			}
		}

		if (user) {
			fetchProjects()
		}
	}, [user])

	const isActive = (projectId: number) => {
		return pathname === `/project/${projectId}`
	}

	return (
		<Sidebar>
			<SidebarHeader className="p-4">
				<Link href="/project" className="text-lg font-semibold">
					Your Projects
				</Link>
			</SidebarHeader>
			<SidebarContent>
				<SidebarMenu className="px-5">
					<SidebarMenuItem className="">
						<Link
							href="/project/new"
							className="flex items-center justify-center w-full p-2 rounded-md hover:bg-accent border border-accent text-accent-foreground font-semibold text-center"
							onClick={() => setOpenMobile(false)}
						>
							Add New Project?
						</Link>
					</SidebarMenuItem>

					{loading ? (
						<div className="flex justify-center p-4">
							<Loader2 className="h-5 w-5 animate-spin" />
						</div>
					) : error ? (
						<div className="p-4 text-sm text-destructive">{error}</div>
					) : projects.length === 0 ? (
						<div className="p-4 text-sm text-muted-foreground">
							No projects yet
						</div>
					) : (
						projects.map(project => (
							<SidebarMenuItem key={project.id}>
								<Link
									href={`/project/${project.id}`}
									className={`block p-2 rounded-md transition-colors truncate ${
										isActive(project.id)
											? "bg-accent font-medium"
											: "hover:bg-accent/50"
									}`}
									onClick={() => setOpenMobile(false)}
								>
									{project.hackathonName}
								</Link>
							</SidebarMenuItem>
						))
					)}
				</SidebarMenu>
			</SidebarContent>
		</Sidebar>
	)
}
