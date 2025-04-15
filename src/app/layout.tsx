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
    <html lang="pt-BR">
      <body className={`min-h-screen bg-background font-sans antialiased overflow-x-hidden ${inter.className}`}>
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col overflow-x-hidden">
            <MainNav />
            {/* Removido o padding/margin padrão do conteúdo principal */}
            <div className="flex-1">{children}</div>
            <footer className="border-t py-6 md:py-0">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
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
