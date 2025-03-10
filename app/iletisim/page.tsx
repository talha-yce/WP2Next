import Image from "next/image"
import { Phone, Mail } from "lucide-react"
import { contactInfo } from "@/lib/data"
import CallButton from "@/components/call-button"

export default function Contact() {
  return (
    <>
      {/* Header banner */}
      <div className="relative h-64">
        <Image src="/images/inner-bannesr.jpg" alt="İletişim" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">İletişim</h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="container">
          <p className="text-sm">
            <span className="text-gray-500">Ana sayfa</span> &gt; <span>İletişim</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container py-12">
        <div className="flex justify-between space-x-8">
          {/* Phone Box */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-%40 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center mb-4">
              <Phone className="text-white" />
            </div>
            <h2 className="text-2xl font-bold">Telefon Numaralarımız</h2>
            <span className="text-lg font-semibold">{contactInfo.phone}</span>
          </div>

          {/* Email Box */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-%40 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center mb-4">
              <Mail className="text-white" />
            </div>
            <h2 className="text-2xl font-bold">E-Posta</h2>
            <span className="text-lg font-semibold">{contactInfo.email}</span>
          </div>
        </div>
      </div>
      <CallButton />
    </>
  )
}
