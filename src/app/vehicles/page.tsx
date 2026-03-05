"use client"

import { useState, useMemo } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import VehicleCard from "@/components/VehicleCard"
import { vehicles as allVehicles } from "@/data/vehicles"
import { Filter, Search, RotateCcw } from "lucide-react"

export default function VehicleList() {
    const [search, setSearch] = useState("")
    const [selectedBrand, setSelectedBrand] = useState("Tümü")
    const [selectedFuel, setSelectedFuel] = useState("Tümü")
    const [selectedTransmission, setSelectedTransmission] = useState("Tümü")

    const brands = useMemo(() => ["Tümü", ...new Set(allVehicles.map(v => v.brand))], [])
    const fuels = ["Tümü", "Benzin", "Dizel", "Hibrit", "Elektrik"]
    const transmissions = ["Tümü", "Otomatik", "Manuel"]

    const filteredVehicles = useMemo(() => {
        return allVehicles.filter(v => {
            const matchSearch = (v.brand + " " + v.model).toLowerCase().includes(search.toLowerCase())
            const matchBrand = selectedBrand === "Tümü" || v.brand === selectedBrand
            const matchFuel = selectedFuel === "Tümü" || v.fuelType === selectedFuel
            const matchTransmission = selectedTransmission === "Tümü" || v.transmission === selectedTransmission
            return matchSearch && matchBrand && matchFuel && matchTransmission
        })
    }, [search, selectedBrand, selectedFuel, selectedTransmission])

    const resetFilters = () => {
        setSearch("")
        setSelectedBrand("Tümü")
        setSelectedFuel("Tümü")
        setSelectedTransmission("Tümü")
    }

    return (
        <main className="min-h-screen">
            <Navbar />

            <section className="pt-40 pb-12 bg-gradient-to-b from-primary/5 to-transparent border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 italic tracking-tighter uppercase leading-none">
                        ARAÇ <span className="text-primary italic font-light">LİSTESİ</span>
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto uppercase tracking-[0.2em] text-sm">
                        Hayalinizdeki Premium Aracı Keşfedin
                    </p>
                </div>
            </section>

            <section className="py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-4 gap-12">
                        {/* Filters Sidebar */}
                        <div className="lg:col-span-1 space-y-8">
                            <div className="glass p-6 rounded-2xl border border-white/10 sticky top-28">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="flex items-center gap-2 font-black italic tracking-widest text-sm">
                                        <Filter className="text-primary" size={18} /> FILTRELER
                                    </h3>
                                    <button onClick={resetFilters} className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                                        <RotateCcw size={12} /> Sıfırla
                                    </button>
                                </div>

                                {/* Search */}
                                <div className="space-y-4 mb-8">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Arama</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Marka veya model..."
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            className="w-full bg-secondary border border-white/5 rounded-xl px-4 py-3 pl-10 text-sm focus:ring-1 focus:ring-primary outline-none transition-all"
                                        />
                                        <Search className="absolute left-3 top-3.5 text-muted-foreground" size={16} />
                                    </div>
                                </div>

                                {/* Brand Filter */}
                                <div className="space-y-4 mb-8">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Marka Seçimi</label>
                                    <div className="flex flex-wrap gap-2">
                                        {brands.map(brand => (
                                            <button
                                                key={brand}
                                                onClick={() => setSelectedBrand(brand)}
                                                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${selectedBrand === brand ? 'bg-primary text-white' : 'bg-secondary text-muted-foreground hover:bg-white/10'}`}
                                            >
                                                {brand}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Fuel Filter */}
                                <div className="space-y-4 mb-8">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Yakıt Türü</label>
                                    <select
                                        value={selectedFuel}
                                        onChange={(e) => setSelectedFuel(e.target.value)}
                                        className="w-full bg-secondary border border-white/5 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-primary outline-none"
                                    >
                                        {fuels.map(f => <option key={f} value={f}>{f}</option>)}
                                    </select>
                                </div>

                                {/* Transmission Filter */}
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Vites Türü</label>
                                    <select
                                        value={selectedTransmission}
                                        onChange={(e) => setSelectedTransmission(e.target.value)}
                                        className="w-full bg-secondary border border-white/5 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-primary outline-none"
                                    >
                                        {transmissions.map(t => <option key={t} value={t}>{t}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Results */}
                        <div className="lg:col-span-3">
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                                <p className="text-sm text-muted-foreground">
                                    <span className="text-white font-bold">{filteredVehicles.length}</span> Araç Listeleniyor
                                </p>
                                <div className="flex gap-4">
                                    <span className="text-xs uppercase font-black tracking-widest">Sıralama: En Yeni</span>
                                </div>
                            </div>

                            {filteredVehicles.length > 0 ? (
                                <div className="grid md:grid-cols-2 gap-8">
                                    {filteredVehicles.map(vehicle => (
                                        <VehicleCard key={vehicle.id} vehicle={vehicle} />
                                    ))}
                                </div>
                            ) : (
                                <div className="py-24 text-center glass rounded-3xl">
                                    <div className="text-primary mb-6 animate-bounce">
                                        <Search size={48} className="mx-auto" />
                                    </div>
                                    <h3 className="text-2xl font-black italic mb-2">ARAÇ BULUNAMADI</h3>
                                    <p className="text-muted-foreground">Filtreleri değiştirerek tekrar aramayı deneyebilirsiniz.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    )
}
