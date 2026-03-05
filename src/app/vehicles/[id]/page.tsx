"use client"

import { use, useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import { vehicles } from "@/data/vehicles"
import { CheckCircle2, Fuel, Gauge, Settings, ShieldCheck, MapPin, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

export default function VehicleDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)
    const vehicle = vehicles.find(v => v.id === id)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    if (!vehicle) {
        notFound()
    }

    return (
        <main className="min-h-screen">
            <Navbar />

            <section className="pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Breadcrumb / Back */}
                    <Link href="/vehicles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-12 transition-colors text-sm font-bold uppercase tracking-widest">
                        ← ARAÇ LISTESINE DÖN
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Gallery Side */}
                        <div className="space-y-6">
                            <div className="relative aspect-[16/10] rounded-[40px] overflow-hidden glass border border-white/10 group">
                                <img
                                    src={vehicle.images[currentImageIndex]}
                                    alt={vehicle.brand}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                {vehicle.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? vehicle.images.length - 1 : prev - 1))}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all z-10"
                                        >
                                            <ChevronLeft size={24} />
                                        </button>
                                        <button
                                            onClick={() => setCurrentImageIndex((prev) => (prev === vehicle.images.length - 1 ? 0 : prev + 1))}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all z-10"
                                        >
                                            <ChevronRight size={24} />
                                        </button>
                                    </>
                                )}
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                {vehicle.images.map((img, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => setCurrentImageIndex(idx)}
                                        className={`aspect-square rounded-2xl overflow-hidden glass border ${currentImageIndex === idx ? 'border-primary opacity-100' : 'border-white/5 opacity-50 hover:opacity-100'} cursor-pointer transition-all`}
                                    >
                                        <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Info Side */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="px-3 py-1 bg-primary text-white text-[10px] font-black rounded-full uppercase tracking-widest">
                                    {vehicle.category}
                                </span>
                                <div className="flex items-center gap-1.5 text-green-500 font-bold text-xs uppercase tracking-widest">
                                    <ShieldCheck size={16} /> EKSPERTİZ ONAYLI
                                </div>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black italic tracking-tighter uppercase mb-2 leading-tight">
                                {vehicle.brand}
                            </h1>
                            <h2 className="text-2xl md:text-3xl font-light text-muted-foreground mb-8">
                                {vehicle.model} <span className="text-white">| {vehicle.year}</span>
                            </h2>

                            <div className="text-3xl md:text-4xl font-black text-primary italic mb-12">
                                ₺{vehicle.price.toLocaleString('tr-TR')}
                            </div>

                            {/* Quick Specs */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                                <div className="glass p-5 rounded-2xl flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary"><Gauge size={24} /></div>
                                    <div>
                                        <h5 className="text-[10px] font-black text-muted-foreground uppercase">Kilometre</h5>
                                        <p className="font-bold">{vehicle.mileage.toLocaleString('tr-TR')} KM</p>
                                    </div>
                                </div>
                                <div className="glass p-5 rounded-2xl flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary"><Fuel size={24} /></div>
                                    <div>
                                        <h5 className="text-[10px] font-black text-muted-foreground uppercase">Yakıt</h5>
                                        <p className="font-bold">{vehicle.fuelType}</p>
                                    </div>
                                </div>
                                <div className="glass p-5 rounded-2xl flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary"><Settings size={24} /></div>
                                    <div>
                                        <h5 className="text-[10px] font-black text-muted-foreground uppercase">Vites</h5>
                                        <p className="font-bold">{vehicle.transmission}</p>
                                    </div>
                                </div>
                                <div className="glass p-5 rounded-2xl flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary"><MapPin size={24} /></div>
                                    <div>
                                        <h5 className="text-[10px] font-black text-muted-foreground uppercase">Konum</h5>
                                        <p className="font-bold">Maltepe</p>
                                    </div>
                                </div>
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <a
                                    href={`https://wa.me/905415180015?text=${vehicle.brand}%20${vehicle.model}%20aracı%20hakkında%20bilgi%20almak%20istiyorum.`}
                                    target="_blank"
                                    className="flex-1 bg-primary hover:bg-white hover:text-black py-5 rounded-full font-black text-center transition-all flex items-center justify-center gap-3 uppercase tracking-widest shadow-2xl shadow-primary/20"
                                >
                                    <MessageSquare size={20} /> WHATSAPP İLE SORUN
                                </a>
                                <button className="flex-1 glass py-5 rounded-full font-black text-center hover:bg-white/10 transition-all uppercase tracking-widest">
                                    TEKLİF ALIN
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-24 grid lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-2 space-y-12">
                            <section>
                                <h3 className="text-2xl font-black italic mb-8 border-l-4 border-primary pl-4 uppercase">ARAÇ AÇIKLAMASI</h3>
                                <p className="text-muted-foreground leading-loose text-lg">
                                    {vehicle.description} <br /><br />
                                    CARMEGA ayrıcalığıyla satışa sunulan bu özel aracımız, tüm kontrollerden başarıyla geçmiş olup satışa hazırdır. Araçta hata, boya ve değişen durumu için showroomumuzda detaylı ekspertiz raporu inceleyebilirsiniz.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-black italic mb-8 border-l-4 border-primary pl-4 uppercase">ÖNE ÇIKAN ÖZELLİKLER</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {vehicle.features.map(feature => (
                                        <div key={feature} className="flex items-center gap-3 glass p-4 rounded-xl border border-white/5 hover:border-primary/20 transition-all">
                                            <CheckCircle2 size={20} className="text-primary" />
                                            <span className="font-medium text-sm">{feature}</span>
                                        </div>
                                    ))}
                                    <div className="flex items-center gap-3 glass p-4 rounded-xl border border-white/5">
                                        <CheckCircle2 size={20} className="text-primary" />
                                        <span className="font-medium text-sm">Hayalet Gösterge</span>
                                    </div>
                                    <div className="flex items-center gap-3 glass p-4 rounded-xl border border-white/5">
                                        <CheckCircle2 size={20} className="text-primary" />
                                        <span className="font-medium text-sm">Geri Görüş Kamerası</span>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div className="lg:col-span-1">
                            <aside className="glass p-8 rounded-3xl sticky top-32 border border-white/10">
                                <h4 className="text-lg font-black italic mb-6">EKSPERTİZ DURUMU</h4>
                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                                        <span className="text-sm text-muted-foreground">Boyasız Parçalar</span>
                                        <span className="text-xs font-black bg-green-500/10 text-green-500 px-3 py-1 rounded-full">TAMAMI</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                                        <span className="text-sm text-muted-foreground">Değişen Parçalar</span>
                                        <span className="text-xs font-black bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full">HİÇBİRİ</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3">
                                        <span className="text-sm text-muted-foreground">Tramer Kaydı</span>
                                        <span className="text-xs font-black bg-red-500/10 text-red-500 px-3 py-1 rounded-full">YOK</span>
                                    </div>
                                </div>
                                <div className="p-4 bg-primary/5 rounded-2xl border border-primary/20 text-xs text-center font-medium leading-relaxed italic">
                                    "Bu araç CARMEGA tarafından 1000 KM / 3 Ay Mekanik Garanti kapsamındadır."
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    )
}
