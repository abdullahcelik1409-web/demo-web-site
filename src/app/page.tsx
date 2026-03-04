"use client"

import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import FeaturedVehicles from "@/components/FeaturedVehicles"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedVehicles />

      {/* Trust Section - Premium Dark Glass */}
      <section className="py-32 relative overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-background to-background pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center group"
          >
            <div className="text-6xl md:text-7xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-br from-accent to-amber-200 mb-6 italic tracking-tighter group-hover:scale-110 transition-transform duration-500">72+</div>
            <p className="text-xl font-heading font-bold mb-3 text-white uppercase tracking-wider">Nokta Ekspertiz</p>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">Satışa sunduğumuz tüm araçlar şeffaf, bağımsız ve kapsamlı ekspertiz kontrolünden geçmektedir.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center group"
          >
            <div className="text-6xl md:text-7xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500 mb-6 italic tracking-tighter group-hover:scale-110 transition-transform duration-500">VİP</div>
            <p className="text-xl font-heading font-bold mb-3 text-white uppercase tracking-wider">Showroom Deneyimi</p>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">İdealtepe'deki butik showroomumuzda araçlarımızı premium bir atmosferde, konforla inceleyebilirsiniz.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center group"
          >
            <div className="text-6xl md:text-7xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-br from-accent to-amber-200 mb-6 italic tracking-tighter group-hover:scale-110 transition-transform duration-500">%100</div>
            <p className="text-xl font-heading font-bold mb-3 text-white uppercase tracking-wider">Güvenli Ticaret</p>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">Şeffaf operasyon, kolay belgelendirme ve güvenilir banka işlemleriyle pürüzsüz ruhsat devri.</p>
          </motion.div>
        </div>
      </section>

      {/* Sell Your Car CTA - High Contrast Luxury */}
      <section className="py-32 relative overflow-hidden bg-background">
        {/* Abstract Geometry */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 blur-[120px] rounded-[100%] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-heading font-black mb-8 tracking-tighter text-white uppercase flex flex-col items-center gap-2">
              <span>Aracınızı</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-200 italic">Değerinde Satın</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-14 font-light max-w-2xl mx-auto leading-relaxed">
              Aracınızın bilgilerini uzman ekibimize iletin. Piyasa analizi ile en doğru fiyatı belirleyip, anında nakit alım avantajı sunalım.
            </p>

            <a
              href="/sell-car"
              className="group relative inline-flex justify-center items-center bg-white text-background px-12 py-5 rounded-none font-bold text-sm tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:text-white"
            >
              <span className="relative z-10">Premium Teklif Alın</span>
              <div className="absolute inset-0 bg-accent translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
