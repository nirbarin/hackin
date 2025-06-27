"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

interface AvatarProps extends React.ComponentProps<typeof AvatarPrimitive.Root> {
	placeholder?: boolean
	size?: number
}

function Avatar({
	className,
	placeholder = false,
	size = 32,
	...props
}: AvatarProps) {
	return (
		<AvatarPrimitive.Root
			data-slot="avatar"
			className={cn(
				"relative flex shrink-0 overflow-hidden rounded-full",
				placeholder && "animate-pulse bg-muted",
				className
			)}
			style={{ width: `${size}px`, height: `${size}px` }}
			{...props}
		/>
	)
}

function AvatarImage({
	className,
	...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
	return (
		<AvatarPrimitive.Image
			data-slot="avatar-image"
			className={cn("aspect-square h-full w-full object-cover", className)}
			{...props}
		/>
	)
}

function AvatarFallback({
	className,
	...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
	return (
		<AvatarPrimitive.Fallback
			data-slot="avatar-fallback"
			className={cn(
				"bg-muted flex h-full w-full items-center justify-center rounded-full",
				className
			)}
			{...props}
		/>
	)
}

interface UsernameAvatarProps extends Omit<AvatarProps, "placeholder"> {
	username: string
	size?: number
	placeholder?: boolean
}

function VercelAvatar({
	username,
	size = 32,
	className,
	placeholder = false,
	...props
}: UsernameAvatarProps) {
	if (placeholder) {
		return (
			<Avatar className={className} placeholder size={size} {...props} />
		)
	}

	return (
		<Avatar className={className} size={size} {...props}>
			<AvatarImage
				src={`https://vercel.com/api/www/avatar?u=${username}&s=${size * 2}`}
				alt={`@${username}`}
				style={{ width: '100%', height: '100%' }}
			/>
			<AvatarFallback>{username.slice(0, 2).toUpperCase()}</AvatarFallback>
		</Avatar>
	)
}

function GithubAvatar({
	username,
	size = 32,
	className,
	placeholder = false,
	...props
}: UsernameAvatarProps) {
	if (placeholder) {
		return (
			<Avatar className={className} placeholder size={size} {...props} />
		)
	}

	return (
		<Avatar className={className} size={size} {...props}>
			<AvatarImage
				src={`https://github.com/${username}.png?size=${size * 2}`}
				alt={`@${username}`}
				style={{ width: '100%', height: '100%' }}
			/>
			<AvatarFallback>{username.slice(0, 2).toUpperCase()}</AvatarFallback>
		</Avatar>
	)
}

function GitlabAvatar({
	username,
	size = 32,
	className,
	placeholder = false,
	...props
}: UsernameAvatarProps) {
	const [avatarUrl, setAvatarUrl] = React.useState<string | null>(null)

	React.useEffect(() => {
		if (!placeholder && username) {
			fetch(`https://gitlab.com/api/v4/avatar?email=${username}&size=${size * 2}`)
				.then(response => response.json())
				.then(data => setAvatarUrl(data.avatar_url))
				.catch(error => console.error("Failed to fetch GitLab avatar:", error))
		}
	}, [username, size, placeholder])

	if (placeholder || !avatarUrl) {
		return (
			<Avatar className={className} placeholder size={size} {...props} />
		)
	}

	return (
		<Avatar className={className} size={size} {...props}>
			<AvatarImage
				src={avatarUrl}
				alt={`@${username}`}
				style={{ width: '100%', height: '100%' }}
			/>
			<AvatarFallback>{username.slice(0, 2).toUpperCase()}</AvatarFallback>
		</Avatar>
	)
}

function BitbucketAvatar({
	username,
	size = 32,
	className,
	placeholder = false,
	...props
}: UsernameAvatarProps) {
	if (placeholder) {
		return (
			<Avatar className={className} placeholder size={size} {...props} />
		)
	}

	return (
		<Avatar className={className} size={size} {...props}>
			<AvatarImage
				src={`https://bitbucket.org/account/${username}/avatar/${size * 2}`}
				alt={`@${username}`}
				style={{ width: '100%', height: '100%' }}
			/>
			<AvatarFallback>{username.slice(0, 2).toUpperCase()}</AvatarFallback>
		</Avatar>
	)
}

export {
	VercelAvatar as Avatar,
	GithubAvatar,
	GitlabAvatar,
	BitbucketAvatar
}

interface AvatarGroupMember {
	username: string
	type?: 'github' | 'vercel' | 'gitlab' | 'bitbucket'
}

interface AvatarGroupProps {
	members: AvatarGroupMember[]
	size?: number
	limit?: number
	className?: string
}

function AvatarGroup({
	members = [],
	size = 32,
	limit,
	className
}: AvatarGroupProps) {
	const displayMembers = limit ? members.slice(0, limit) : members
	const remainingCount = limit && members.length > limit ? members.length - limit : 0

	return (
		<div
			className={cn(
				"flex items-center -space-x-2",
				className
			)}
			data-slot="avatar-group"
		>
			{displayMembers.map((member, index) => {
				const AvatarComponent = getAvatarComponent(member.type)

				return (
					<div
						key={`${member.username}-${index}`}
						className="ring-2 ring-background rounded-full"
					>
						<AvatarComponent
							username={member.username}
							size={size}
						/>
					</div>
				)
			})}

			{remainingCount > 0 && (
				<div className="ring-2 ring-background rounded-full">
					<Avatar
						size={size}
						className="bg-muted flex items-center justify-center"
					>
						<span className="text-xs font-medium">+{remainingCount}</span>
					</Avatar>
				</div>
			)}
		</div>
	)
}

function getAvatarComponent(type?: 'github' | 'vercel' | 'gitlab' | 'bitbucket') {
	switch (type) {
		case 'github':
			return GithubAvatar
		case 'gitlab':
			return GitlabAvatar
		case 'bitbucket':
			return BitbucketAvatar
		case 'vercel':
		default:
			return VercelAvatar
	}
}

export {
	AvatarGroup
}