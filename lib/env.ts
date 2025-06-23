import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
	server: {
		GITHUB_ID: z.string().min(1),
		GITHUB_SECRET: z.string().min(1),
		DATABASE_URL: z.string().url(),
	},
	client: {},
	runtimeEnv: {
		GITHUB_ID: process.env.GITHUB_ID,
		GITHUB_SECRET: process.env.GITHUB_SECRET,
		DATABASE_URL: process.env.DATABASE_URL,
	},
})
