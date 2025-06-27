import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function Page() {
	return (
		<div className="container mx-auto py-8 px-4 max-w-4xl">
			{/* Page Header */}
			<div className="mb-8">
				<h1 className="text-2xl font-semibold tracking-tight">Chat</h1>
				<p className="text-muted-foreground mt-1">
					Manage your chat settings and preferences
				</p>
			</div>

			{/* Chat content goes here */}
			<div className="space-y-8">
				<Card>
					<CardHeader>
						<h2 className="text-lg font-medium">Chat Settings</h2>
					</CardHeader>
					<CardContent>
						<Skeleton className="h-40 w-full" />
					</CardContent>
				</Card>
			</div>
		</div>
	)
}
