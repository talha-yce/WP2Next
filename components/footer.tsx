"use client"
import Link from "next/link"
import { Phone, ChevronDown } from "lucide-react" 
import { useState, useEffect, useRef } from "react" 
import { contactInfo } from "@/lib/data"

export default function Footer() {
  const [isFooterServicesOpen, setIsFooterServicesOpen] = useState(false) 
  const menuRef = useRef<HTMLDivElement | null>(null); 

  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsFooterServicesOpen(false);
      }
    };
    
    const handleScroll = () => {
      setIsFooterServicesOpen(false); 
    };

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer>
      {/* Main footer */}
      <div className="bg-primary text-white py-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">ADANA TEKNİK SERVİS</h4>
              <div className="flex items-center mb-2">
                <Phone size={16} className="mr-2" />
                <span>{contactInfo.phone}</span>
              </div>
            </div>

            {/* Footer Menu */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Menü</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:underline">
                    Anasayfa
                  </Link>
                </li>

                {/* Hizmetlerimiz Dropdown */}
                <div className="relative" ref={menuRef}>
                  <button
                    className="flex items-center hover:underline"
                    onClick={() => setIsFooterServicesOpen(!isFooterServicesOpen)} 
                  >
                    Hizmetlerimiz
                    <ChevronDown size={16} className="ml-1" />
                  </button>

                  {isFooterServicesOpen && (
                    <div className="fixed bottom-0 left-1/2 transform -translate-x-[25%] z-10 w-64 max-h-[calc(100vh-200px)] overflow-y-auto bg-white text-black rounded-md shadow-lg py-1 mt-2">
                      <div className="py-1">
                        <Link
                          href="/hizmetlerimiz/buzdolabi-servisi"
                          className="block px-4 py-2 text-sm hover:bg-gray-100"
                          onClick={() => setIsFooterServicesOpen(false)} 
                        >
                          Buzdolabı Servisi
                        </Link>
                        <Link
                          href="/hizmetlerimiz/camasir-makinesi-servisi"
                          className="block px-4 py-2 text-sm hover:bg-gray-100"
                          onClick={() => setIsFooterServicesOpen(false)}
                        >
                          Çamaşır Makinesi Servisi
                        </Link>
                        <Link
                          href="/hizmetlerimiz/kurutma-makinesi-servisi"
                          className="block px-4 py-2 text-sm hover:bg-gray-100"
                          onClick={() => setIsFooterServicesOpen(false)}
                        >
                          Kurutma Makinesi Servisi
                        </Link>
                        <Link
                          href="/hizmetlerimiz/bulasik-makinesi-servisi"
                          className="block px-4 py-2 text-sm hover:bg-gray-100"
                          onClick={() => setIsFooterServicesOpen(false)}
                        >
                          Bulaşık Makinesi Servisi
                        </Link>
                        <Link
                          href="/hizmetlerimiz/televizyon-servisi"
                          className="block px-4 py-2 text-sm hover:bg-gray-100"
                          onClick={() => setIsFooterServicesOpen(false)}
                        >
                          Televizyon Servisi
                        </Link>
                        <Link
                          href="/hizmetlerimiz/klima-servisi"
                          className="block px-4 py-2 text-sm hover:bg-gray-100"
                          onClick={() => setIsFooterServicesOpen(false)}
                        >
                          Klima Servisi
                        </Link>
                        <Link
                          href="/hizmetlerimiz/kombi-servisi"
                          className="block px-4 py-2 text-sm hover:bg-gray-100"
                          onClick={() => setIsFooterServicesOpen(false)}
                        >
                          Kombi Servisi
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                <li>
                  <Link href="/firma-bilgileri" className="hover:underline">
                    Firma Bilgileri
                  </Link>
                </li>
                <li>
                  <Link href="/iletisim" className="hover:underline">
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Servis İçerikleri</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/hizmetlerimiz/buzdolabi-servisi" className="hover:underline">
                    Buzdolabı Servisi
                  </Link>
                </li>
                <li>
                  <Link href="/hizmetlerimiz/camasir-makinesi-servisi" className="hover:underline">
                    Çamaşır Makinesi Servisi
                  </Link>
                </li>
                <li>
                  <Link href="/hizmetlerimiz/bulasik-makinesi-servisi" className="hover:underline">
                    Bulaşık Makinesi Servisi
                  </Link>
                </li>
                <li>
                  <Link href="/hizmetlerimiz/televizyon-servisi" className="hover:underline">
                    Televizyon Servisi
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-blue-800">
            <p>© 2024 Adana Merkez Servis Tüm Hakları Saklıdır</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
