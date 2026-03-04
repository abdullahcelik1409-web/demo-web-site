"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import { Car, Camera, Send, FileText } from "lucide-react"

export default function SellCar() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert("Araç bilgileriniz başarıyla alındı. Ekspertiz ekibimiz en kısa sürede sizi arayacaktır.")
    }

    return (
        <main className="min-h-screen">
            <Navbar />

            <section className="pt-40 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-start">
                        {/* Content Side */}
                        <div>
                            <span className="px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary text-xs font-black rounded-full uppercase tracking-widest mb-6 inline-block">
                                Hızlı & Güvenli Süreç
                            </span>
                            <h1 className="text-5xl md:text-7xl font-black mb-10 italic tracking-tighter uppercase leading-[0.9]">
                                ARACINIZI <br /> <span className="text-primary">DEĞERINDE</span> <br /> SATIN
                            </h1>
                            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                                CARMEGA profesyonelliği ile aracınızı nakite çevirin. Formu doldurun, aracınız için en yüksek piyasa değerini hesaplayalım.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: <FileText size={24} />, title: "Bilgileri Doldurun", desc: "Araç detaylarını form üzerinden eksiksiz iletin." },
                                    { icon: <Car size={24} />, title: "Ön Değerleme", desc: "Ekibimiz piyasa verilerine göre fiyatınızı çıkarsın." },
                                    { icon: <Camera size={24} />, title: "Ücretsiz Ekspertiz", desc: "Randevu alalım, aracınızı showroomumuzda inceleyelim." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-6 p-6 glass rounded-2xl border border-white/5 hover:border-primary/20 transition-all">
                                        <div className="text-primary shrink-0">{item.icon}</div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="glass p-8 md:p-12 rounded-[40px] border border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[100px]" />

                            <h3 className="text-2xl font-black mb-10 italic tracking-tighter">TEKLİF FORMU</h3>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Marka</label>
                                        <input type="text" placeholder="Örn: Mercedes-Benz" required className="w-full bg-secondary/50 border border-white/5 rounded-2xl px-6 py-4 focus:bg-secondary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Model</label>
                                        <input type="text" placeholder="Örn: G 63 AMG" required className="w-full bg-secondary/50 border border-white/5 rounded-2xl px-6 py-4 focus:bg-secondary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Model Yılı</label>
                                        <input type="number" placeholder="2023" required className="w-full bg-secondary/50 border border-white/5 rounded-2xl px-6 py-4 focus:bg-secondary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Kilometre</label>
                                        <input type="number" placeholder="5000" required className="w-full bg-secondary/50 border border-white/5 rounded-2xl px-6 py-4 focus:bg-secondary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">İletişim Numarası</label>
                                    <input type="tel" placeholder="+90 5XX XXX XX XX" required className="w-full bg-secondary/50 border border-white/5 rounded-2xl px-6 py-4 focus:bg-secondary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Araç Fotoğrafları</label>
                                    <div className="w-full border-2 border-dashed border-white/10 rounded-2xl p-8 text-center hover:border-primary/50 transition-colors group cursor-pointer">
                                        <Camera className="mx-auto mb-4 text-muted-foreground group-hover:text-primary transition-colors" size={32} />
                                        <p className="text-sm text-muted-foreground">Fotoğrafları buraya sürükleyin veya <span className="text-primary font-bold">tıklayın</span></p>
                                        <input type="file" multiple className="hidden" />
                                    </div>
                                </div>

                                <button type="submit" className="w-full bg-primary hover:bg-white hover:text-black text-white font-black py-5 rounded-2xl transition-all flex items-center justify-center gap-3 uppercase tracking-[0.2em] shadow-2xl shadow-primary/20">
                                    DEĞERLEME TALEBİ GÖNDER <Send size={20} />
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
