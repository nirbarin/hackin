import Link from "next/link"
import ThemeChanger from "@/components/theme/toggle"

export default function Nav() {
	return (
		<div className="flex w-full text-xl font-semibold p-5 justify-between items-center">
			<Link href="/" className="hover:opacity-80 transition-opacity">
				hackin.
				<span className="text-primary">nirbar</span>
				.in
			</Link>
			<div className="grow" />
			<ThemeChanger className="" />
		</div>
	)
}
