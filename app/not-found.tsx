import { Github } from "lucide-react"
import LinkButton from "@/components/link/button"

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center w-full flex-1 gap-10 p-8 text-center">
			<div className="space-y-4 flex flex-col gap-4">
				<h1 className="text-6xl md:text-8xl font-bold text-base-content/30">
					404
				</h1>
				<h2 className="text-2xl md:text-3xl font-semibold">Page Not Found</h2>
				<div className="flex flex-col gap-2 text-base-content/60 text-md md:text-lg max-w-lg mx-auto">
					<span>
						Looks like this page took a wrong turn during the hackathon
					</span>
					<span>Let&apos;s get you back to building something awesome!</span>
				</div>
			</div>

			<div className="flex flex-col md:flex-row gap-4 items-center justify-center w-full max-w-[500px]">
				<LinkButton to="/" variant="default" className="grow w-full">
					Go Home
				</LinkButton>
				<LinkButton to="/app" variant="default" className="grow w-full">
					Start Hackin
				</LinkButton>
			</div>

			<div>
				<LinkButton
					to="https://github.com/nirbarin/hackin/issues/new"
					variant="ghost"
				>
					<Github className="w-4 h-4" />
					Report an issue
				</LinkButton>
			</div>
		</div>
	)
}
