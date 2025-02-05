import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        {/* Dinamik Arka Plan */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,125,0,0.15),rgba(0,0,0,0))]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col justify-center"
        >
          <div className="max-w-4xl">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
                Yeni Nesil
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600">
                  Asansör Teknolojisi
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-zinc-400 max-w-2xl leading-relaxed">
                Dünya standartlarında üretim, yenilikçi teknoloji ve
                <span className="text-orange-400"> 40+ ülkeye </span>
                başarılı ihracat.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center px-8 py-4 bg-orange-500 text-white rounded hover:bg-orange-600 transition-all duration-300"
                  >
                    <span className="relative z-10 font-medium">Fiyat Teklifi Al</span>
                    <ArrowRight className="relative z-10 ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    <div className="absolute inset-0 rounded bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/products"
                    className="group inline-flex items-center px-8 py-4 bg-zinc-900 text-white rounded border border-zinc-800 hover:bg-zinc-800 hover:border-orange-500/30 transition-all duration-300"
                  >
                    <span className="font-medium">Ürünleri İncele</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* İstatistikler */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8"
            >
              {[
                { number: "40+", label: "İhracat Ülkesi" },
                { number: "1000+", label: "Tamamlanan Proje" },
                { number: "24/7", label: "Teknik Destek" }
              ].map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-4xl font-bold text-orange-500 mb-2">{stat.number}</span>
                  <span className="text-zinc-400">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.button
            onClick={scrollToFeatures}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-zinc-500 hover:text-orange-400 transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="h-12 w-12" />
          </motion.button>
        </motion.div>
      </section>

      {/* Özellikler Bölümü */}
      <section id="features" className="relative bg-zinc-900 -mt-1">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,125,0,0.1),rgba(0,0,0,0))]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Teknolojik Üstünlüklerimiz
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              En son teknoloji ve yüksek kalite standartlarıyla üretim yapıyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Akıllı Kontrol Sistemi",
                description: "Yapay zeka destekli kontrol sistemi ile maksimum güvenlik ve enerji tasarrufu",
                icon: "💡"
              },
              {
                title: "Uzaktan İzleme",
                description: "7/24 uzaktan izleme ve arıza tespiti ile kesintisiz hizmet",
                icon: "📱"
              },
              {
                title: "Modüler Tasarım",
                description: "Hızlı kurulum ve kolay bakım için modüler sistem tasarımı",
                icon: "🔧"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="group relative bg-[#0A0A0A] p-8 rounded-lg border border-zinc-800/50 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                <div className="relative">
                  <div className="text-4xl mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-orange-400 transition-colors">{feature.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bölümü */}
      <section className="py-32 relative bg-gradient-to-b from-zinc-900 to-[#0A0A0A]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,125,0,0.1),rgba(0,0,0,0))]" />
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_80%_50%,rgba(59,130,246,0.1),rgba(0,0,0,0))]" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Geleceğin Teknolojisine Adım Atın
          </h2>
          <p className="text-lg text-zinc-400 mb-12 max-w-2xl mx-auto">
            Size özel çözümler için uzman ekibimiz bir tık uzağınızda
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center px-8 py-4 bg-orange-500 text-white rounded hover:bg-orange-600 transition-all duration-300"
            >
              <span className="relative z-10 font-medium">İletişime Geç</span>
              <ArrowRight className="relative z-10 ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 rounded bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;