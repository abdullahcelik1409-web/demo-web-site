"use client"

import { useRef } from "react"
import { motion, useInView, Variants } from "framer-motion"
import { vehicles } from "@/data/vehicles"
import VehicleCard from "./VehicleCard"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function FeaturedVehicles() {
    const sectionRef = useRef<HTMLElement>(null)
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    }

    return (
        <section ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
            {/* Subtle Grid Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
                >
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-px w-12 bg-accent" />
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Özel Koleksiyon</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tighter text-white">
                            ÖNE ÇIKAN <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-200 italic">ARAÇLAR</span>
                        </h2>
                    </div>

                    <Link
                        href="/vehicles"
                        className="group flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-white transition-colors duration-300 pb-2 border-b border-transparent hover:border-accent"
                    >
                        Tüm Koleksiyonu Gör
                        <ArrowRight size={16} className="text-accent group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {vehicles.slice(0, 3).map((vehicle) => (
                        <motion.div key={vehicle.id} variants={itemVariants} className="h-full">
                            <VehicleCard vehicle={vehicle} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
