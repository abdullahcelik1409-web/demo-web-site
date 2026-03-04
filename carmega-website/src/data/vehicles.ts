export interface Vehicle {
    id: string;
    brand: string;
    model: string;
    price: number;
    year: number;
    mileage: number;
    fuelType: 'Benzin' | 'Dizel' | 'Hibrit' | 'Elektrik';
    transmission: 'Otomatik' | 'Manuel';
    image: string;
    category: 'Premium' | 'Exclusive' | 'Sport';
    description: string;
    features: string[];
}

export const vehicles: Vehicle[] = [
    {
        id: '1',
        brand: 'Mercedes-Benz',
        model: 'G 63 AMG',
        price: 12500000,
        year: 2023,
        mileage: 5000,
        fuelType: 'Benzin',
        transmission: 'Otomatik',
        image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=1000&auto=format&fit=crop',
        category: 'Premium',
        description: 'Kusursuz kondisyonda, full aksesuarlı G 63 AMG. Özel mat siyah renk.',
        features: ['Vakumlu Kapılar', 'Isıtmalı Koltuklar', 'Burmester Ses Sistemi', '360 Derece Kamera']
    },
    {
        id: '2',
        brand: 'BMW',
        model: 'M4 Competition',
        price: 8500000,
        year: 2024,
        mileage: 1200,
        fuelType: 'Benzin',
        transmission: 'Otomatik',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1000&auto=format&fit=crop',
        category: 'Sport',
        description: 'Yeni nesil M4 Competition. Karbon fiber detaylar ve Competition paket.',
        features: ['M Drift Analizörü', 'Karbon Seramik Frenler', 'Head-up Display', 'Adaptif M Şasi']
    },
    {
        id: '3',
        brand: 'Audi',
        model: 'RS7 Sportback',
        price: 9200000,
        year: 2023,
        mileage: 8500,
        fuelType: 'Benzin',
        transmission: 'Otomatik',
        image: 'https://images.unsplash.com/photo-1606152424101-ad2f9a287bd6?q=80&w=1000&auto=format&fit=crop',
        category: 'Exclusive',
        description: 'Eşsiz tasarım ve üstün performans. RS7 Sportback ile sınırları zorlayın.',
        features: ['Quattro Çekiş Sistemi', 'Lazer Farlar', 'RS Spor Koltuklar', 'Bang & Olufsen 3D Ses']
    },
    {
        id: '4',
        brand: 'Porsche',
        model: 'Cayenne Coupe',
        price: 11000000,
        year: 2024,
        mileage: 500,
        fuelType: 'Hibrit',
        transmission: 'Otomatik',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop',
        category: 'Premium',
        description: 'E-Hybrid teknolojisiyle hem güçlü hem verimli. Luxury paket opsiyonlu.',
        features: ['Panoramik Tavan', 'Hava Süspansiyonu', 'Sport Chrono Paket', 'Bose Ses Sistemi']
    }
];
