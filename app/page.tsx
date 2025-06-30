import { Features } from "@/components/home/features"
import { PipelineFlowchart } from "@/components/home/flowchart"
import { Footer } from "@/components/home/footer"
import { Hero } from "@/components/home/hero"

export default function Home() {
	return (
		<div className="flex flex-col grow items-center justify-center">
			<Hero />
			<div className="divider w-[80vw] max-w-[1000px] mx-auto" />
			<Features />
			<div className="divider w-[80vw] max-w-[1000px] mx-auto" />
			<PipelineFlowchart />
			<div className="divider w-[80vw] max-w-[1000px] mx-auto" />
			<Footer />
		</div>
	)
}
