"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { Menu, X, CarFront } from "lucide-react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const navRef = useRef(null)

    useEffect(() => {
        gsap.from(navRef.current, {
            y: -20,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.2
        })
    }, [])

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5 transition-all duration-300"
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo Area */}
                <Link href="/" className="flex items-center gap-3 group">
                    <CarFront className="text-white w-7 h-7 group-hover:text-accent transition-colors duration-500" />
                    <span className="text-2xl font-bold tracking-widest text-white uppercase font-heading">
                        CAR<span className="text-accent">MEGA</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors duration-300">Ana Sayfa</Link>
                    <Link href="/vehicles" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors duration-300">Araçlar</Link>
                    <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors duration-300">Hakkımızda</Link>
                    <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors duration-300">İletişim</Link>

                    {/* Premium CTA Button */}
                    <Link href="/sell-car"
                        className="px-6 py-2.5 bg-accent text-background text-sm font-semibold rounded-full hover:bg-white hover:text-background transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        Aracınızı Satın
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={28} className="text-accent" /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#09090b] border-t border-white/5 w-full flex flex-col p-8 gap-6 absolute top-20 left-0 z-50 animate-in slide-in-from-top-4 fade-in duration-300 origin-top">
                    <Link href="/" onClick={toggleMenu} className="text-xl font-heading text-white hover:text-accent transition-colors">Ana Sayfa</Link>
                    <Link href="/vehicles" onClick={toggleMenu} className="text-xl font-heading text-white hover:text-accent transition-colors">Araçlar</Link>
                    <Link href="/about" onClick={toggleMenu} className="text-xl font-heading text-white hover:text-accent transition-colors">Hakkımızda</Link>
                    <Link href="/contact" onClick={toggleMenu} className="text-xl font-heading text-white hover:text-accent transition-colors">İletişim</Link>
                    <div className="h-px w-full bg-white/10 my-2" />
                    <Link href="/sell-car" onClick={toggleMenu} className="w-full py-4 bg-accent text-background text-center rounded-full font-bold uppercase tracking-wider hover:bg-white transition-colors">
                        Aracınızı Satın
                    </Link>
                </div>
            )}
        </nav>
    )
}
