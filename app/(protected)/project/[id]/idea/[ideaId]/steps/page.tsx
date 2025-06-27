"use client"
import { useParams } from "next/navigation"

export default function Page() {
	const params = useParams()
	const ideaId = params?.ideaId

	return <div>Idea ID: {ideaId}</div>
}
