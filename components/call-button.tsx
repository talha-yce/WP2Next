import { Phone } from "lucide-react"
import { contactInfo } from "@/lib/data"

export default function CallButton() {
  return (
    <a
      href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-[var(--primary-color)] text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors"
    >
      <Phone className="mr-2" />
      <span>Tıkla Hemen Ara</span>
    </a>
  )
}

