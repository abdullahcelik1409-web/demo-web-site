"use client"

import { Vehicle } from "@/data/vehicles"
import { Fuel, Gauge, Settings, ShieldCheck } from "lucide-react"
import Link from "next/link"

interface VehicleCardProps {
    vehicle: Vehicle
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
    return (
        <div className="group glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500">
            {/* Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden">
                <img
                    src={vehicle.image}
                    alt={`${vehicle.brand} ${vehicle.model}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/10 uppercase tracking-wider">
                        {vehicle.category}
                    </span>
                </div>
                <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-sm font-bold rounded-lg shadow-xl">
                        ₺{vehicle.price.toLocaleString('tr-TR')}
                    </span>
                </div>
            </div>

            {/* Details */}
            <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                    <ShieldCheck size={16} className="text-primary" />
                    <span className="text-xs text-muted-foreground uppercase font-semibold tracking-widest">Ekspertiz Garantili</span>
                </div>

                <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors">
                    {vehicle.brand} <span className="font-light">{vehicle.model}</span>
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Gauge size={18} />
                        <span className="text-sm font-medium">{vehicle.year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Fuel size={18} />
                        <span className="text-sm font-medium">{vehicle.fuelType}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Settings size={18} />
                        <span className="text-sm font-medium">{vehicle.transmission}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <CarIcon size={18} />
                        <span className="text-sm font-medium">{vehicle.mileage.toLocaleString('tr-TR')} KM</span>
                    </div>
                </div>

                <Link
                    href={`/vehicles/${vehicle.id}`}
                    className="block w-full text-center py-3 bg-secondary hover:bg-white hover:text-black rounded-xl font-bold transition-all text-sm"
                >
                    Detayları Gör
                </Link>
            </div>
        </div>
    )
}

function CarIcon({ size }: { size: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
            <circle cx="7" cy="17" r="2" />
            <path d="M9 17h6" />
            <circle cx="17" cy="17" r="2" />
        </svg>
    )
}
