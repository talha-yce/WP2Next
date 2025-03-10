import { features } from "@/lib/data"
import { Shield, Clock, MapPin } from "lucide-react"

export default function FeaturesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "shield":
        return <Shield className="w-10 h-10 text-[var(--primary-color)]" />
      case "clock":
        return <Clock className="w-10 h-10 text-[var(--primary-color)]" />
      case "map-pin":
        return <MapPin className="w-10 h-10 text-[var(--primary-color)]" />
      default:
        return null
    }
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center text-center p-6">
              {getIcon(feature.icon)}
              <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

