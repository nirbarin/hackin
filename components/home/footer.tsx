import Link from "next/link"
import LinkButton from "../link/button"

export function Footer() {
	return (
		<footer className="flex flex-col items-center justify-center w-full pt-7 py-10 gap-3 text-center text-base-content/80">
			<div className="text-lg font-semibold flex flex-wrap items-center justify-center gap-1">
				hackin [ a{" "}
				<Link href="https://nirbar.in" className="text-primary font-bold">
					nirbar
				</Link>{" "}
				product ]
			</div>

			<div className="flex gap-4">
				<LinkButton to="/team" variant="link">
					team
				</LinkButton>
				<LinkButton to="/money" variant="link">
					money
				</LinkButton>
				<LinkButton to="/legal" variant="link">
					legal
				</LinkButton>
			</div>
		</footer>
	)
}
