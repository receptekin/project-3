import { Trophy, Users, Globe } from 'lucide-react';

// If "Award" is not available, replace it with a similar icon, e.g., "Trophy" if it exists
// import { Trophy, Users, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-24">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Hakkımızda</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            20 yılı aşkın süredir asansör sektöründe öncü çözümler sunarak, güvenilir ve yenilikçi asansör sistemleri üretiyoruz.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Globe className="h-12 w-12 text-blue-500" />,
              number: "40+",
              label: "İhracat Yapılan Ülke"
            },
            {
              icon: <Users className="h-12 w-12 text-blue-500" />,
              number: "200+",
              label: "Çalışan"
            },
            {
              icon: <Trophy className="h-12 w-12 text-blue-500" />,
              number: "1000+",
              label: "Tamamlanan Proje"
            }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold mb-2 text-blue-600">{stat.number}</div>
              <div className="text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Vizyonumuz</h2>
            <p className="text-gray-700">
              Global asansör pazarında lider konuma ulaşarak, yenilikçi ve sürdürülebilir çözümlerle sektöre yön veren bir marka olmak.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Misyonumuz</h2>
            <p className="text-gray-700">
              En yüksek kalite standartlarında, güvenli ve konforlu asansör sistemleri üreterek müşterilerimizin ihtiyaçlarını en iyi şekilde karşılamak.
            </p>
          </div>
        </div>

        {/* Company Image */}
        <div className="relative h-96 rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Şirket Merkezi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold">Modern Üretim Tesisimiz</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;