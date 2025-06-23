import { Button } from "@/components/ui/button"
import Link from "next/link"

interface LinkButtonProps {
	to: string
	children: React.ReactNode
	variant?:
		| "link"
		| "default"
		| "destructive"
		| "outline"
		| "secondary"
		| "ghost"
		| null
		| undefined
	className?: string
	target?: React.HTMLAttributeAnchorTarget
}

export default function LinkButton({
	to,
	children,
	variant = "secondary",
	className,
	target = "_self",
}: LinkButtonProps) {
	return (
		<Button asChild variant={variant} className={className}>
			<Link href={to} target={target}>
				{children}
			</Link>
		</Button>
	)
}
