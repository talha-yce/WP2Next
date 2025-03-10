import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="relative h-[500px] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bck.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 text-white flex flex-col items-center justify-center text-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bölgesel Teknik Servis Hizmetleri
          </h1>
          <p className="text-lg mb-8">
            Beyaz eşya, kombi, klima, buzdolabı, çamaşır makinesi ve kurutma makinesi servisleri ile bölgede en hızlı ve güvenilir
            teknik destek sağlıyoruz. Yüksek kaliteli hizmetimizle, ihtiyaçlarınıza anında çözüm sunuyoruz. Bize ulaşın, hemen yardımcı olalım!
          </p>
          <Link href="/iletisim" className="btn-primary">
            Hemen Bizimle İletişime Geçin
          </Link>
        </div>
      </div>
    </div>
  )
}
