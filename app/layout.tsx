import type { Metadata } from 'next'
import { Plus_Jakarta_Sans as FontSans } from 'next/font/google'
import './globals.css'

import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'CarePulse',
  description:
    'Um sistema de gerenciamento de pacientes de saúde projetado para simplificar o registro de pacientes, o agendamento de consultas e a gestão de prontuários médicos para prestadores de serviços de saúde.',
  icons: {
    icon: '/assets/icons/logo-icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-br'>
      <body
        className={cn(
          'min-h-screen bg-dark-300 font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='dark'>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
