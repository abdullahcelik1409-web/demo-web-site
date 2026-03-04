import Link from "next/link"
import { Car, Mail, MapPin, Phone, Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-black pt-24 pb-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="col-span-1 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-8 group">
                            <Car className="text-primary w-8 h-8 group-hover:scale-110 transition-transform" />
                            <span className="text-2xl font-bold tracking-tighter text-white">CAR<span className="text-primary">MEGA</span></span>
                        </Link>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            İstanbul Maltepe'de premium ve güvenilir araç alım satım hizmetleri. 15 yıllık tecrübe ile hayalinizdeki araca ulaştırıyoruz.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary transition-all"><Instagram size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary transition-all"><Facebook size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary transition-all"><Twitter size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Hızlı Linkler</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Ana Sayfa</Link></li>
                            <li><Link href="/vehicles" className="text-muted-foreground hover:text-primary transition-colors">Araç Listesi</Link></li>
                            <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">Hakkımızda</Link></li>
                            <li><Link href="/sell-car" className="text-muted-foreground hover:text-primary transition-colors">Aracınızı Satın</Link></li>
                            <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">İletişim</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">İletişim</h4>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <MapPin className="text-primary shrink-0" size={20} />
                                <span className="text-muted-foreground text-sm uppercase leading-relaxed">İdealtepe, Dik Sk. Tepe Plaza No:1 D:B, Maltepe / İstanbul</span>
                            </li>
                            <li className="flex gap-4">
                                <Phone className="text-primary shrink-0" size={20} />
                                <span className="text-muted-foreground text-sm font-bold">+90 541 518 00 15</span>
                            </li>
                            <li className="flex gap-4">
                                <Mail className="text-primary shrink-0" size={20} />
                                <span className="text-muted-foreground text-sm lowercase">info@carmega.com.tr</span>
                            </li>
                        </ul>
                    </div>

                    {/* Business Hours */}
                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Çalışma Saatleri</h4>
                        <ul className="space-y-4">
                            <li className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Pazartesi - Cuma:</span>
                                <span className="text-white font-medium">09:00 - 19:00</span>
                            </li>
                            <li className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Cumartesi:</span>
                                <span className="text-white font-medium">09:00 - 17:00</span>
                            </li>
                            <li className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Pazar:</span>
                                <span className="text-white font-medium italic">Kapalı</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-muted-foreground text-xs uppercase tracking-widest">
                        © 2024 CARMEGA. Tüm Hakları Saklıdır.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-muted-foreground text-xs hover:text-white">Gizlilik Politikası</Link>
                        <Link href="#" className="text-muted-foreground text-xs hover:text-white">Kullanım Şartları</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
