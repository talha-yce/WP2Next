import Link from "next/link"
import Image from "next/image"
import { services } from "@/lib/data"

export default function ServicesSection() {
  return (
    <div className="py-16">
      <div className="container">
        <h2 className="section-title">Hizmetlerimiz</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="border rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                <Link
                  href={`/hizmetlerimiz/${service.id}`}
                  className="inline-block bg-[var(--primary-color)] text-white px-4 py-2 rounded text-sm"
                >
                  DETAYLI BİLGİ
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

