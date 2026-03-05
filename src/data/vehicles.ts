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
            'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1000&q=80'
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
            'https://images.unsplash.com/photo-1623869675781-80aa31012a5a?auto=format&fit=crop&w=1000&q=80',
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
            'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?auto=format&fit=crop&w=1000&q=80'
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
            'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1000&q=80'
        ],
        category: 'Standart',
        description: 'Ekonomik dizel motoruyla uzun yolların vazgeçilmezi. Temiz kullanılmış masrafsız sedan.',
        features: ['Hız Sabitleyici', 'Yokuş Kalkış Desteği', 'Bluetooth Bağlantısı', 'Gündüz LED Farları']
    },
    {
        id: '5',
        brand: 'Honda',
        model: 'Civic 1.5 VTEC Turbo',
        price: 1750000,
        year: 2023,
        mileage: 9500,
        fuelType: 'Benzin',
        transmission: 'Otomatik',
        images: [
            'https://images.unsplash.com/photo-1606611013016-969c19ba27b5?auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1541443131876-44b03de101c5?auto=format&fit=crop&w=1000&q=80'
        ],
        category: 'Standart',
        description: 'Sportif tasarımı ve güçlü turbo motoruyla göz dolduran yeni nesil Civic. Sıfır ayarında.',
        features: ['Honda Sensing Güvenlik Paketi', 'Sunroof', 'LED Farlar', 'Dijital Gösterge']
    },
    {
        id: '6',
        brand: 'Hyundai',
        model: 'Tucson 1.6 CRDi',
        price: 1650000,
        year: 2022,
        mileage: 32000,
        fuelType: 'Dizel',
        transmission: 'Otomatik',
        images: [
            'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1568844293986-8d0400f4745b?auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=80'
        ],
        category: 'Standart',
        description: 'Yeni nesil tasarımıyla dikkat çeken Tucson. Geniş bagaj hacmi ve konforlu sürüş.',
        features: ['360 Derece Kamera', 'Elektrikli Bagaj Kapağı', 'Isıtmalı Direksiyon', 'Kör Nokta Uyarısı']
    }
];
