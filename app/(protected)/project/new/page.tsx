"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { Countdown } from "@/components/cute/counter"
import { Button } from "@/components/ui/button"
import { DateTimePicker } from "@/components/ui/datetime-picker"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
	hackathon_name: z.string().min(1),
	theme: z.string().optional(),
	tools: z.string().optional(),
	judging_criteria: z.string().optional(),
	additional_data: z.string().optional(),
	submision_time: z.coerce.date(),
})

export default function ProjectPage() {
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [createdProjectId, setCreatedProjectId] = useState<string | null>(null)

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			hackathon_name: "",
			theme: "",
			tools: "",
			judging_criteria: "",
			additional_data: "",
		},
	})

	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			const response = await fetch("/api/new", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					...values,
					submision_time: values.submision_time.toISOString(),
				}),
			})

			if (!response.ok) {
				const errorData = await response.json().catch(() => ({}))
				throw new Error(
					errorData.error?.message ||
						"Failed to create project. Please try again.",
				)
			}

			const data = await response.json()
			console.log("Project created:", data)
			setCreatedProjectId(data.id)
			setIsSubmitted(true)
			toast.success("Project created successfully!")
		} catch (error) {
			console.error("Form submission error:", error)
			toast.error(
				error instanceof Error
					? error.message
					: "Failed to submit the form. Please try again.",
			)
		}
	}

	return (
		<>
			{isSubmitted ? (
				<div className="flex flex-col items-center justify-center min-h-screen gap-4">
					<div className="text-9xl mb-4">😊</div>
					<p className="text-xl">Project created successfully!</p>
					<p className="text-muted-foreground">
						You will be redirected in{" "}
						<Countdown
							from={5}
							onComplete={() => {
								if (createdProjectId) {
									window.location.href = `/project/${createdProjectId}`
								}
							}}
						/>
					</p>
					{createdProjectId && (
						<Button
							variant="link"
							onClick={() => {
								window.location.href = `/project/${createdProjectId}`
							}}
						>
							Go to project now
						</Button>
					)}
				</div>
			) : (
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-8 max-w-3xl mx-auto p-10"
					>
						<h1 className="text-3xl font-semibold mb-8">Create a Project</h1>
						<FormField
							control={form.control}
							name="hackathon_name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Hackathon Name <span className="text-red-500">*</span>
									</FormLabel>
									<FormControl>
										<Input placeholder="GDG Wow" type="text" {...field} />
									</FormControl>
									<FormDescription>
										This is Hackathon display name.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="theme"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Theme</FormLabel>
									<FormControl>
										<Input
											placeholder="Sustainability, Gen AI etc..."
											type="text"
											{...field}
										/>
									</FormControl>
									<FormDescription>
										This is the theme of the hackathon.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="tools"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Tools</FormLabel>
									<FormControl>
										<Input
											placeholder="shadcn, MongoDB, GeminiAPI etc..."
											type="text"
											{...field}
										/>
									</FormControl>
									<FormDescription>
										List the tools, technologies, or platforms required or
										recommended for this hackathon
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="judging_criteria"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Judging criteria</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Uniqueness of the idea, Genuineness of the problem, Complition the MVP etc..,"
											className="resize-none"
											{...field}
										/>
									</FormControl>
									<FormDescription>
										You can describe the Judging/Winning Criteria.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="additional_data"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Additional Data</FormLabel>
									<FormControl>
										<Textarea
											placeholder=""
											className="resize-none"
											{...field}
										/>
									</FormControl>
									<FormDescription>
										You can mention additional data about the hackathon.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="submision_time"
							render={({ field }) => (
								<FormItem className="flex flex-col">
									<FormLabel>
										Submission Date <span className="text-red-500">*</span>
									</FormLabel>
									<FormControl>
										<DateTimePicker
											value={field.value}
											onChange={field.onChange}
										/>
									</FormControl>
									<FormDescription>
										Add the date and time of submission.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit" className="w-full">
							Submit
						</Button>
					</form>
				</Form>
			)}
		</>
	)
}
