import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Nav from "@/components/nav/bar"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "hackin",
	description: "",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<head>
				<meta name="apple-mobile-web-app-title" content="hackin" />
			</head>
			<body
				className={`${geistSans.className} ${geistMono.variable} antialiased flex flex-col min-h-[100dvh]`}
			>
				<Nav />
				{children}
			</body>
		</html>
	)
}
