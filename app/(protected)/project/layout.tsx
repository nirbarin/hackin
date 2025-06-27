import { cookies } from "next/headers"
import { AppSidebar } from "@/components/project/sidebar"
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar"
import { Nav } from "@/components/user/nav"
import { getCurrentSession } from "@/lib/session"

export default async function Layout({
	children,
}: {
	children: React.ReactNode
}) {
	const [session, cookieStore] = await Promise.all([
		getCurrentSession(),
		cookies(),
	])
	const isCollapsed = cookieStore.get("sidebar:state")?.value === "true"

	return (
		<>
			<SidebarProvider defaultOpen={!isCollapsed}>
				<AppSidebar user={session?.user ?? undefined} />
				<SidebarInset>
					<div className="flex flex-col min-h-[100dvh]">
						<div className="flex w-full items-center pl-5">
							<SidebarTrigger />
							<Nav />
						</div>
						{children}
					</div>
				</SidebarInset>
			</SidebarProvider>
		</>
	)
}
