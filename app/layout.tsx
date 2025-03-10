import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bölgesel Teknik Servis Hizmetleri",
  description:
    "Bölgesel hizmet platformu üzerinden beyaz eşya, kombi, klima, bulaşık makinesi, çamaşır makinesi ve televizyon gibi cihazlar için güvenilir ve hızlı teknik servis hizmetleri",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

