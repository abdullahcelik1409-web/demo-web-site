"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { Menu, X, Car } from "lucide-react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const navRef = useRef(null)
    const menuRef = useRef(null)

    useEffect(() => {
        gsap.from(navRef.current, {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: "power4.out"
        })
    }, [])

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 w-full z-40 glass border-b border-white/5"
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <Car className="text-primary w-8 h-8 group-hover:scale-110 transition-transform" />
                    <span className="text-2xl font-bold tracking-tighter text-white">CAR<span className="text-primary">MEGA</span></span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Ana Sayfa</Link>
                    <Link href="/vehicles" className="text-sm font-medium hover:text-primary transition-colors">Araçlar</Link>
                    <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">Hakkımızda</Link>
                    <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">İletişim</Link>
                    <Link href="/sell-car" className="px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary/90 transition-all active:scale-95 shadow-lg shadow-primary/20">
                        Aracınızı Satın
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={toggleMenu}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden glass border-t border-white/5 w-full flex flex-col p-6 gap-6 absolute top-20 left-0 animate-in slide-in-from-top duration-300">
                    <Link href="/" onClick={toggleMenu} className="text-lg font-medium">Ana Sayfa</Link>
                    <Link href="/vehicles" onClick={toggleMenu} className="text-lg font-medium">Araçlar</Link>
                    <Link href="/about" onClick={toggleMenu} className="text-lg font-medium">Hakkımızda</Link>
                    <Link href="/contact" onClick={toggleMenu} className="text-lg font-medium">İletişim</Link>
                    <Link href="/sell-car" onClick={toggleMenu} className="w-full py-4 bg-primary text-white text-center rounded-xl font-bold">
                        Aracınızı Satın
                    </Link>
                </div>
            )}
        </nav>
    )
}
