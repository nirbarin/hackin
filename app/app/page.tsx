import LinkButton from "@/components/link/button"

export default function App() {
	return (
		<div className="flex flex-col grow gap-4 items-center justify-center text-center px-4">
			<div className="text-3xl font-semibold">We do not know who you are</div>
			<div className="text-lg text-base-content/70">
				Without identity, we can offer only glimpses; not the whole experience
			</div>
			<div className="flex flex-col md:flex-row gap-4 w-full max-w-2xl justify-center">
				<LinkButton to="/demo" variant="default" className="grow">
					Try without identification
				</LinkButton>
				<LinkButton to="/identitfy" className="grow text-secondary-content">
					Identify yourself for full access
				</LinkButton>
			</div>
		</div>
	)
}
