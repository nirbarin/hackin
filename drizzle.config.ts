import { defineConfig } from "drizzle-kit"
import { env } from "./lib/env"

export default defineConfig({
	dialect: "postgresql",
	schema: "./lib/schema.ts",
	out: "./drizzle",
	dbCredentials: {
		url: env.DATABASE_URL,
	},
})
