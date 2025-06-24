"use client"

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
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

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

	function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			console.log(values)
			setIsSubmitted(true)
		} catch (error) {
			console.error("Form submission error", error)
			toast.error("Failed to submit the form. Please try again.")
		}
	}

	return (
		<>
			{isSubmitted ? (
				<div className="flex items-center justify-center min-h-screen">
					<div className="text-9xl">😊</div>
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
