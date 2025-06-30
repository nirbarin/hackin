import Link from "next/link"
import type { ButtonVariant } from "@/components/ui/button"
import Button from "@/components/ui/button"

interface LinkButtonProps {
	to: string
	children: React.ReactNode
	variant?: ButtonVariant
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
			<Link href={to} target={target} className="no-underline text-inherit">
				{children}
			</Link>
		</Button>
	)
}
