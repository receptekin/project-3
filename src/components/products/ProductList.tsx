import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ProductModal from './ProductModal';

interface Product {
    id: number;
    name: string;
    image: string;
    description: string;
    details: {
        capacity: string;
        speed: string;
        dimensions: string;
        features: string[];
        certifications: string[];
        applications: string[];
        advantages: string[];
    };
}

const products: Product[] = [
    {
        id: 1,
        name: 'Yolcu Asansörleri',
        image: 'images/products/elevator.png',
        description: 'Modern ve konforlu yolcu taşıma çözümleri',
        details: {
            capacity: '4-21 kişi (320-1600 kg)',
            speed: '1.0 - 2.5 m/s',
            dimensions: 'Kabin genişliği: 1100-2100mm, Derinlik: 1400-2400mm',
            features: [
                'Enerji verimli tahrik sistemi',
                'LCD ekranlı kumanda paneli',
                'Sesli kat anons sistemi',
                'Acil durum aydınlatma sistemi',
                'Aşırı yük sensörü',
                'Otomatik kurtarma sistemi',
                'Yangın alarm entegrasyonu'
            ],
            certifications: [
                'EN 81-20/50',
                'CE Sertifikası',
                'ISO 9001:2015'
            ],
            applications: [
                'Konut Projeleri',
                'İş Merkezleri',
                'Alışveriş Merkezleri',
                'Oteller'
            ],
            advantages: [
                'Düşük enerji tüketimi',
                'Sessiz çalışma',
                'Minimum bakım ihtiyacı',
                'Uzun ömürlü performans'
            ]
        }
    },
    {
        id: 2,
        name: 'Yük Asansörleri',
        image: 'images/products/yukelevator.png',
        description: 'Ağır yük taşıma kapasiteli endüstriyel asansörler',
        details: {
            capacity: '1000-5000 kg',
            speed: '0.5 - 1.0 m/s',
            dimensions: 'Kabin genişliği: 1600-3000mm, Derinlik: 2000-3500mm',
            features: [
                'Güçlendirilmiş kabin yapısı',
                'Endüstriyel tip kapılar',
                'Ağır hizmet tamponları',
                'Yüksek dayanımlı ray sistemi',
                'Forklift girişine uygun zemin',
                'Darbe koruma sistemleri',
                'Endüstriyel tip butonlar'
            ],
            certifications: [
                'EN 81-20/50',
                'CE Sertifikası',
                'ISO 9001:2015',
                'Endüstriyel Güvenlik Sertifikası'
            ],
            applications: [
                'Fabrikalar',
                'Depolar',
                'Lojistik Merkezleri',
                'Endüstriyel Tesisler'
            ],
            advantages: [
                'Yüksek dayanıklılık',
                'Kolay yükleme-boşaltma',
                'Düşük bakım maliyeti',
                'Uzun kullanım ömrü'
            ]
        }
    },
    {
        id: 3,
        name: 'Panoramik Asansörler',
        image: 'images/products/panoramik.png',
        description: 'Şık tasarımlı cam asansör sistemleri',
        details: {
            capacity: '4-15 kişi (320-1150 kg)',
            speed: '1.0 - 2.0 m/s',
            dimensions: 'Kabin genişliği: 1100-1800mm, Derinlik: 1400-2000mm',
            features: [
                'Lamine güvenlik camı',
                'LED aydınlatma sistemi',
                'Paslanmaz çelik detaylar',
                'Özel tasarım tavan',
                'Dijital medya ekranı',
                'Enerji tasarruflu motor',
                'Akıllı havalandırma sistemi'
            ],
            certifications: [
                'EN 81-20/50',
                'CE Sertifikası',
                'ISO 9001:2015',
                'Güvenlik Camı Sertifikası'
            ],
            applications: [
                'Lüks Oteller',
                'İş Merkezleri',
                'Alışveriş Merkezleri',
                'Turistik Tesisler'
            ],
            advantages: [
                'Estetik görünüm',
                'Panoramik manzara',
                'Modern tasarım',
                'Prestijli görünüm'
            ]
        }
    },
    {
        id: 4,
        name: 'Hastane Asansörleri',
        image: 'images/products/hopital.png',
        description: 'Özel donanımlı sağlık tesisi asansörleri',
        details: {
            capacity: '13-26 kişi (1000-2000 kg)',
            speed: '1.0 - 2.0 m/s',
            dimensions: 'Kabin genişliği: 1400-2400mm, Derinlik: 2400-2800mm',
            features: [
                'Sedye taşımaya uygun boyutlar',
                'Antibakteriyel kabin kaplaması',
                'Otomatik yatak geçiş sistemi',
                'Acil durum jeneratör bağlantısı',
                'Hastane otomasyon entegrasyonu',
                'Temassız kontrol sistemi',
                'UPS destekli çalışma'
            ],
            certifications: [
                'EN 81-20/50',
                'CE Sertifikası',
                'ISO 9001:2015',
                'Medikal Cihaz Sertifikası',
                'Hijyen Sertifikası'
            ],
            applications: [
                'Hastaneler',
                'Klinikler',
                'Sağlık Merkezleri',
                'Rehabilitasyon Merkezleri'
            ],
            advantages: [
                'Hijyenik ortam',
                'Kesintisiz çalışma',
                'Geniş iç hacim',
                'Acil durum güvenliği'
            ]
        }
    },
    {
        id: 5,
        name: 'Motor ve Tahrik Sistemleri',
        image: 'images/products/geardmakine.png',
        description: 'Yüksek performanslı asansör motor ve tahrik sistemleri',
        details: {
            capacity: '320-2000 kg',
            speed: '0.5 - 2.5 m/s',
            dimensions: 'Motor Boyutları: 800-1200mm, Makine Dairesi: 1500-2500mm',
            features: [
                'Senkron motor teknolojisi',
                'Enerji geri kazanım sistemi',
                'Sessiz çalışma özelliği',
                'Kompakt tasarım',
                'Akıllı kontrol sistemi',
                'Uzaktan izleme desteği',
                'Düşük bakım gereksinimi'
            ],
            certifications: [
                'EN 81-20/50',
                'CE Sertifikası',
                'ISO 9001:2015',
                'Enerji Verimliliği Sertifikası'
            ],
            applications: [
                'Yolcu Asansörleri',
                'Yük Asansörleri',
                'Panoramik Asansörler',
                'Hastane Asansörleri'
            ],
            advantages: [
                'Yüksek enerji verimliliği',
                'Uzun kullanım ömrü',
                'Kolay montaj',
                'Düşük işletme maliyeti'
            ]
        }
    },
    {
        id: 6,
        name: 'Güvenlik Sistemleri',
        image: 'images/products/guvenlik.png',
        description: 'En son teknoloji asansör güvenlik ekipmanları',
        details: {
            capacity: 'Tüm asansör tipleri',
            speed: 'Tüm hız aralıkları',
            dimensions: 'Üniversal uyumluluk',
            features: [
                'Acil fren sistemleri',
                'Hız regülatörleri',
                'Tamponlar',
                'Kapı güvenlik sistemleri',
                'Aşırı yük sensörleri',
                'Acil aydınlatma sistemleri',
                'Sesli ve görsel alarm sistemleri'
            ],
            certifications: [
                'EN 81-20/50',
                'CE Sertifikası',
                'ISO 9001:2015',
                'Güvenlik Komponentleri Sertifikası'
            ],
            applications: [
                'Tüm Asansör Tipleri',
                'Modernizasyon Projeleri',
                'Yeni Kurulumlar',
                'Güvenlik Güncellemeleri'
            ],
            advantages: [
                'Maksimum güvenlik',
                'Kolay entegrasyon',
                'Güvenilir performans',
                'Uzun ömürlü kullanım'
            ]
        }
    }
];

const ProductList = () => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    return (
        <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Ürünlerimiz</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        En son teknoloji ile üretilen asansör sistemlerimiz, güvenlik ve konforu bir arada sunuyor
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="relative h-80 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute top-4 right-4">
                                    <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                        Premium Ürün
                                    </span>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                                        {product.name}
                                    </h3>
                                    <div className="flex gap-2">
                                        {product.details.applications.slice(0, 2).map((app, index) => (
                                            <span
                                                key={index}
                                                className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium"
                                            >
                                                {app}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-6 line-clamp-2">{product.description}</p>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                                            <span className="text-sm text-gray-600">Kapasite: {product.details.capacity.split(' ')[0]}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 rounded-full bg-secondary"></div>
                                            <span className="text-sm text-gray-600">Hız: {product.details.speed.split(' ')[0]}</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedProduct(product)}
                                        className="w-full bg-accent text-white px-6 py-4 rounded-xl hover:bg-primary transition-colors duration-300 flex items-center justify-center group"
                                    >
                                        <span className="font-medium">Detayları Gör</span>
                                        <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </div>
    );
};

export default ProductList; 