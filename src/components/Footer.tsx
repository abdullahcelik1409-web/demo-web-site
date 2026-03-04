import Link from "next/link"
import { CarFront, Mail, MapPin, Phone, Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-background pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
            {/* Subtle Gradient Glow Map */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="col-span-1 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-8 group w-fit">
                            <CarFront className="text-white w-7 h-7 group-hover:text-accent transition-colors duration-500" />
                            <span className="text-2xl font-bold tracking-widest text-white uppercase font-heading">
                                CAR<span className="text-accent">MEGA</span>
                            </span>
                        </Link>
                        <p className="text-muted-foreground mb-8 leading-relaxed text-sm">
                            İstanbul Maltepe'de premium ve güvenilir araç alım satım hizmetleri. 15 yıllık tecrübe ile hayalinizdeki araca ulaştırıyoruz.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-background hover:bg-white transition-all duration-300"><Instagram size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-background hover:bg-white transition-all duration-300"><Facebook size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-background hover:bg-white transition-all duration-300"><Twitter size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-heading font-bold mb-8 uppercase tracking-widest text-xs">Hızlı Linkler</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-muted-foreground text-sm hover:text-white transition-colors duration-300">Ana Sayfa</Link></li>
                            <li><Link href="/vehicles" className="text-muted-foreground text-sm hover:text-white transition-colors duration-300">Araç Listesi</Link></li>
                            <li><Link href="/about" className="text-muted-foreground text-sm hover:text-white transition-colors duration-300">Hakkımızda</Link></li>
                            <li><Link href="/sell-car" className="text-muted-foreground text-sm hover:text-white transition-colors duration-300">Aracınızı Satın</Link></li>
                            <li><Link href="/contact" className="text-muted-foreground text-sm hover:text-white transition-colors duration-300">İletişim</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-heading font-bold mb-8 uppercase tracking-widest text-xs">İletişim</h4>
                        <ul className="space-y-6">
                            <li className="flex gap-4 group">
                                <MapPin className="text-accent shrink-0 mt-1" size={18} />
                                <span className="text-muted-foreground text-sm uppercase leading-relaxed group-hover:text-white transition-colors duration-300">İdealtepe, Dik Sk. Tepe Plaza No:1 D:B, Maltepe / İstanbul</span>
                            </li>
                            <li className="flex gap-4 group">
                                <Phone className="text-accent shrink-0 mt-1" size={18} />
                                <span className="text-muted-foreground text-sm font-medium tracking-wider group-hover:text-white transition-colors duration-300">+90 541 518 00 15</span>
                            </li>
                            <li className="flex gap-4 group">
                                <Mail className="text-accent shrink-0 mt-1" size={18} />
                                <span className="text-muted-foreground text-sm lowercase group-hover:text-white transition-colors duration-300">info@carmega.com.tr</span>
                            </li>
                        </ul>
                    </div>

                    {/* Business Hours */}
                    <div>
                        <h4 className="text-white font-heading font-bold mb-8 uppercase tracking-widest text-xs">Çalışma Saatleri</h4>
                        <ul className="space-y-4">
                            <li className="flex justify-between text-sm border-b border-white/5 pb-2">
                                <span className="text-muted-foreground">Pazartesi - Cuma</span>
                                <span className="text-white font-medium">09:00 - 19:00</span>
                            </li>
                            <li className="flex justify-between text-sm border-b border-white/5 pb-2">
                                <span className="text-muted-foreground">Cumartesi</span>
                                <span className="text-white font-medium">09:00 - 17:00</span>
                            </li>
                            <li className="flex justify-between text-sm opacity-50">
                                <span className="text-muted-foreground">Pazar</span>
                                <span className="text-white font-medium italic">Kapalı</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-muted-foreground text-xs uppercase tracking-widest">
                        © {new Date().getFullYear()} CARMEGA. Tüm Hakları Saklıdır.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-muted-foreground text-xs hover:text-white transition-colors duration-300">Gizlilik Politikası</Link>
                        <Link href="#" className="text-muted-foreground text-xs hover:text-white transition-colors duration-300">Kullanım Şartları</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
