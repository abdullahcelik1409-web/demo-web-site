"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import { Phone, Mail, MapPin, MessageSquare, Send } from "lucide-react"

export default function Contact() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert("Mesajınız gönderildi. En kısa sürede size dönüş yapacağız.")
    }

    return (
        <main className="min-h-screen">
            <Navbar />

            <section className="pt-40 pb-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20">
                        {/* Contact Info */}
                        <div>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 italic tracking-tighter uppercase">İLETİŞİM</h1>
                            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                                Premium araçlarımız hakkında bilgi almak veya bir test sürüşü planlamak için bizimle iletişime geçin.
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-6 items-start group">
                                    <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                                        <Phone size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Bizi Arayın</h4>
                                        <p className="text-xl md:text-2xl font-black group-hover:text-primary transition-colors">+90 541 518 00 15</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start group">
                                    <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                                        <Mail size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">E-posta Gönderin</h4>
                                        <p className="text-lg md:text-2xl font-black group-hover:text-primary transition-colors break-all md:break-normal">info@carmega.com.tr</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start group">
                                    <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                                        <MapPin size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Showroom Adresi</h4>
                                        <p className="text-lg font-bold leading-relaxed">İdealtepe, Dik Sk. Tepe Plaza No:1 D:B, Maltepe / İstanbul</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="glass p-8 md:p-12 rounded-3xl border border-white/10">
                            <h3 className="text-2xl font-black mb-8 italic underline decoration-primary decoration-4 underline-offset-8">BİZE MESAJ GÖNDERİN</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Ad Soyad</label>
                                        <input type="text" required className="w-full bg-secondary border border-white/5 rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary outline-none transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Telefon</label>
                                        <input type="tel" required className="w-full bg-secondary border border-white/5 rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary outline-none transition-all" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">E-posta</label>
                                    <input type="email" className="w-full bg-secondary border border-white/5 rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Mesajınız</label>
                                    <textarea rows={4} required className="w-full bg-secondary border border-white/5 rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-primary hover:bg-white hover:text-black text-white font-black py-5 rounded-xl transition-all flex items-center justify-center gap-3 uppercase tracking-widest">
                                    GÖNDER <Send size={20} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    )
}
