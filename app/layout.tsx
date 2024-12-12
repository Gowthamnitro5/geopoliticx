import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Sidebar from '@/components/layout/sidebar'
import RightPanel from '@/components/layout/right-panel'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PolitCX - Geopolitical Analysis Platform',
  description: 'Advanced geopolitical analysis platform by Reva University',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen bg-background">
            <Sidebar />
            <main className="flex-1 border-x border-border overflow-y-auto">
              {children}
            </main>
            <RightPanel />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}