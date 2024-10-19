import type { Metadata } from "next"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import { Kanit } from "next/font/google"
import { ThemeProvider } from "@mui/material/styles"

import "./globals.css"
import theme from "~/theme"
import TheMainLayout from "~/components/layouts/TheMainLayout"

const kanit = Kanit({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["thai", "latin"],
  display: "swap",
  variable: "--font-kanit",
})

export const metadata: Metadata = {
  title: "ล่องเรือเจ้าพระยา by Fluke Journey",
  description:
    "สัมผัสประสบการณ์ล่องเรือสุดหรูบนสายน้ำประวัติศาสตร์ ไปพร้อมกับเรา ที่ Fluke Journey",
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://flukejourney.com",
    title: "ล่องเรือเจ้าพระยา by Fluke Journey",
    description:
      "สัมผัสประสบการณ์ล่องเรือสุดหรูบนสายน้AccessType ไปพร้อมกับเรา ที่ Fluke Journey",
    siteName: "ล่องเรือเจ้าพระยา by Fluke Journey",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className={kanit.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <TheMainLayout>{children}</TheMainLayout>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
