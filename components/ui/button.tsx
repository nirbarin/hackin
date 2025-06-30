import { Slot } from "@radix-ui/react-slot"
import type * as React from "react"
import { cn } from "@/lib/utils"

const btnvariantClasses = {
	default: "btn",
	destructive: "btn btn-error",
	outline: "btn btn-outline",
	secondary: "btn btn-secondary",
	ghost: "btn btn-ghost",
	link: "btn btn-link link-hover",
} as const

const sizeClasses = {
	default: "",
	sm: "btn-sm",
	lg: "btn-lg",
	icon: "btn-square",
} as const

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: keyof typeof btnvariantClasses
	size?: keyof typeof sizeClasses
	asChild?: boolean
}

export default function Button({
	variant = "default",
	size = "default",
	className,
	asChild = false,
	...props
}: ButtonProps) {
	const Comp = asChild ? Slot : "button"
	const variantClass = btnvariantClasses[variant]
	const sizeClass = sizeClasses[size]

	return (
		<Comp
			className={cn("btn", variantClass, sizeClass, className)}
			{...props}
		/>
	)
}

export type ButtonVariant = keyof typeof btnvariantClasses
