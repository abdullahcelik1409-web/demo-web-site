export interface Vehicle {
    id: string;
    brand: string;
    model: string;
    price: number;
    year: number;
    mileage: number;
    fuelType: 'Benzin' | 'Dizel' | 'Hibrit' | 'Elektrik' | 'Benzinli';
    transmission: 'Otomatik' | 'Manuel';
    images: string[];
    category: 'Premium' | 'Exclusive' | 'Sport' | 'Standart';
    description: string;
    features: string[];
}

export const vehicles: Vehicle[] = [
    {
        id: '7',
        brand: 'Ford',
        model: 'F-150',
        price: 5700000,
        year: 2023,
        mileage: 12150,
        fuelType: 'Benzinli',
        transmission: 'Otomatik',
        images: [
            '/cars/f150-1.png',
            '/cars/f150-2.png',
            '/cars/f150-3.png',
            '/cars/f150-4.png'
        ],
        category: 'Premium',
        description: 'İkinci el araç hizmetlerinde her adımda güveni hissedin. Otokoç 2.El İstanbul Avrupa\'dan 2023 model Ford F-150 Benzinli Otomatik. 12.150 KM, 330 HP, 2688 cc motor, 4x4 çekiş. Sağ arka çamurluk boyalı, tramer kaydı yok. 3 Ay / 5.000 km garanti kapsamında. Yetki Belge No: 3400132.',
        features: ['ABS', 'Arka Park Sensörü', '4x4 Çekiş Sistemi', '330 HP Motor Gücü', 'Otomatik Vites', 'Pickup Kasa', 'Garanti Kapsamında', 'Tramer Kaydı Yok']
    },
    {
        id: '8',
        brand: 'Audi',
        model: 'A6 Sedan 40 TDI Quattro S Line',
        price: 7450000,
        year: 2025,
        mileage: 6001,
        fuelType: 'Dizel',
        transmission: 'Otomatik',
        images: [
            '/cars/audi-a6-2025/audi-a6-2.jpg',
            '/cars/audi-a6-2025/audi-a6-3.png',
            '/cars/audi-a6-2025/audi-a6-4.jpg',
            '/cars/audi-a6-2025/audi-a6-5.png'
        ],
        category: 'Premium',
        description: '2025 Model Bayi Çıkışlı Audi A6 S Line 40 TDI. %20 KDV Avantajlı. Hatasız, Boyasız, Değişensiz.',
        features: [
            '19 İnç Jant',
            'Hayalet Gösterge',
            'Geri Görüş Kamerası',
            'S Line Spor Koltuklar',
            'Elektrikli Arka Perde',
            'Makam Yan Perdeler',
            'Vakum Kapılar',
            'Matrix LED Farlar',
            'Çarpışma Önleme Sistemi',
            'Şerit Takip Asistanı',
            'Elektrikli Ön Koltuklar',
            '4 Koltuk Isıtma',
            'Park Asistanı',
            'Auto Hold',
            'Elektrikli Bagaj',
            'Panoramik Cam Tavan',
            'Katlanır Aynalar',
            '4 Bölge Dijital Klima'
        ]
    },
    {
        id: '9',
        brand: 'Mercedes-Benz',
        model: 'E 250 CDI Edition',
        price: 3150000,
        year: 2015,
        mileage: 160000,
        fuelType: 'Dizel',
        transmission: 'Otomatik',
        images: [
            '/cars/mercedes-e250-1.jpg',
            '/cars/mercedes-e250-2.jpg',
            '/cars/mercedes-e250-3.jpg',
            '/cars/mercedes-e250-4.jpg'
        ],
        category: 'Premium',
        description: 'VİZYON OTOMOTİV güvencesiyle 2015 Model Mercedes-Benz E 250 CDI Edition. Bayi çıkışlı, hatasız ve boyasız. Sadece 4.000 TL tramer kaydı mevcuttur. İç kozmetiği ilk günkü temizliğini korumaktadır. Bakımlı ve masrafsız bir araçtır. Yedek anahtarları ve kitapçıkları mevcuttur.',
        features: [
            'Panoramik Cam Tavan',
            'Sağ-Sol Koltuk Hafıza',
            'Koltuk Isıtma',
            'Geri Görüş Kamerası',
            'Büyük Ekran',
            'Tam Deri Bej Koltuklar',
            'Çift Yönlü Bağımsız Dijital Klima',
            'Elektrili Arka Perde',
            'Yan Makam Perdeleri',
            'Gündüz LED / Bi-Xenon',
            'İç ve Dış Ambiyans Aydınlatma',
            'Elektrikli Direksiyon',
            'Elektrikli Katlanır Yan Aynalar',
            'Cruise Control / Tempomat',
            'Far-Park-Yağmur Sensörleri',
            '4MATIC (4 Çeker)',
            '204 HP Motor Gücü',
            'Ekspertiz Garantili'
        ]
    },
    {
        id: '10',
        brand: 'BMW',
        model: '520d Executive M Sport',
        price: 3250000,
        year: 2017,
        mileage: 164000,
        fuelType: 'Dizel',
        transmission: 'Otomatik',
        images: [
            '/cars/bmw-520d/bmw-520d-1.png',
            '/cars/bmw-520d/bmw-520d-2.png',
            '/cars/bmw-520d/bmw-520d-3.png',
            '/cars/bmw-520d/bmw-520d-4.png',
            '/cars/bmw-520d/bmw-520d-5.png',
            '/cars/bmw-520d/bmw-520d-6.png',
            '/cars/bmw-520d/bmw-520d-7.png',
            '/cars/bmw-520d/bmw-520d-8.png',
            '/cars/bmw-520d/bmw-520d-9.png',
            '/cars/bmw-520d/bmw-520d-10.png',
            '/cars/bmw-520d/bmw-520d-11.png'
        ],
        category: 'Premium',
        description: 'Aracım M Sport paket olup kozmetik ve mekanik olarak diri durumdadır. Motor–şanzıman kusursuz çalışmaktadır, yürüyeninde herhangi bir sorun yoktur. Şase podye airbag direklerde herhangi bi işlem yoktur. ORJİNAL M SPORT, NEXT 100, 4 KAPI VAKUM, ANTRASİT, HAYALET EKRAN. 2.0 B47 DİZEL oldukça sorunsuz ve az yakan bir motordur.',
        features: [
            'M Sport Paket',
            'Executive Paket',
            'Vakumlu Kapılar',
            'Hayalet Ekran',
            'Antrasit Tavan',
            'Next 100',
            'B47 Yeni Nesil Motor',
            'M Sport Direksiyon',
            'M Sport Koltuklar',
            'Elektrikli Hafızalı Koltuklar',
            'Isıtmalı Koltuklar',
            'Sunroof',
            'Geri Görüş Kamerası',
            'Park Sensörleri',
            'Hız Sabitleyici',
            'Çift Bölge Dijital Klima'
        ]
    }
];
