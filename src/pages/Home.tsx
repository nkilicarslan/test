import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Instagram, 
  MapPin, 
  Star, 
  Award, 
  Users, 
  Heart,
  Sparkles,
  Crown,
  ArrowRight
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      title: 'Dudak Renklendirme',
      description: 'Kalıcı dudak renklendirme ile doğal güzelliğinizi ön plana çıkarın',
      image: '/images/lip_service.png',
      price: 'Fiyat için arayınız'
    },
    {
      title: 'İpek Kirpik',
      description: 'Uzun ve dolgun kirpikler için profesyonel ipek kirpik uygulaması',
      image: '/images/eyelash_service.png',
      price: 'Fiyat için arayınız'
    },
    {
      title: 'Protez Tırnak',
      description: 'Trend tasarımlar ve kaliteli malzemelerle protez tırnak uygulaması',
      image: '/images/nail_service.png',
      price: 'Fiyat için arayınız'
    }
  ];

  const stats = [
    { icon: Award, number: '15+', text: 'Yıl Tecrübe' },
    { icon: Users, number: '1000+', text: 'Mutlu Müşteri' },
    { icon: Star, number: '4.9', text: 'Müşteri Puanı' },
    { icon: Heart, number: '100%', text: 'Memnuniyet' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/salon_hero.png"
            alt="TazeBeauty Salon"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="text-amber-400" size={24} />
              <span className="text-amber-400 font-medium text-lg">Profesyonel Güzellik Merkezi</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-amber-400 via-rose-400 to-pink-400 bg-clip-text text-transparent">
                Sitem Taze Güzellik Salonu
              </span>
              <br />
              <span className="text-white text-3xl md:text-4xl font-medium">
                15 Yıllık Deneyim ve Güvenceyle
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              15 yıllık tecrübe ve deneyimimizle, güzelliğinizi profesyonel ellerde güvenle bırakın
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:+905396072520"
                className="flex items-center justify-center space-x-3 bg-gradient-to-r from-amber-600 to-rose-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Phone size={20} />
                <span>Randevu Al</span>
              </a>
              <Link
                to="/hizmetler"
                className="flex items-center justify-center space-x-3 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                <span>Hizmetlerimiz</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <stat.icon className="text-amber-600" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Crown className="text-amber-600" size={24} />
              <span className="text-amber-600 font-medium text-lg">Öne Çıkan Hizmetler</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Güzellik Hizmetlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesyonel ekibimiz ve kaliteli ürünlerimizle size en iyi hizmeti sunuyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-amber-600 font-semibold">{service.price}</span>
                    <Link
                      to="/hizmetler"
                      className="text-amber-600 hover:text-amber-700 font-medium flex items-center space-x-1 group"
                    >
                      <span>Detaylar</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/hizmetler"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-600 to-rose-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <span>Tüm Hizmetlerimiz</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Heart className="text-rose-600" size={24} />
                <span className="text-rose-600 font-medium text-lg">Hakkımızda</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                15 Yıllık Tecrübe ve Deneyim
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Sitem Taze Beauty olarak, 15 yıllık tecrübemiz ve deneyimimizle 
                güzellik dünyasında sizlere en kaliteli hizmeti sunuyoruz. 
                Profesyonel ekibimiz, modern ekipmanlarımız ve hijyenik ortamımızla 
                güzelliğinize değer katmaya devam ediyoruz.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ankara Çankaya'nın merkezinde bulunan salonumuzda, kalıcı makyajdan 
                protez tırnağa, kirpik uzatmadan cilt bakımına kadar birçok alanda 
                profesyonel hizmet veriyoruz.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/hakkimizda"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-600 to-rose-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
                >
                  <span>Daha Fazla</span>
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/galeri"
                  className="inline-flex items-center space-x-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium hover:border-amber-600 hover:text-amber-600 transition-all duration-300"
                >
                  <span>Çalışmalarımız</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/salon_hero.png"
                alt="Salon Interior"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-center">
                  <Instagram className="text-pink-600 mx-auto mb-2" size={32} />
                  <p className="text-sm font-medium text-gray-900">Bizi Takip Edin</p>
                  <p className="text-xs text-gray-600">@sitemtazebeauty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 via-rose-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Güzelliğiniz İçin Randevu Alın
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Profesyonel ekibimiz ve kaliteli hizmetimizle güzelliğinize değer katmaya hazırız
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="tel:+905396072520"
              className="flex items-center justify-center space-x-3 bg-white text-rose-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Phone size={20} />
              <span>Hemen Ara</span>
            </a>
            <a
              href="https://www.instagram.com/sitemtazebeauty/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-rose-600 transition-all duration-300"
            >
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center space-x-2 text-white/80">
            <MapPin size={16} />
            <span className="text-sm">Harbiye, Dikmen Cd 142/D, 06460 Çankaya/Ankara</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;