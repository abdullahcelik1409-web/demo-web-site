import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import { Shield, Award, Users, MapPin } from "lucide-react"

export default function About() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Page Header */}
            <section className="pt-40 pb-20 bg-gradient-to-b from-primary/10 to-transparent">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 italic tracking-tighter uppercase">HAKKIMIZDA</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        15 yılı aşkın tecrübemizle İstanbul'un kalbinde, premium araçlar ve üstün hizmet anlayışıyla otomotiv dünyasına değer katıyoruz.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative aspect-video rounded-3xl overflow-hidden glass border border-white/5">
                        <img
                            src="https://images.unsplash.com/photo-1562141989-c5c79ac8f576?q=80&w=1000&auto=format&fit=crop"
                            alt="Showroom"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-black mb-8 italic">GÜVEN VE KALİTE İLE <span className="text-primary italic">15 YIL</span></h2>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            CARMEGA olarak, müşterilerimize sadece bir araç değil, bir yaşam tarzı ve güven sunuyoruz. Maltepe İdealtepe'de yer alan premium showroomumuzda, her biri titizlikle seçilmiş araçlarımızı sizlerin beğenisine sunuyoruz.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="flex gap-4">
                                <Shield className="text-primary shrink-0" size={32} />
                                <div>
                                    <h4 className="font-bold mb-1 uppercase text-xs tracking-widest">Tam Güven</h4>
                                    <p className="text-sm text-muted-foreground">Ekspertiz garantili şeffaf süreç.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Award className="text-primary shrink-0" size={32} />
                                <div>
                                    <h4 className="font-bold mb-1 uppercase text-xs tracking-widest">Premium Kalite</h4>
                                    <p className="text-sm text-muted-foreground">Sektörün en seçkin modelleri.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className="py-24 glass border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-black mb-12 italic">BİZİ <span className="text-primary italic">ZİYARET</span> EDİN</h2>
                    <div className="w-full h-[450px] rounded-3xl overflow-hidden glass border border-white/10 mb-8">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.978648115682!2d29.1245043!3d40.9272305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac588f9828e83%3A0x6b779a9f24e38c9!2sCARMEGA!5e0!3m2!1str!2str!4v1709400000000!5m2!1str!2str"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <p className="text-muted-foreground flex items-center justify-center gap-2">
                        <MapPin size={20} className="text-primary" />
                        İdealtepe, Dik Sk. Tepe Plaza No:1 D:B, 34841 Maltepe / İstanbul
                    </p>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    )
}
