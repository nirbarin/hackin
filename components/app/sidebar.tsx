"use client"

import { ArrowLeft as LeftArrow, Loader2, Plus } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar"
import type { User } from "@/lib/session"

// Generic item type that can be extended for different use cases
export type SidebarItem = {
	id: number | string
	title: string
	href: string
}

// Raw data type from API responses
export type RawApiData = Record<string, unknown>

// Configuration for the sidebar
export type SidebarConfig = {
	title: string
	titleHref?: string
	prevItemText: string
	prevItemHref: string
	newItemText: string
	newItemHref: string
	emptyStateText: string
	apiEndpoint: string
}

// Props for the generic sidebar
export type AppSidebarProps = {
	user: User | undefined
	config: SidebarConfig
	isActiveItem?: (item: SidebarItem, pathname: string) => boolean
	transformApiData?: (data: RawApiData[]) => SidebarItem[]
}

export function AppSidebar({
	user,
	config,
	isActiveItem = defaultIsActiveItem,
	transformApiData = defaultTransformApiData,
}: AppSidebarProps) {
	const pathname = usePathname()
	const { setOpenMobile } = useSidebar()
	const [items, setItems] = useState<SidebarItem[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchItems = async () => {
			try {
				const response = await fetch(config.apiEndpoint)
				if (!response.ok) {
					throw new Error(`Failed to fetch data from ${config.apiEndpoint}`)
				}
				const result = await response.json()
				const transformedItems = transformApiData(result.data || [])
				setItems(transformedItems)
			} catch (err) {
				console.error("Error fetching sidebar data:", err)
				setError("Failed to load data")
			} finally {
				setLoading(false)
			}
		}

		if (user) {
			fetchItems()
		} else {
			setLoading(false)
		}

		// Listen for custom refresh events
		const handleRefresh = () => {
			if (user) {
				setLoading(true)
				fetchItems()
			}
		}

		window.addEventListener("sidebar-refresh", handleRefresh)

		return () => {
			window.removeEventListener("sidebar-refresh", handleRefresh)
		}
	}, [user, config.apiEndpoint, transformApiData])

	const handleLinkClick = () => {
		setOpenMobile(false)
	}

	return (
		<Sidebar>
			<SidebarHeader className="p-4">
				{config.titleHref ? (
					<Link href={config.titleHref} className="text-lg font-semibold">
						{config.title}
					</Link>
				) : (
					<div className="text-lg font-semibold">{config.title}</div>
				)}
			</SidebarHeader>
			<SidebarContent>
				<SidebarMenu className="px-5">
					<SidebarMenuItem className="flex flex-col gap-2 pb-2">
						<Link href={config.prevItemHref} onClick={handleLinkClick}>
							<Button variant="outline" className="w-full">
								<LeftArrow />
								{config.prevItemText}
							</Button>
						</Link>
						<Link href={config.newItemHref} onClick={handleLinkClick}>
							<Button className="w-full" variant="outline">
								<Plus />
								{config.newItemText}
							</Button>
						</Link>
					</SidebarMenuItem>

					{loading ? (
						<div className="flex justify-center p-4">
							<Loader2 className="h-5 w-5 animate-spin" />
						</div>
					) : error ? (
						<div className="p-4 text-sm text-destructive">{error}</div>
					) : items.length === 0 ? (
						<div className="p-4 text-sm text-muted-foreground">
							{config.emptyStateText}
						</div>
					) : (
						items.map(item => (
							<SidebarMenuItem key={item.id}>
								<Link
									href={item.href}
									className={`block p-2 rounded-md transition-colors truncate ${
										isActiveItem(item, pathname)
											? "bg-accent font-medium"
											: "hover:bg-accent/50"
									}`}
									onClick={handleLinkClick}
								>
									{item.title}
								</Link>
							</SidebarMenuItem>
						))
					)}
				</SidebarMenu>
			</SidebarContent>
		</Sidebar>
	)
}

// Default functions that can be overridden
function defaultIsActiveItem(item: SidebarItem, pathname: string): boolean {
	return pathname === item.href
}

function defaultTransformApiData(data: RawApiData[]): SidebarItem[] {
	return data.map(item => ({
		id: (item.id as number | string) || "unknown",
		title:
			(item.title as string) ||
			(item.name as string) ||
			(item.hackathonName as string) ||
			`Item ${item.id || "unknown"}`,
		href: (item.href as string) || `/item/${item.id || "unknown"}`,
	}))
}
