import Image from "next/image"
import Link from "next/link"
import { services } from "@/lib/data"
import CallButton from "@/components/call-button"
import { contactInfo } from "@/lib/data"


export function generateStaticParams() {
  return services.map((service) => ({
    serviceId: service.id,
  }))
}

export default async function ServicePage({ params }: { params: { serviceId: string } }) {
  const service = services.find((s) => s.id === params.serviceId)

  if (!service) {
    return <div className="container py-12">Service not found</div>
  }

  return (
    <>
      {/* Header banner */}
      <div className="relative h-48 bg-[#1a1a1a]">
        <div className="absolute inset-0">
          <Image
            src="/images/inner-bannesr.jpg"
            alt={service.title}
            fill
            className="object-cover opacity-50"
          />
        </div>
        <div className="relative container h-full flex flex-col justify-center">
          <h1 className="text-4xl font-normal text-white mb-2">{service.title}</h1>
          <div className="flex items-center text-white/70 text-sm">
            <Link href="/" className="hover:text-white">
              Ana sayfa
            </Link>
            <span className="mx-2">»</span>
            <span>{service.title}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-16">
        {/* Service Image and Title */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative h-[400px] mb-8">
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              fill
              className="object-cover rounded-lg"
            />
            
          </div>
          <h2 className="text-3xl font-normal text-center mb-8">{service.title}</h2>
          <p className="text-gray-600 leading-relaxed mb-12">{service.fullDescription}</p>
        </div>

        {/* Call Center Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-normal text-center mb-6">Çağrı Merkezi</h3>
          <p className="text-gray-600 text-center leading-relaxed mb-12">
            Bizi arayıp teknik yetkilimiz ile iletişim kurduğunuz takdirde ilerleyen süreçte telefondaki yetkili size
            gereken bilgileri verip sorunlarınıza en uygun çözümleri size sunarak sizi bu zahmetten kurtaracaktır.
            Sürecin işleyişine kısaca değinecek olursak ilk olarak cihazınızın sorunuyla ilgili kısa bir bilgilendirme
            alındıktan sonra isim, adres ve telefon numaranız kaydedilir. Ardından bu bilgiler sahadaki arkadaşlarımıza
            iletilerek iş yoğunluğuna bağlı olarak arkadaşlarımız ev, iş, okul, hastane, fabrika, kamu kuruluşları, avm,
            gelmeden 1 saat önce, bize vermiş olduğunuz bilgiler çerçevesinde telefon numaranızdan size ulaşarak
            müsaitlik durumunuza göre cihazın bulunduğu yere gelinir veya daha sonraki bir zamana ertelenir.
          </p>

          {/* Customer Service Center */}
          <h3 className="text-2xl font-normal text-center mb-6">Müşteri İletişim Merkezi</h3>
          <p className="text-xl font-medium text-center">{contactInfo.phone}</p>
        </div>
      </div>

      <CallButton />
    </>
  )
}

