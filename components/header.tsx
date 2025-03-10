"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { contactInfo } from "@/lib/data"
import { ChevronDown, Phone, Mail } from "lucide-react"

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <header>
      {/* Top bar */}
      <div className="bg-primary text-white py-2">
        <div className="container flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Phone size={16} />
            <span>{contactInfo.phone}</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-12 h-12 relative">
              <Image
                src="/images/NOKTA-1.webp"
                alt="Logo"
                width={48}
                height={48}
                className="rounded-full"
              />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-[var(--primary-color)] transition-colors">
              Anasayfa
            </Link>
            <div className="relative">
              <button
                className="flex items-center hover:text-[var(--primary-color)] transition-colors"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Hizmetlerimiz
                <ChevronDown size={16} className="ml-1" />
              </button>

              {isServicesOpen && (
                <div className="absolute z-50 mt-2 w-56 bg-white rounded-md shadow-lg py-1">
                  <div className="py-1">
                    <Link
                      href="/hizmetlerimiz/buzdolabi-servisi"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Buzdolabı Servisi
                    </Link>
                    <Link
                      href="/hizmetlerimiz/camasir-makinesi-servisi"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Çamaşır Makinesi Servisi
                    </Link>
                    <Link
                      href="/hizmetlerimiz/kurutma-makinesi-servisi"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Kurutma Makinesi Servisi
                    </Link>
                    <Link
                      href="/hizmetlerimiz/bulasik-makinesi-servisi"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Bulaşık Makinesi Servisi
                    </Link>
                    <Link
                      href="/hizmetlerimiz/televizyon-servisi"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Televizyon Servisi
                    </Link>
                    <Link
                      href="/hizmetlerimiz/klima-servisi"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Klima Servisi
                    </Link>
                    <Link
                      href="/hizmetlerimiz/kombi-servisi"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Kombi Servisi
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link href="/firma-bilgileri" className="hover:text-[var(--primary-color)] transition-colors">
              Firma Bilgileri
            </Link>
            <Link href="/iletisim" className="hover:text-[var(--primary-color)] transition-colors">
              İletişim
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-500 hover:text-primary" onClick={() => setIsServicesOpen(!isServicesOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Mobile menu */}
            {isServicesOpen && (
              <div className="absolute z-10 left-0 right-0 mt-4 bg-white shadow-lg py-2 px-4">
                <Link href="/" className="block py-2 hover:text-primary" onClick={() => setIsServicesOpen(false)}>
                  Anasayfa
                </Link>
                <div className="py-2">
                  <span className="font-medium">Hizmetlerimiz</span>
                  <div className="pl-4 mt-1 space-y-1">
                    <Link
                      href="/hizmetlerimiz/buzdolabi-servisi"
                      className="block py-1 hover:text-primary"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Buzdolabı Servisi
                    </Link>
                    <Link
                      href="/hizmetlerimiz/camasir-makinesi-servisi"
                      className="block py-1 hover:text-primary"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Çamaşır Makinesi Servisi
                    </Link>
                    <Link
                      href="/hizmetlerimiz/kurutma-makinesi-servisi"
                      className="block py-1 hover:text-primary"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Kurutma Makinesi Servisi
                    </Link>
                    <Link
                      href="/hizmetlerimiz/bulasik-makinesi-servisi"
                      className="block py-1 hover:text-primary"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Bulaşık Makinesi Servisi
                    </Link>
                    <Link
                      href="/hizmetlerimiz/televizyon-servisi"
                      className="block py-1 hover:text-primary"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Televizyon Servisi
                    </Link>
                    <Link
                      href="/hizmetlerimiz/klima-servisi"
                      className="block py-1 hover:text-primary"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Klima Servisi
                    </Link>
                    <Link
                      href="/hizmetlerimiz/kombi-servisi"
                      className="block py-1 hover:text-primary"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Kombi Servisi
                    </Link>
                  </div>
                </div>
                <Link
                  href="/firma-bilgileri"
                  className="block py-2 hover:text-primary"
                  onClick={() => setIsServicesOpen(false)}
                >
                  Firma Bilgileri
                </Link>
                <Link
                  href="/iletisim"
                  className="block py-2 hover:text-primary"
                  onClick={() => setIsServicesOpen(false)}
                >
                  İletişim
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

