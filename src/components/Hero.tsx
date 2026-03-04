"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ChevronRight, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out" } })

            tl.from(contentRef.current?.children || [], {
                x: -100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2
            })
                .from(imageRef.current, {
                    scale: 1.1,
                    opacity: 0,
                    duration: 2,
                }, "-=1")
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden pt-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    ref={imageRef}
                    src="https://images.unsplash.com/photo-1549399542-7e3f8b79c340?q=80&w=2000&auto=format&fit=crop"
                    alt="Premium Luxury Car"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div ref={contentRef} className="max-w-2xl">
                    <span className="inline-block py-1 px-4 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm font-semibold mb-6">
                        İstanbul'un En Prestijli Galerisi
                    </span>
                    <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
                        Premium <br />
                        <span className="text-primary italic">Araçların</span> <br />
                        Yeni Adresi
                    </h1>
                    <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                        CARMEGA ile güvenilir ve kaliteli araçlara ulaşın. Lüks, konfor ve güveni bir arada sunan geniş araç yelpazemizi keşfedin.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/vehicles"
                            className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 group"
                        >
                            Araçları İncele
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="https://wa.me/905415180015"
                            target="_blank"
                            className="flex items-center justify-center gap-2 glass text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
                        >
                            <MessageCircle size={20} className="text-primary" />
                            WhatsApp ile İletişime Geç
                        </Link>
                    </div>
                </div>
            </div>

            {/* Stats Overlay */}
            <div className="absolute bottom-12 left-0 w-full z-10 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="border-l border-primary/50 pl-4 py-2">
                        <div className="text-3xl font-black italic">500+</div>
                        <div className="text-xs uppercase tracking-widest text-muted-foreground">Teslim Edilen Araç</div>
                    </div>
                    <div className="border-l border-primary/50 pl-4 py-2">
                        <div className="text-3xl font-black italic">100%</div>
                        <div className="text-xs uppercase tracking-widest text-muted-foreground">Müşteri Memnuniyeti</div>
                    </div>
                    <div className="border-l border-primary/50 pl-4 py-2">
                        <div className="text-3xl font-black italic">15 Yıl</div>
                        <div className="text-xs uppercase tracking-widest text-muted-foreground">Sektör Tecrübesi</div>
                    </div>
                    <div className="border-l border-primary/50 pl-4 py-2 invisible md:visible">
                        <div className="text-3xl font-black italic">7/24</div>
                        <div className="text-xs uppercase tracking-widest text-muted-foreground">Kesintisiz İletişim</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
