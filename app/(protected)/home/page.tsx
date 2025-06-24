import ThemeToggle from "@/components/theme/toggle"

export default function Page() {
	return (
		<div className="flex flex-col items-center justify-center min-h-[100dvh] relative">
			<ThemeToggle className="absolute top-5 right-5" />
			<h1
				className="
                    text-2xl
                    font-semibold
                    text-center
                    p-8
                "
			>
				Recent projects
			</h1>
			<div className="grow flex flex-col items-center justify-center flex-wrap gap-4 max-w-[1000px]" />
		</div>
	)
}
