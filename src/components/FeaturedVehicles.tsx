"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { vehicles } from "@/data/vehicles"
import VehicleCard from "./VehicleCard"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

export default function FeaturedVehicles() {
    const sectionRef = useRef<HTMLElement>(null)
    const headerRef = useRef<HTMLDivElement>(null)
    const cardsRef = useRef<HTMLDivElement[]>([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header Animation
            gsap.from(headerRef.current, {
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            })

            // Cards Staggered Animation
            gsap.from(cardsRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                y: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-black mb-6 italic tracking-tighter">
                            ÖNE ÇIKAN <span className="text-primary">ARAÇLAR</span>
                        </h2>
                        <p className="text-muted-foreground">
                            En yeni ve en özel araçlarımızdan oluşan seçkimizi keşfedin. Her biri titizlikle seçilmiş premium modeller.
                        </p>
                    </div>
                    <Link
                        href="/vehicles"
                        className="text-primary font-bold hover:underline underline-offset-8 decoration-2 flex items-center gap-2"
                    >
                        Tüm Araçları Gör
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {vehicles.slice(0, 3).map((vehicle, index) => (
                        <div
                            key={vehicle.id}
                            ref={(el) => { if (el) cardsRef.current[index] = el }}
                        >
                            <VehicleCard vehicle={vehicle} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
