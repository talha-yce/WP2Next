export type Service = {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  image: string
}

export type Feature = {
  id: string
  title: string
  description: string
  icon: string
}

export type Brand = {
  id: string
  name: string
  logo: string
}

export type ContactInfo = {
  phone: string
  email: string
  address: string
}

export type CompanyInfo = {
  name: string
  slogan: string
  description: string
  yearEstablished: number
  mission1: string
  mission2: string
  
}

// Services data
export const services: Service[] = [
  {
    id: "buzdolabi-servisi",
    title: "Buzdolabı Servisi",
    shortDescription:
      "Buzdolabınızın onarımları yapılırken ileride sorun meydana gelebilecek ve arıza oluşturabilecek parçalar da kontrol edilmektedir.",
    fullDescription:
      "Buzdolabınızın onarımları yapılırken ileride sorun meydana gelebilecek ve arıza oluşturabilecek parçalar da kontrol edilmektedir. Bu sayede buzdolabınızın arızalanmasının ve mağdur olmanızın da önüne geçilmektedir. Buzdolabınız çalışmıyor veya istediğiniz gibi soğutmuyor olabilir. Buzdolapları ile ilgili en sık gelen şikayetler arasında ise buzlanma ve terleme sorunları yer almaktadır. Buzdolabınızın sık sık soğutucu kısmının terleme yapması durumunda pek çok arızaya neden olabilecek sorunlardan da bahsedebiliriz. Bölgesel beyaz eşya servisi olarak buzdolabınızda meydana gelen ve önemsemediğiniz bu tarz sorunların önemli olduğunu ve düzenli olarak bakım yaptırmanız gerektiğini hatırlatmak isteriz.",
    image:
      "/images/buzdolabi.png",
  },
  {
    id: "camasir-makinesi-servisi",
    title: "Çamaşır Makinesi Servisi",
    shortDescription:
      "Çamaşır makinesi servis olarak her türlü arıza giderme ve onarım hizmetlerinde garanti belgeli olarak hizmet vermekteyiz.",
    fullDescription:
      "Çamaşır makinesi servisi olarak her türlü arıza giderme ve onarım hizmetlerinde garanti belgeli olarak hizmet vermekteyiz. Sizler de Çamaşır makinesi ile ilgili yaşamış olduğunuz her sorun için vakit kaybetmeden firmamız ile iletişime geçerek makinenizin bakımını ve tamirini yanımızda profesyonel teknik ekibimize yaptırabilirsiniz. Firmamız ile iletişime geçer geçmez en kısa süre içerisinde sizlere teknik servis hizmeti verilmektedir. Eğer yerinde onarım yapılabilecek bir arıza ile karşı karşıya isek hemen evinizde Çamaşır makinenizin arıza giderme işlemi yapılmaktadır.",
    image:
      "/images/camasir-1.png",
  },
  {
    id: "kurutma-makinesi-servisi",
    title: "Kurutma Makinesi Servisi",
    shortDescription:
      "Servis olarak kurutma makineniz ile ilgili yaşamış olduğunuz tüm sorunlarınızda firmamız ile iletişime geçebilirsiniz.",
    fullDescription:
      "Servis olarak kurutma makineniz ile ilgili yaşamış olduğunuz tüm sorunlarınızda firmamız ile iletişime geçebilirsiniz. Kurutma makineleri her ne kadar her evde bulunmuyor gibi görünse de en sık tercih edilen beyaz eşya grubu içerisinde yer almaktadır. Sizlere günlük yaşantınızda büyük bir konfor sunan kurutma makineleri için düzenli olarak bakım yaptırmanız oldukça önemlidir. Cihazınızın kullanım süresini uzatmak ve daha yüksek verim alacak şekilde çalışmasını sağlamak için vakit kaybetmeden kurutma makinesi servisimizi arayabilirsiniz.",
    image:
      "/images/72327-camasir-kurutma-makinesi-tamiri.jpg",
  },
  {
    id: "bulasik-makinesi-servisi",
    title: "Bulaşık Makinesi Servisi",
    shortDescription:
      "Beyaz eşya servisimiz, gelişen teknolojiyi sunmuş olduğu tüm avantajlardan yararlanarak teknik servis hizmeti sunmaktadır.",
    fullDescription:
      "Beyaz eşya servisi olarak gelişen teknolojiyi sunmuş olduğu tüm avantajlardan yararlanarak teknik servis hizmeti sunmaktayız. Bizleri Türkiye'nin her yerinden arayabilir ve bulaşık makinesi arıza giderme ve bakım işlemleri için hizmet talebinde bulunabilirsiniz. Hem ev hem de iş yerleri ve ofisler için artık vazgeçilmez bir cihaz olarak tercih edilen bulaşık makinesi uzun sürel bir kullanım sunmaktadır. Ancak düzenli periyotlar ile bulaşık makinenizin bakımını yaptırmazsanız makineniz daha düşük performans ile çalışmaya başlayacaktır.",
    image:
      "/images/bulasik.png",
  },
  {
    id: "televizyon-servisi",
    title: "Televizyon Servisi",
    shortDescription:
      "Beyaz eşya servisi firmamız en hızlı ve en güvenli teknik servisi sunmanın haklı gururunu yaşamaktadır.",
    fullDescription:
      "Beyaz eşya servisi firmamız en hızlı ve en güvenli teknik servisi sunmanın haklı gururunu yaşamaktadır. Sizler de keyifli vakit geçirdiğiniz ve karşısında ayrılmak istemediğiniz televizyonlarınız ile ilgili yaşamış olduğunuz tüm sorunlarınız için profesyonel ekibimiz ile görüşebilirsiniz. Uzman kadromuz eşliğinde alacağınız televizyon servisi hizmetimiz hem bütçe dostu hem de en güvenilir teknik servis hizmeti özelliği taşımaktadır.",
    image:
      "/images/tv-servisi.jpg",
  },
  {
    id: "klima-servisi",
    title: "Klima Servisi",
    shortDescription:
      "Ev ve ofis tipi tüm klimalarınız için profesyonel olarak teknik servis hizmeti alabilirsiniz.",
    fullDescription:
      "Ev ve ofis tipi tüm klimalarınız için profesyonel olarak teknik servis hizmeti alabilirsiniz. Alanında uzman ve deneyimli klima bakımı ile ilgili teknik servis ekibimiz tüm markaların bakımını ve onarımını yapmaktadır. Güvenli ve en önemlisi de bütçe dostu bir klima teknik servis hizmeti almak için vakit kaybetmeden servisimiz ile iletişime geçebilirsiniz. Klima servisi olarak arıza giderme ve onarım işlemlerinde her zaman en hızlı ve en doğru çözümleri sizlere sunmak hedeflerimiz arasında yer almaktadır.",
    image:
      "/images/istanbul-klima-servisi.jpg",
  },
  {
    id: "kombi-servisi",
    title: "Kombi Servisi",
    shortDescription:
      "Beyaz Eşya Servisi seçimlerinizde cihazınızın kullanım ömrünün sağlıklı bir şekilde uzaması için firma tercihlerinizi dikkatli bir şekilde yapmalısınız.",
    fullDescription:
      "Beyaz Eşya Servisi seçimlerinizde cihazınızın kullanım ömrünün sağlıklı bir şekilde uzaması için firma tercihlerinizi dikkatli bir şekilde yapmalısınız. Kombi servisi olarak yapmış olduğumuz tüm işlemlerimiz müşteri memnuniyeti garantili olarak sunulmaktadır. Her mevsim evinizin daha konforlu bir hale dönüştürülmesi için gerekli olan kombi cihazınızı ani arıza oluşturmaması için düzenli olarak bakımını yaptırmalısınız.",
    image:
      "/images/00107-kombi-servisi.jpg",
  },
]


// Features data
export const features: Feature[] = [
  {
    id: "garantili-hizmet",
    title: "Garantili Hizmet",
    description: "Verdiğimiz hizmetler için garantili servis sağlıyoruz ve müşteri memnuniyetini ön planda tutuyoruz.",
    icon: "shield",
  },
  {
    id: "7-24-destek",
    title: "7/24 Destek",
    description: "Haftanın her günü ve günün her saati hizmetinizdeyiz. 7/24 telefonlarımızdan bize ulaşabilirsiniz.",
    icon: "clock",
  },
  {
    id: "5-bin+-mutlumusteri",
    title: "5 Bin+ Mutlu Müşteri",
    description: "20 yıllık yaygın teknik servis ağımızla verdiğimiz hizmetten memnun 5 binden fazla müşteri referansına ulaştık.",
    icon: "map-pin",
  },
]

// Brands data
export const brands: Brand[] = [
  { id: "arcelik", name: "Arçelik", logo: "/images/Arcelik-1.png" },
  { id: "beko", name: "Beko", logo: "/images/Beko-1.png" },
  { id: "bosch", name: "Bosch", logo: "/images/Bosch-1.png" },
  { id: "siemens", name: "Siemens", logo: "/images/Siemens-1.png" },
  { id: "samsung", name: "Samsung", logo: "/images/samsung-1.png" },
  { id: "lg", name: "LG", logo: "/images/LG-1.png" },
  { id: "vestel", name: "Vestel", logo: "/images/Vestel.png" },
  { id: "profilo", name: "Profilo", logo: "/images/profilo-1.png" },
  { id: "regal", name: "Regal", logo: "/images/regal-1.png" },
  { id: "altus", name: "Altus", logo: "/images/altus-logo.png" },
  { id: "franke", name: "Franke", logo: "/images/franke.png" },
  { id: "baymak", name: "Baymak", logo: "/images/Baymak_logo-1.png" },
  { id: "demirdokum", name: "Demirdöküm", logo: "/images/800px-Demirdokum_logo-1.png" },
  { id: "vaillant", name: "Vaillant", logo: "/images/Vaillant-1.png" },
  { id: "airfel", name: "Airfel", logo: "/images/airfel-logo2.png" },
  { id: "ferroli", name: "Ferroli", logo: "/images/Ferroli_logo-1.png" },
]

// Contact information
export const contactInfo: ContactInfo = {
  phone: "0322 504 14 84",
  email: "info@adanamerkezzservisi.com.tr",
  address: "Adana Merkez",
}

// Company information
export const companyInfo: CompanyInfo = {
  name: "Bölgesel Teknik Servis Hizmetleri",
  slogan: "Şirket politikamız her daim yenilikçi çözümler üretmektir",
  description:
    'Bölgesel hizmet platformu üzerinden beyaz eşya, kombi, klima, bulaşık makinesi, çamaşır makinesi ve televizyon gibi cihazlar için güvenilir ve hızlı teknik servis hizmetleri',
  yearEstablished: 2004,
  mission1:
    "Beyaz eşya, Kombi, Klima, Televizyon tamiri alanlarında 20 yılı aşkın süredir teknik servis hizmetleri sunmaktayız. Firmamız müşteri memnuniyeti misyonu ile sektöründe profesyonel ve güvenilir hizmet anlayışını dünden bugüne sürdürmektedir. Hizmet alanlarımız çamaşır makinesi servisi, bulaşık makinesi servisi, kurutma makinesi servisi, buzdolabı servisi, klima servisi, kombi servisi ve televizyon servisi olarak geniş bir yelpazeye sahiptir.",

  mission2: "Yıllardır değişmeyen sloganımız ”Memnuniyetiniz Önceliğimizdir” anlayışı ile çalışmalarımızı sürdürüyoruz. Bizi tercih eden mutlu müşterileri arasında katılarak işlerinizi profesyonel kişilere bırakmanın rahatlığını yaşayın."
}

