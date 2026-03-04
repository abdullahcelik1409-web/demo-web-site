"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, Variants } from "framer-motion"
import { ChevronRight, MessageCircle } from "lucide-react"
import Link from "next/link"

// Subtle text reveal animation variant
const textRevealVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15 + 0.3,
            duration: 1,
            ease: [0.215, 0.61, 0.355, 1],
        },
    }),
}

const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut", delay: 1.2 }
    }
}

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    // Parallax effect on scroll
    const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
    const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0])

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-background">
            {/* Background Image with Parallax & Premium Overlays */}
            <motion.div
                style={{ y: yParallax, opacity: opacityFade }}
                className="absolute inset-0 z-0 scale-105"
            >
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2.5, ease: "easeOut" }}
                    className="w-full h-full relative"
                >
                    <img
                        src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop"
                        alt="Premium Luxury Car"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Dark Premium Gradient Overhead */}
                    <div className="absolute inset-0 bg-background/80 md:bg-background/60" />
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
                </motion.div>
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
                <div className="max-w-2xl pt-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="inline-block py-1 px-4 mb-8 border border-white/10 bg-white/5 backdrop-blur-md rounded-none text-xs font-medium tracking-widest text-muted-foreground uppercase"
                    >
                        İstanbul'un En Prestijli Galerisi
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black mb-8 leading-[1.1] tracking-tighter text-white">
                        <motion.div custom={0} variants={textRevealVariants} initial="hidden" animate="visible">
                            Sınırları
                        </motion.div>
                        <motion.div custom={1} variants={textRevealVariants} initial="hidden" animate="visible" className="flex items-center gap-4">
                            Aşan <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-200">Performans</span>
                        </motion.div>
                        <motion.div custom={2} variants={textRevealVariants} initial="hidden" animate="visible" className="text-muted-foreground/80">
                            ve Zarafet.
                        </motion.div>
                    </h1>

                    <motion.p
                        custom={3} variants={textRevealVariants} initial="hidden" animate="visible"
                        className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-lg font-light"
                    >
                        CARMEGA ile yolların hakimi olun. Lüks, donanım ve ikonik tasarımları tek bir çatı altında, en premium hizmetle birleştiriyoruz.
                    </motion.p>

                    <motion.div
                        variants={fadeUpVariants} initial="hidden" animate="visible"
                        className="flex flex-col sm:flex-row gap-6"
                    >
                        <Link
                            href="/vehicles"
                            className="group relative flex items-center justify-center gap-2 bg-white text-background px-8 py-4 rounded-none font-bold uppercase tracking-wider overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Koleksiyonu İncele
                                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-accent transition-transform duration-500 ease-out" />
                        </Link>

                        <Link
                            href="https://wa.me/905415180015"
                            target="_blank"
                            className="group flex items-center justify-center gap-3 px-8 py-4 rounded-none border border-white/10 text-white font-medium hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
                        >
                            <MessageCircle size={18} className="text-accent group-hover:scale-110 transition-transform" />
                            <span>Özel Randevu Al</span>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Premium Stats Bar - Glass Style */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
                className="absolute bottom-0 left-0 w-full z-20 border-t border-white/5 bg-background/40 backdrop-blur-xl"
            >
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-white/5">
                        <div className="px-4 text-center md:text-left">
                            <div className="text-3xl md:text-4xl font-heading font-black text-white mb-1"><span className="text-accent">500</span>+</div>
                            <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">Teslim Edilen Araç</div>
                        </div>
                        <div className="px-4 text-center md:text-left">
                            <div className="text-3xl md:text-4xl font-heading font-black text-white mb-1"><span className="text-accent">%</span>100</div>
                            <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">Müşteri Memnuniyeti</div>
                        </div>
                        <div className="px-4 text-center md:text-left">
                            <div className="text-3xl md:text-4xl font-heading font-black text-white mb-1"><span className="text-accent">15</span> Yıl</div>
                            <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">Sektör Tecrübesi</div>
                        </div>
                        <div className="px-4 text-center md:text-left">
                            <div className="text-3xl md:text-4xl font-heading font-black text-white mb-1">7<span className="text-accent">/</span>24</div>
                            <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">Özel Asistan</div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
