export interface Vehicle {
    id: string;
    brand: string;
    model: string;
    price: number;
    year: number;
    mileage: number;
    fuelType: 'Benzin' | 'Dizel' | 'Hibrit' | 'Elektrik';
    transmission: 'Otomatik' | 'Manuel';
    images: string[];
    category: 'Premium' | 'Exclusive' | 'Sport' | 'Standart';
    description: string;
    features: string[];
}

export const vehicles: Vehicle[] = [
    {
        id: '1',
        brand: 'Volkswagen',
        model: 'Golf 1.5 eTSI',
        price: 1850000,
        year: 2023,
        mileage: 12000,
        fuelType: 'Hibrit',
        transmission: 'Otomatik',
        images: [
            'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1616885387195-a4f6be4e370e?auto=format&fit=crop&w=1000&q=80'
        ],
        category: 'Standart',
        description: 'Düşük kilometrede, yetkili servis bakımlı, hatasız VW Golf 8. Şehir içi ve dışı ideal kullanım.',
        features: ['Dijital Gösterge Paneli', 'Isıtmalı Koltuklar', 'Apple CarPlay / Android Auto', 'Geri Görüş Kamerası']
    },
    {
        id: '2',
        brand: 'Toyota',
        model: 'Corolla 1.8 Hybrid',
        price: 1550000,
        year: 2022,
        mileage: 28000,
        fuelType: 'Hibrit',
        transmission: 'Otomatik',
        images: [
            'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fd?auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1000&q=80'
        ],
        category: 'Standart',
        description: 'Yakıt cimrisi ve sorunsuz hibrit motor. İlk sahibinden, kapalı garaj aracı.',
        features: ['Adaptif Hız Sabitleyici', 'Şerit Takip Sistemi', 'Kablosuz Şarj', 'LED Farlar']
    },
    {
        id: '3',
        brand: 'Renault',
        model: 'Megane 1.3 TCe',
        price: 1350000,
        year: 2023,
        mileage: 18500,
        fuelType: 'Benzin',
        transmission: 'Otomatik',
        images: [
            'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1622353347526-2580556e43f5?auto=format&fit=crop&w=1000&q=80'
        ],
        category: 'Standart',
        description: 'Geniş iç hacmi ve konforuyla ideal aile aracı. Hatasız, boyasız.',
        features: ['Anahtarsız Giriş ve Çalıştırma', 'Dokunmatik Multimedya', 'Geri Görüş Kamerası', 'Alaşımlı Jantlar']
    },
    {
        id: '4',
        brand: 'Fiat',
        model: 'Egea 1.6 Multijet',
        price: 1100000,
        year: 2021,
        mileage: 45000,
        fuelType: 'Dizel',
        transmission: 'Otomatik',
        images: [
            'https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=80'
        ],
        category: 'Standart',
        description: 'Ekonomik dizel motoruyla uzun yolların vazgeçilmezi. Temiz kullanılmış masrafsız sedan.',
        features: ['Hız Sabitleyici', 'Yokuş Kalkış Desteği', 'Bluetooth Bağlantısı', 'Gündüz LED Farları']
    }
];
