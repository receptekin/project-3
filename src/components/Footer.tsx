import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Dinamik Üst Geçiş */}
      <div className="absolute top-0 left-0 right-0 h-16 -translate-y-[99%] overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear"
          }}
          className="absolute inset-y-0 -left-full right-0 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent blur-xl"
        />
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "linear"
          }}
          className="absolute inset-y-0 -left-full right-0 bg-gradient-to-r from-transparent via-orange-600/20 to-transparent blur-xl"
        />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#0A0A0A] transform origin-bottom"
            style={{ clipPath: 'polygon(0 0, 100% 70%, 100% 100%, 0 100%)' }} />
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              y: [0, -5, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
            style={{ clipPath: 'polygon(0 70%, 100% 0, 100% 100%, 0 100%)' }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        {/* Ana Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Şirket Bilgileri */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Barlas Elavator
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Yüksek kaliteli asansör sistemleri üretimi ve ihracatında güvenilir çözüm ortağınız.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Hızlı Bağlantılar */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center">
                  <span className="mr-2">→</span> Ana Sayfa
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center">
                  <span className="mr-2">→</span> Ürünlerimiz
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center">
                  <span className="mr-2">→</span> Hakkımızda
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center">
                  <span className="mr-2">→</span> İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">İletişim</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <Phone className="h-5 w-5 text-primary mt-1" />
                <div className="text-gray-300 group-hover:text-primary transition-colors duration-300">
                  <p className="font-medium">Telefon</p>
                  <p>+90 (212) 555 0000</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <Mail className="h-5 w-5 text-primary mt-1" />
                <div className="text-gray-300 group-hover:text-primary transition-colors duration-300">
                  <p className="font-medium">E-posta</p>
                  <p>info@barlaselavator.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div className="text-gray-300 group-hover:text-primary transition-colors duration-300">
                  <p className="font-medium">Adres</p>
                  <p>İstanbul, Türkiye</p>
                </div>
              </div>
            </div>
          </div>

          {/* Çalışma Saatleri */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Çalışma Saatleri</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-gray-300">
                <span>Pazartesi - Cuma:</span>
                <span>09:00 - 18:00</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Cumartesi:</span>
                <span>09:00 - 13:00</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Pazar:</span>
                <span>Kapalı</span>
              </div>
            </div>
          </div>
        </div>

        {/* Alt Bilgi ve Telif Hakkı */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Recep TEKİN. Tüm hakları saklıdır.
            </p>
            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 bg-primary/10 hover:bg-primary/20 text-primary p-2 rounded-full transition-all duration-300"
              aria-label="Yukarı çık"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;