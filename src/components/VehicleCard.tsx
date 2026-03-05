"use client"

import { Vehicle } from "@/data/vehicles"
import { Fuel, Gauge, Settings, ShieldCheck } from "lucide-react"
import Link from "next/link"

interface VehicleCardProps {
    vehicle: Vehicle
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
    return (
        <div className="group relative bg-card border border-white/5 rounded-none overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] flex flex-col h-full">
            {/* Image Container with precise 16/10 aspect */}
            <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900 w-full">
                <img
                    src={vehicle.images[0]}
                    alt={`${vehicle.brand} ${vehicle.model}`}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ease-[cubic-bezier(0.25,1,0.5,1)]"
                />

                {/* Overlay Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1.5 bg-background/80 backdrop-blur-md text-white text-[10px] font-bold rounded-none border border-white/10 uppercase tracking-widest">
                        {vehicle.category}
                    </span>
                </div>
            </div>

            {/* Details Section */}
            <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10 bg-background group-hover:bg-zinc-900/40 transition-colors duration-500 border-t border-white/5">
                <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                        <ShieldCheck size={14} className="text-accent" />
                        <span className="text-[10px] text-muted-foreground uppercase font-semibold tracking-widest">Ekspertiz Garantili</span>
                    </div>
                </div>

                <h3 className="text-xl md:text-2xl font-heading font-bold mb-1 text-white group-hover:text-accent transition-colors duration-300">
                    {vehicle.brand} <span className="font-light">{vehicle.model}</span>
                </h3>

                <div className="text-xl font-heading font-medium text-white mb-8 group-hover:text-amber-100 transition-colors">
                    ₺{vehicle.price.toLocaleString('tr-TR')}
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-8 mt-auto pt-6 border-t border-white/5">
                    <div className="flex items-center gap-3 text-muted-foreground group-hover:text-white/80 transition-colors">
                        <Gauge size={16} className="text-white/40" />
                        <span className="text-xs font-medium tracking-wide">{vehicle.year}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground group-hover:text-white/80 transition-colors">
                        <Fuel size={16} className="text-white/40" />
                        <span className="text-xs font-medium tracking-wide">{vehicle.fuelType}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground group-hover:text-white/80 transition-colors">
                        <Settings size={16} className="text-white/40" />
                        <span className="text-xs font-medium tracking-wide">{vehicle.transmission}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground group-hover:text-white/80 transition-colors">
                        <CarIcon size={16} className="text-white/40" />
                        <span className="text-xs font-medium tracking-wide">{vehicle.mileage.toLocaleString('tr-TR')} KM</span>
                    </div>
                </div>

                <Link
                    href={`/vehicles/${vehicle.id}`}
                    className="relative block w-full text-center py-4 bg-white/5 border border-white/10 hover:bg-white hover:text-black rounded-none font-bold transition-all duration-300 text-xs uppercase tracking-widest overflow-hidden group/btn"
                >
                    <span className="relative z-10">Detayları İncele</span>
                </Link>
            </div>
        </div>
    )
}

function CarIcon({ size, className }: { size: number, className?: string }) {
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
            className={className}
        >
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
            <circle cx="7" cy="17" r="2" />
            <path d="M9 17h6" />
            <circle cx="17" cy="17" r="2" />
        </svg>
    )
}
