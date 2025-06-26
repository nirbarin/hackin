import { relations } from "drizzle-orm"
import {
	boolean,
	integer,
	jsonb,
	pgTable,
	serial,
	text,
	timestamp,
	unique,
} from "drizzle-orm/pg-core"

// User table
export const users = pgTable("user", {
	id: serial("id").primaryKey(),
	githubId: integer("github_id").notNull().unique(),
	avatar: text("avatar"),
	name: text("name"),
	username: text("username").notNull().unique(),
	skills: jsonb("skills")
		.notNull()
		.default([])
		.$type<{ name: string; level: string }[]>(),
})

// Session table
export const sessions = pgTable("session", {
	id: text("id").primaryKey(),
	userId: integer("user_id")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
})

// Team table
export const teams = pgTable("team", {
	id: serial("id").primaryKey(),
	name: text("name").notNull(),
})

// Project table
export const projects = pgTable("project", {
	id: serial("id").primaryKey(),
	hackathonName: text("hackathon_name").notNull(),
	theme: text("theme"),
	suggestedTech: text("suggested_tech"),
	judgingCriteria: text("judging_criteria"),
	additionalData: text("additional_data"),
	submissionTime: timestamp("submission_time", {
		withTimezone: true,
	}).notNull(),
	actualTech: text("actual_tech"),
	userId: integer("user_id")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	teamId: integer("team_id").references(() => teams.id, {
		onDelete: "set null",
	}),
})

// Idea table
export const ideas = pgTable("idea", {
	id: serial("id").primaryKey(),
	title: text("title").notNull(),
	description: text("description").notNull(),
	content: text("content").notNull(),
	isFinal: boolean("is_final").notNull().default(false),
	projectId: integer("project_id")
		.notNull()
		.references(() => projects.id, { onDelete: "cascade" }),
})

// IdeaChat table
export const ideaChats = pgTable("idea_chat", {
	id: serial("id").primaryKey(),
	message: text("message").notNull(),
	createdAt: timestamp("created_at", { withTimezone: true })
		.notNull()
		.defaultNow(),
	ideaId: integer("idea_id")
		.notNull()
		.references(() => ideas.id, { onDelete: "cascade" }),
	userId: integer("user_id")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
})

// Step table
export const steps = pgTable("step", {
	id: serial("id").primaryKey(),
	content: text("content").notNull(),
	isDone: boolean("is_done").notNull().default(false),
	order: integer("order"),
	projectId: integer("project_id")
		.notNull()
		.references(() => projects.id, { onDelete: "cascade" }),
})

// StepChat table
export const stepChats = pgTable("step_chat", {
	id: serial("id").primaryKey(),
	message: text("message").notNull(),
	createdAt: timestamp("created_at", { withTimezone: true })
		.notNull()
		.defaultNow(),
	stepId: integer("step_id")
		.notNull()
		.references(() => steps.id, { onDelete: "cascade" }),
	userId: integer("user_id")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
})

// Pitch table
export const pitches = pgTable(
	"pitch",
	{
		id: serial("id").primaryKey(),
		pptUrl: text("ppt_url"),
		projectId: integer("project_id")
			.notNull()
			.references(() => projects.id, { onDelete: "cascade" }),
	},
	table => ({
		uniqueProjectId: unique().on(table.projectId),
	}),
)

// PitchDialog table
export const pitchDialogs = pgTable("pitch_chat", {
	id: serial("id").primaryKey(),
	message: text("message").notNull(),
	createdAt: timestamp("created_at", { withTimezone: true })
		.notNull()
		.defaultNow(),
	pitchId: integer("pitch_id")
		.notNull()
		.references(() => pitches.id, { onDelete: "cascade" }),
	userId: integer("user_id")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	aiOrUser: text("ai_or_user").notNull(),
})

// Many-to-many relation between users and teams
export const userTeams = pgTable("user_teams", {
	userId: integer("user_id")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	teamId: integer("team_id")
		.notNull()
		.references(() => teams.id, { onDelete: "cascade" }),
})

// Relations
export const usersRelations = relations(users, ({ many }) => ({
	sessions: many(sessions),
	projects: many(projects),
	ideaChats: many(ideaChats),
	stepChats: many(stepChats),
	pitchDialogs: many(pitchDialogs),
	userTeams: many(userTeams),
}))

export const sessionsRelations = relations(sessions, ({ one }) => ({
	user: one(users, {
		fields: [sessions.userId],
		references: [users.id],
	}),
}))

export const teamsRelations = relations(teams, ({ many }) => ({
	projects: many(projects),
	userTeams: many(userTeams),
}))

export const userTeamsRelations = relations(userTeams, ({ one }) => ({
	user: one(users, {
		fields: [userTeams.userId],
		references: [users.id],
	}),
	team: one(teams, {
		fields: [userTeams.teamId],
		references: [teams.id],
	}),
}))

export const projectsRelations = relations(projects, ({ one, many }) => ({
	user: one(users, {
		fields: [projects.userId],
		references: [users.id],
	}),
	team: one(teams, {
		fields: [projects.teamId],
		references: [teams.id],
	}),
	ideas: many(ideas),
	steps: many(steps),
	pitches: many(pitches),
}))

export const ideasRelations = relations(ideas, ({ one, many }) => ({
	project: one(projects, {
		fields: [ideas.projectId],
		references: [projects.id],
	}),
	chats: many(ideaChats),
}))

export const ideaChatsRelations = relations(ideaChats, ({ one }) => ({
	idea: one(ideas, {
		fields: [ideaChats.ideaId],
		references: [ideas.id],
	}),
	user: one(users, {
		fields: [ideaChats.userId],
		references: [users.id],
	}),
}))

export const stepsRelations = relations(steps, ({ one, many }) => ({
	project: one(projects, {
		fields: [steps.projectId],
		references: [projects.id],
	}),
	chats: many(stepChats),
}))

export const stepChatsRelations = relations(stepChats, ({ one }) => ({
	step: one(steps, {
		fields: [stepChats.stepId],
		references: [steps.id],
	}),
	user: one(users, {
		fields: [stepChats.userId],
		references: [users.id],
	}),
}))

export const pitchesRelations = relations(pitches, ({ one, many }) => ({
	project: one(projects, {
		fields: [pitches.projectId],
		references: [projects.id],
	}),
	dialogs: many(pitchDialogs),
}))

export const pitchDialogsRelations = relations(pitchDialogs, ({ one }) => ({
	pitch: one(pitches, {
		fields: [pitchDialogs.pitchId],
		references: [pitches.id],
	}),
	user: one(users, {
		fields: [pitchDialogs.userId],
		references: [users.id],
	}),
}))
