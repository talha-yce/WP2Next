import Image from "next/image"
import { brands } from "@/lib/data"

export default function BrandsSection() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="section-title">Hizmet verdiğimiz markalar</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {brands.map((brand) => (
            <div key={brand.id} className="flex items-center justify-center p-4">
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                width={120}
                height={60}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Green section */}
      <div className="bg-secondary text-white py-10">
        <div className="container">
          <h3 className="text-xl font-semibold mb-4">Şirket politikamız her daim yenilikçi çözümler üretmektir</h3>
          <p className="max-w-3xl">
            Değişen çevre birimleri ve teknolojik inovasyonların yakından takip eden şirketimiz "Memnuniyetiniz
            önceliğimizdir" prensibi ile 20 yıldır Adana&apos;da hizmet vermektedir.
          </p>
        </div>
      </div>
    </div>
  )
}

