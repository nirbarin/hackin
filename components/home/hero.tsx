import Link from "next/link"
import LinkButton from "../link/button"

export function Hero() {
	return (
		<section className="flex flex-col items-center justify-center w-full min-h-[80dvh] gap-8 p-6 text-center">
			<h1 className="text-3xl md:text-5xl font-bold">
				Actually F**king Ship Your Hackathon Project
			</h1>

			<h2 className="text-lg md:text-xl text-base-content/70 space-y-2">
				<p className="font-semibold">From idea to demo in record time</p>
				<p>
					<Link
						href="https://hackin.nirbar.in"
						className="link link-hover font-semibold"
					>
						Hackin
					</Link>{" "}
					guides your team through every step of the hackathon journey with
					<br className="hidden md:inline" />
					AI powered insights and contextual help
				</p>
			</h2>

			<div className="flex flex-col md:flex-row gap-4 w-full max-w-2xl justify-center">
				<LinkButton
					to="https://github.com/nirbarin/hackin"
					variant="default"
					className="grow"
				>
					Star on github
				</LinkButton>
				<LinkButton to="/app" className="grow text-secondary-content">
					Start Buildin
				</LinkButton>
			</div>
		</section>
	)
}
