import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { companyInfo,contactInfo } from "@/lib/data"
import CallButton from "@/components/call-button"

export default function CompanyInfo() {
  return (
    <>
      {/* Header banner */}
      <div className="relative h-64">
        <Image src="/images/inner-bannesr.jpg" alt="Firma Bilgileri" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Firma Bilgileri</h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
      <div className="relative container h-full flex flex-col justify-center">
          <div className="flex items-center text-sm">
            <Link href="/" className="hover:text-blue-600">
              Ana sayfa
            </Link>
            <span className="mx-2">»</span>
            <span>Firma Bilgileri</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:w-[90%] mx-auto py-12 text-center">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-6">{companyInfo.name}</h2>

    <div className="prose max-w-none mx-auto">
      <p className="text-lg mb-6">{companyInfo.mission1}</p>

      <p className="mb-6">
        <strong>{companyInfo.mission2}</strong>     
      </p>

      
    </div>
  </div>

  {/* Content */}
  <div className="container py-12">
        <div className="flex-col items-center space-x-8">
          {/* Phone Box */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center mb-4">
              <Phone className="text-white" />
            </div>
            <h2 className="text-2xl font-bold">Telefon Numaralarımız</h2>
            <span className="text-lg font-semibold">{contactInfo.phone}</span>
          </div>
        </div>
      </div>
      </div>
      <CallButton />
    </>
  )
}

