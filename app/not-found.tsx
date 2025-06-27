import { Github, Home, Search } from "lucide-react"
import LinkButton from "@/components/link/button"
import { Nav } from "@/components/user/nav"

export default function NotFound() {
	return (
		<div className="min-h-[100dvh] flex flex-col relative">
			<Nav />
			<div className="flex flex-col items-center justify-center w-full flex-1 gap-7 p-8">
				<div className="text-center space-y-4">
					<h1 className="text-6xl md:text-8xl font-bold text-muted-foreground">
						404
					</h1>
					<h2 className="text-2xl md:text-3xl font-semibold">Page Not Found</h2>
					<p className="text-md md:text-lg text-muted-foreground max-w-md">
						<br />
						Looks like this page took a wrong turn during the hackathon
						<br />
						<br />
						Let&apos;s get you back to building something awesome!
					</p>
				</div>

				<div className="flex flex-col md:flex-row gap-4 items-center justify-center w-[80vw] max-w-[500px] mt-8">
					<LinkButton to="/" variant="default" className="w-full max-w-[200px]">
						<Home className="size-4" />
						Go Home
					</LinkButton>
					<LinkButton to="/app" className="w-full max-w-[200px]">
						<Search className="size-4" />
						Start Hackin&apos;
					</LinkButton>
				</div>

				<div className="mt-8">
					<LinkButton
						to="https://github.com/nirbarin/hackin/issues/new"
						variant="outline"
						className="text-sm"
					>
						<Github className="size-4" />
						Report an issue
					</LinkButton>
				</div>
			</div>
		</div>
	)
}
