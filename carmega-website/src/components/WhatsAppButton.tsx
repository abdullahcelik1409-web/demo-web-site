"use client"

import { MessageCircle } from "lucide-react"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function WhatsAppButton() {
    const buttonRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(buttonRef.current,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, delay: 2, ease: "elastic.out(1, 0.5)" }
        )
    }, [])

    return (
        <a
            ref={buttonRef}
            href="https://wa.me/905415180015"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
            aria-label="WhatsApp ile iletişime geç"
        >
            <MessageCircle size={32} />
        </a>
    )
}
