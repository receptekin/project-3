import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-24" style={{ backgroundImage: 'url(/path/to/your/background.jpg)', backgroundSize: 'cover' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4 text-white">İletişim</h1>
          <p className="text-xl text-gray-400">
            Sorularınız için bizimle iletişime geçebilirsiniz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* İletişim Bilgileri */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-white">İletişim Bilgileri</h2>
              <div className="space-y-4">
                <motion.div
                  className="flex items-center space-x-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="h-6 w-6 text-blue-500" />
                  <div>
                    <h3 className="font-semibold text-white">Adres</h3>
                    <p className="text-gray-400">
                      Organize Sanayi Bölgesi<br />
                      34555 İstanbul, Türkiye
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="h-6 w-6 text-blue-500" />
                  <div>
                    <h3 className="font-semibold text-white">Telefon</h3>
                    <p className="text-gray-400">+90 (212) 555 0000</p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="h-6 w-6 text-blue-500" />
                  <div>
                    <h3 className="font-semibold text-white">E-posta</h3>
                    <p className="text-gray-400">info@barlaselavator.com</p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Clock className="h-6 w-6 text-blue-500" />
                  <div>
                    <h3 className="font-semibold text-white">Çalışma Saatleri</h3>
                    <p className="text-gray-400">
                      Pazartesi - Cuma: 09:00 - 18:00<br />
                      Cumartesi: 09:00 - 13:00
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;