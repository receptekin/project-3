import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const downloadCatalog = () => {
    // Katalog PDF'inin URL'si
    const catalogUrl = '/catalog.pdf';

    // Yeni bir link oluştur
    const link = document.createElement('a');
    link.href = catalogUrl;
    link.download = 'barlas-elevator-katalog.pdf';

    // Linki tıkla ve temizle
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="bg-[#1A1A1A] shadow-lg fixed w-full z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-orange-500 hover:text-orange-400 transition-colors">
            Barlas Elevator
          </Link>

          {/* Desktop Menü */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-orange-500 transition-colors">
              Ana Sayfa
            </Link>
            <Link to="/products" className="text-gray-300 hover:text-orange-500 transition-colors">
              Ürünler
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-orange-500 transition-colors">
              Hakkımızda
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-orange-500 transition-colors">
              İletişim
            </Link>
            <button
              onClick={downloadCatalog}
              className="flex items-center px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors shadow-md"
            >
              <Download className="w-4 h-4 mr-2" />
              E-Katalog
            </button>
          </div>

          {/* Mobil Menü Butonu */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-orange-500 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobil Menü */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1A1A1A] border-t border-white/10"
          >
            <div className="px-4 pt-2 pb-3 space-y-3">
              <Link
                to="/"
                className="block text-gray-300 hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link
                to="/products"
                className="block text-gray-300 hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Ürünler
              </Link>
              <Link
                to="/about"
                className="block text-gray-300 hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Hakkımızda
              </Link>
              <Link
                to="/contact"
                className="block text-gray-300 hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                İletişim
              </Link>
              <button
                onClick={() => {
                  downloadCatalog();
                  setIsOpen(false);
                }}
                className="flex items-center w-full px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors shadow-md"
              >
                <Download className="w-4 h-4 mr-2" />
                E-Katalog İndir
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;