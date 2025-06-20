import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Clock, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/images/image.png" 
                alt="Sitem Taze Güzellik Salonu Logo" 
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent">
                  Sitem Taze Güzellik Salonu
                </span>
                <span className="text-sm text-gray-300">
                  15 YILLIK DENEYİM
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              15 yıllık tecrübe ve deneyimimizle güzelliğinize değer katıyoruz. 
              Profesyonel ekibimiz ve kaliteli hizmetimizle sizleri ağırlıyoruz.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/sitemtazebeauty/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full hover:shadow-lg transition-all duration-200 transform hover:scale-110"
              >
                <Instagram size={18} />
              </a>
              <a
                href="tel:+905396072520"
                className="p-3 bg-gradient-to-r from-amber-600 to-rose-600 rounded-full hover:shadow-lg transition-all duration-200 transform hover:scale-110"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Hızlı Linkler</h3>
            <ul className="space-y-3">
              {[
                { name: 'Ana Sayfa', path: '/' },
                { name: 'Hizmetler', path: '/hizmetler' },
                { name: 'Hakkımızda', path: '/hakkimizda' },
                { name: 'Galeri', path: '/galeri' },
                { name: 'İletişim', path: '/iletisim' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Hizmetlerimiz</h3>
            <ul className="space-y-3">
              {[
                'Dudak Renklendirme',
                'Medikal Cilt Bakımı',
                'Protez Tırnak',
                'İpek Kirpik',
                'Lifting İşlemleri',
                'Lazer Epilasyon',
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">İletişim</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-amber-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Harbiye, Dikmen Cd 142/D<br />
                    06460 Çankaya/Ankara
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-amber-400" size={18} />
                <a
                  href="tel:+905396072520"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  +90 539 607 25 20
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="text-amber-400 mt-1" size={18} />
                <div className="text-gray-300 text-sm">
                  <p>Pazartesi - Cumartesi: 09:00 - 19:30</p>
                  <p>Pazar: Kapalı</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 TazeBeauty. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="text-red-500" size={16} />
              <span>for beauty</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;