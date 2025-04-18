import type React from "react"
import { MainNav } from "@/components/main-nav"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Music Store - Instrumentos e Equipamentos Musicais",
  description: "Loja de instrumentos e equipamentos musicais com os melhores preços",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`min-h-screen bg-background font-sans antialiased overflow-x-hidden ${inter.className}`}>
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col overflow-x-hidden">
            <MainNav />
            <div className="flex-1 w-full">{children}</div>
            <footer className="border-t py-6">
              <div className="container mx-auto px-4 md:px-6 max-w-7xl flex items-center justify-center">
                <p className="text-center text-sm leading-loose text-muted-foreground">
                  &copy; {new Date().getFullYear()} Music Store. Todos os direitos reservados.
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
