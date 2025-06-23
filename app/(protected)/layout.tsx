import { AuthProvider } from "@/components/auth/provider"


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <AuthProvider>
            <div className="flex flex-col min-h-[100dvh]">
                <div className="flex flex-col grow">{children}</div>
            </div>
        </AuthProvider>
    )
}
