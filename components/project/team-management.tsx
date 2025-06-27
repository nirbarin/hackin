"use client"

import { Crown, PlusIcon, UserMinusIcon, UsersIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import {
	addTeamMember,
	createTeamForProject,
	removeTeamMember,
} from "@/app/actions/project"
import { GithubAvatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface TeamMember {
	id: number
	username: string
	name: string | null
	avatar: string | null
}

interface Team {
	id: number
	name: string
	userTeams: {
		user: TeamMember
	}[]
}

interface TeamManagementProps {
	projectId: number
	team: Team | null
	isOwner: boolean
}

export default function TeamManagement({
	projectId,
	team,
	isOwner,
}: TeamManagementProps) {
	const [teamName, setTeamName] = useState("")
	const [username, setUsername] = useState("")
	const [isCreatingTeam, setIsCreatingTeam] = useState(false)
	const [isAddingMember, setIsAddingMember] = useState(false)
	const [error, setError] = useState("")
	const [removingMemberId, setRemovingMemberId] = useState<number | null>(null)
	const router = useRouter()

	const handleCreateTeam = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!teamName.trim()) return

		setIsCreatingTeam(true)
		setError("")

		const result = await createTeamForProject(projectId, teamName.trim())

		if (result.success) {
			router.refresh()
		} else {
			setError(result.error || "Failed to create team")
		}

		setIsCreatingTeam(false)
	}

	const handleAddMember = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!username.trim()) return

		setIsAddingMember(true)
		setError("")

		const result = await addTeamMember(projectId, username.trim())

		if (result.success) {
			setUsername("")
			router.refresh()
		} else {
			setError(result.error || "Failed to add team member")
		}

		setIsAddingMember(false)
	}

	const handleRemoveMember = async (userId: number) => {
		setError("")
		setRemovingMemberId(userId)
		const result = await removeTeamMember(projectId, userId)

		if (result.success) {
			router.refresh()
		} else {
			setError(result.error || "Failed to remove team member")
		}
		setRemovingMemberId(null)
	}

	// Empty state - no team created yet
	if (!team) {
		return (
			<Card className="w-full">
				<CardHeader className="text-center pb-4">
					<div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
						<UsersIcon className="h-6 w-6 text-muted-foreground" />
					</div>
					<CardTitle className="text-xl">Team Collaboration</CardTitle>
					<p className="text-sm text-muted-foreground mt-2">
						{isOwner
							? "Create a team to invite collaborators to your project"
							: "This project doesn't have a team yet"}
					</p>
				</CardHeader>
				{isOwner && (
					<CardContent className="pt-0">
						<form
							onSubmit={handleCreateTeam}
							className="space-y-4 max-w-sm mx-auto"
						>
							<div className="space-y-2">
								<Label htmlFor="teamName">Team name</Label>
								<Input
									id="teamName"
									value={teamName}
									onChange={e => setTeamName(e.target.value)}
									placeholder="Enter a team name"
									disabled={isCreatingTeam}
									autoFocus
								/>
								<p className="text-xs text-muted-foreground">
									Choose a descriptive name for your team
								</p>
							</div>

							{error && (
								<div className="rounded-md bg-destructive/15 px-3 py-2 text-sm text-destructive">
									{error}
								</div>
							)}

							<Button
								type="submit"
								disabled={isCreatingTeam || !teamName.trim()}
								className="w-full"
							>
								{isCreatingTeam && (
									<div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
								)}
								Create Team
							</Button>
						</form>
					</CardContent>
				)}
			</Card>
		)
	}

	const teamMembers = team.userTeams.map(ut => ut.user)

	return (
		<div className="space-y-6">
			{/* Team Header */}
			<Card>
				<CardHeader>
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-3">
							<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
								<UsersIcon className="h-5 w-5 text-primary" />
							</div>
							<div>
								<CardTitle className="text-xl">{team.name}</CardTitle>
								<p className="text-sm text-muted-foreground">
									{teamMembers.length}{" "}
									{teamMembers.length === 1 ? "member" : "members"}
								</p>
							</div>
						</div>
					</div>
				</CardHeader>
			</Card>

			{/* Team Members */}
			<Card>
				<CardHeader>
					<CardTitle className="text-base">Members</CardTitle>
				</CardHeader>
				<CardContent className="pt-0">
					<div className="space-y-3">
						{teamMembers.map((member, index) => {
							const isTeamOwner = index === 0
							return (
								<div
									key={member.id}
									className="flex items-center justify-between py-3 px-1 group"
								>
									<div className="flex items-center space-x-3 min-w-0 flex-1">
										<div className="relative flex-shrink-0">
											<GithubAvatar username={member.username} size={36} />
											{isTeamOwner && (
												<div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
													<Crown className="h-2.5 w-2.5 text-primary-foreground" />
												</div>
											)}
										</div>
										<div className="min-w-0 flex-1">
											<div className="flex items-center space-x-2">
												<p className="text-sm font-medium truncate">
													{member.name || member.username}
												</p>
												{isTeamOwner && (
													<Badge variant="secondary" className="text-xs">
														Owner
													</Badge>
												)}
											</div>
											<p className="text-xs text-muted-foreground">
												@{member.username}
											</p>
										</div>
									</div>

									{isOwner && !isTeamOwner && (
										<Button
											variant="ghost"
											size="sm"
											onClick={() => handleRemoveMember(member.id)}
											disabled={removingMemberId === member.id}
											className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive"
										>
											{removingMemberId === member.id ? (
												<div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
											) : (
												<UserMinusIcon className="h-4 w-4" />
											)}
										</Button>
									)}
								</div>
							)
						})}
					</div>
				</CardContent>
			</Card>

			{/* Add Member Form */}
			{isOwner && (
				<Card>
					<CardHeader>
						<CardTitle className="text-base">Add Member</CardTitle>
						<p className="text-sm text-muted-foreground">
							Invite someone to collaborate on this project
						</p>
					</CardHeader>
					<CardContent className="pt-0">
						<form onSubmit={handleAddMember} className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="username">GitHub username</Label>
								<div className="flex space-x-2">
									<Input
										id="username"
										value={username}
										onChange={e => setUsername(e.target.value)}
										placeholder="username"
										disabled={isAddingMember}
										className="flex-1"
									/>
									<Button
										type="submit"
										disabled={isAddingMember || !username.trim()}
									>
										{isAddingMember ? (
											<div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
										) : (
											<PlusIcon className="h-4 w-4" />
										)}
									</Button>
								</div>
								<p className="text-xs text-muted-foreground">
									Enter the GitHub username of the person you want to invite
								</p>
							</div>

							{error && (
								<div className="rounded-md bg-destructive/15 px-3 py-2 text-sm text-destructive">
									{error}
								</div>
							)}
						</form>
					</CardContent>
				</Card>
			)}
		</div>
	)
}
