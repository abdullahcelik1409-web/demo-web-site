import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import FeaturedVehicles from "@/components/FeaturedVehicles"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedVehicles />

      {/* Trust Section */}
      <section className="py-24 glass border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-5xl font-black text-primary mb-4 italic">72+</h3>
            <p className="text-lg font-bold mb-2">Nokta Ekspertiz</p>
            <p className="text-muted-foreground text-sm">Satışa sunduğumuz tüm araçlar kapsamlı ekspertiz kontrolünden geçmektedir.</p>
          </div>
          <div>
            <h3 className="text-5xl font-black text-primary mb-4 italic">VİP</h3>
            <p className="text-lg font-bold mb-2">Showroom Deneyimi</p>
            <p className="text-muted-foreground text-sm">İdealtepe'deki showroomumuzda araçlarımızı konforlu bir ortamda inceleyebilirsiniz.</p>
          </div>
          <div>
            <h3 className="text-5xl font-black text-primary mb-4 italic">%100</h3>
            <p className="text-lg font-bold mb-2">Güvenli Ticaret</p>
            <p className="text-muted-foreground text-sm">Noter ve banka işlemlerinde şeffaf ve güvenilir süreç yönetimi.</p>
          </div>
        </div>
      </section>

      {/* Sell Your Car CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-3 translate-y-24" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 italic tracking-tight">ARACINIZI <span className="text-primary italic">DEĞERİNDE</span> SATIN</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Aracınızın bilgilerini bize gönderin, profesyonel ekibimiz en kısa sürede size en iyi fiyat teklifini sunsun.
          </p>
          <a
            href="/sell-car"
            className="inline-block bg-white text-black px-12 py-5 rounded-full font-black text-lg hover:bg-primary hover:text-white transition-all hover:scale-105 active:scale-95"
          >
            TEKLİF ALIN
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
