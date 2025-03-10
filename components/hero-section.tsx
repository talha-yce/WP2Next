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
      Bölgesel Beyaz Eşya Servisi
    </h1>
    <p className="text-lg mb-8">
      Bölgesel, beyaz eşya, kombi, klima, kurutma makinesi, buzdolabı, çamaşır makinesi servisi. Yaygın servis ağımız
      ile ihtiyaçlarınıza en kısa sürede çözüm sunuyoruz, bize ulaşın.
    </p>
    <Link href="#" className="btn-primary">
      İLETİŞİM
    </Link>
  </div>
</div>

    </div>
  )
}

