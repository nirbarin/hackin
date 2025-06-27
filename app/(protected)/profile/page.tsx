import { AlertCircle } from "lucide-react"
import { Suspense } from "react"
import { getUserProfile } from "@/app/actions/user"
import ProfileForm from "@/components/profile/profile-form"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Nav } from "@/components/user/nav"

export const dynamic = "force-dynamic"

export default async function ProfilePage() {
	const result = await getUserProfile()

	if (!result.success) {
		return (
			<>
				<Nav />
				<div className="container mx-auto py-8 px-4 max-w-4xl">
					<div className="mb-8">
						<h1 className="text-2xl font-semibold tracking-tight">Profile</h1>
						<p className="text-muted-foreground mt-1">
							Manage your account settings and preferences
						</p>
					</div>

					<Alert variant="destructive">
						<AlertCircle className="h-4 w-4" />
						<AlertDescription>{result.error}</AlertDescription>
					</Alert>
				</div>
			</>
		)
	}

	return (
		<>
			<Nav />
			<div className="container mx-auto py-8 px-4 max-w-4xl">
				{/* Page Header */}
				<div className="mb-8">
					<h1 className="text-2xl font-semibold tracking-tight">Profile</h1>
					<p className="text-muted-foreground mt-1">
						Manage your account settings and preferences
					</p>
				</div>

				<div className="space-y-8">
					{/* Profile Information Section */}
					<section>
						<h2 className="text-lg font-medium mb-4">Account Information</h2>
						<Suspense fallback={<ProfileSkeleton />}>
							{result.data ? (
								<ProfileForm user={result.data} />
							) : (
								<Alert variant="destructive">
									<AlertCircle className="h-4 w-4" />
									<AlertDescription>
										Unable to load profile information. Please try refreshing
										the page.
									</AlertDescription>
								</Alert>
							)}
						</Suspense>
					</section>
				</div>
			</div>
		</>
	)
}

function ProfileSkeleton() {
	return (
		<Card>
			<CardHeader>
				<div className="space-y-2">
					<Skeleton className="h-5 w-40" />
					<Skeleton className="h-4 w-64" />
				</div>
			</CardHeader>
			<CardContent className="space-y-6">
				{/* Avatar and basic info skeleton */}
				<div className="flex items-start gap-4">
					<Skeleton className="h-16 w-16 rounded-full flex-shrink-0" />
					<div className="space-y-2 flex-1">
						<Skeleton className="h-4 w-32" />
						<Skeleton className="h-4 w-48" />
					</div>
				</div>

				{/* Form fields skeleton */}
				<div className="space-y-4">
					<div className="space-y-2">
						<Skeleton className="h-4 w-20" />
						<Skeleton className="h-10 w-full" />
					</div>
					<div className="space-y-2">
						<Skeleton className="h-4 w-16" />
						<Skeleton className="h-10 w-full" />
					</div>
					<div className="space-y-2">
						<Skeleton className="h-4 w-24" />
						<Skeleton className="h-20 w-full" />
					</div>
				</div>

				{/* Action buttons skeleton */}
				<div className="flex gap-2 pt-4 border-t">
					<Skeleton className="h-10 w-20" />
					<Skeleton className="h-10 w-16" />
				</div>
			</CardContent>
		</Card>
	)
}
