import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Clock, 
  Star, 
  Check,
  Sparkles,
  Crown,
  Heart,
  Zap,
  Scissors,
  Palette
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Cilt Bakımı',
      subtitle: 'Professional Skincare',
      description: '15 yıllık deneyimle cilt tipinize özel profesyonel cilt bakım uygulamaları. Akne, yaşlanma karşıtı, leke giderme ve cilt yenileme tedavileri.',
      image: '/images/salon_hero.png',
      icon: Zap,
      duration: '1-1.5 Saat',
      price: 'Fiyat için arayınız',
      features: [
        'Detaylı cilt analizi',
        'Özel serum uygulamaları',
        'Anti-aging tedaviler',
        'Leke giderme',
        'Cilt yenileme'
      ],
      beforeAfter: 'Cildiniz daha sağlıklı ve parlak görünecek'
    },
    {
      id: 2,
      title: 'Protez Tırnak',
      subtitle: 'Nail Extensions',
      description: 'Kaliteli malzemeler ve trend tasarımlarla protez tırnak uygulaması. Jelatin, akrilik veya fiber glass seçenekleriyle güçlü ve şık tırnaklar.',
      image: '/images/nail_service.png',
      icon: Crown,
      duration: '1-2 Saat',
      price: 'Fiyat için arayınız',
      features: [
        'Trend tasarımlar',
        'Kaliteli malzemeler',
        'Uzun ömürlü',
        'Çeşitli renk seçenekleri',
        'Özel nail art'
      ],
      beforeAfter: 'Tırnaklarınız uzun ve şık görünecek'
    },
    {
      id: 3,
      title: 'Manikür / Pedikür',
      subtitle: 'Nail Care',
      description: 'Profesyonel manikür ve pedikür hizmetleri. Tırnak bakımı, şekillendirme ve özel oje uygulamaları ile el ve ayak bakımı.',
      image: '/images/nail_service.png',
      icon: Sparkles,
      duration: '1-1.5 Saat',
      price: 'Fiyat için arayınız',
      features: [
        'Tırnak şekillendirme',
        'Cuticle bakımı',
        'Özel oje uygulaması',
        'El ve ayak masajı',
        'Hijyenik malzemeler'
      ],
      beforeAfter: 'El ve ayaklarınız bakımlı ve güzel görünecek'
    },
    {
      id: 4,
      title: 'Kalıcı Makyaj',
      subtitle: 'Permanent Makeup',
      description: 'Kalıcı makyaj uygulamaları ile doğal güzelliğinizi ön plana çıkarın. Kaş, dudak ve göz çevresi için profesyonel pigment uygulaması.',
      image: '/images/lip_service.png',
      icon: Heart,
      duration: '2-3 Saat',
      price: 'Fiyat için arayınız',
      features: [
        'Doğal görünüm',
        '1-3 yıl kalıcılık',
        'Hijyenik uygulama',
        'Profesyonel pigmentler',
        'Detaylı kontrol seanları'
      ],
      beforeAfter: 'Makyajsız bile güzel görüneceksiniz'
    },
    {
      id: 5,
      title: 'Lazer Epilasyon',
      subtitle: 'Laser Hair Removal',
      description: 'Son teknoloji lazer cihazları ile kalıcı tüy azaltma. Tüm vücut bölgeleri için güvenli ve etkili uygulama.',
      image: '/images/salon_hero.png',
      icon: Palette,
      duration: '30 dakika - 2 Saat',
      price: 'Fiyat için arayınız',
      features: [
        'Son teknoloji lazer',
        'Tüm cilt tiplerine uygun',
        'Ağrısız uygulama',
        'Kalıcı sonuç',
        'Hızlı işlem'
      ],
      beforeAfter: 'İstenmeyen tüylerden kalıcı kurtuluş'
    },
    {
      id: 6,
      title: 'İpek Kirpik',
      subtitle: 'Eyelash Extension',
      description: 'Doğal kirpiklerinizi uzatmak ve dolgunlaştırmak için özel ipek kirpik uygulaması. Farklı uzunluk ve kalınlık seçenekleriyle istediğiniz görünümü elde edin.',
      image: '/images/eyelash_service.png',
      icon: Sparkles,
      duration: '1.5-2 Saat',
      price: 'Fiyat için arayınız',
      features: [
        'Doğal ipek kirpik',
        'Farklı uzunluk seçenekleri',
        '3-4 hafta kalıcılık',
        'Su geçirmez',
        'Profesyonel uygulama'
      ],
      beforeAfter: 'Kirpikleriniz uzun ve dolgun görünecek'
    },
    {
      id: 7,
      title: 'Kaş Laminasyon',
      subtitle: 'Brow Lamination',
      description: 'Kaşlarınıza doğal bir şekil ve hacim kazandıran kaş laminasyon işlemi. Kaşlarınız daha dolgun ve düzenli görünecek.',
      image: '/images/salon_hero.png',
      icon: Crown,
      duration: '1-1.5 Saat',
      price: 'Fiyat için arayınız',
      features: [
        'Doğal kaş şekillendirme',
        '6-8 hafta kalıcılık',
        'Hacim kazandırma',
        'Düzenli görünüm',
        'Boyama seçeneği'
      ],
      beforeAfter: 'Kaşlarınız daha dolgun ve şekilli görünecek'
    },
    {
      id: 8,
      title: 'Kirpik Lifting',
      subtitle: 'Lash Lifting',
      description: 'Doğal kirpiklerinizi kaldırarak daha uzun ve kıvrık görünmesini sağlayan kirpik lifting işlemi. Makyajsız güzel gözler.',
      image: '/images/eyelash_service.png',
      icon: Scissors,
      duration: '1-1.5 Saat',
      price: 'Fiyat için arayınız',
      features: [
        'Doğal kirpik kaldırma',
        '6-8 hafta kalıcılık',
        'Kıvrım kazandırma',
        'Boyama seçeneği',
        'Maskara etkisi'
      ],
      beforeAfter: 'Kirpikleriniz doğal olarak kıvrık ve uzun görünecek'
    },
    {
      id: 9,
      title: 'Bölgesel İncelme',
      subtitle: 'Body Contouring',
      description: 'Bölgesel yağ yakma ve şekillendirme uygulamaları. Kavitasyon, radyofrekans ve diğer modern yöntemlerle vücut şekillendirme.',
      image: '/images/salon_hero.png',
      icon: Zap,
      duration: '1-2 Saat',
      price: 'Fiyat için arayınız',
      features: [
        'Bölgesel yağ yakma',
        'Sellülit azaltma',
        'Cilt sıkılaştırma',
        'Ölçü kaybı',
        'Modern cihazlar'
      ],
      beforeAfter: 'Vücut hatlarınız daha belirgin ve şekilli görünecek'
    },
    {
      id: 10,
      title: 'Makyaj',
      subtitle: 'Professional Makeup',
      description: 'Özel günler, etkinlikler ve günlük kullanım için profesyonel makyaj hizmetleri. Kaliteli ürünlerle mükemmel sonuçlar.',
      image: '/images/salon_hero.png',
      icon: Palette,
      duration: '1-2 Saat',
      price: 'Fiyat için arayınız',
      features: [
        'Özel etkinlik makyajı',
        'Günlük makyaj',
        'Gelin makyajı',
        'Kaliteli ürünler',
        'Uzun süre kalıcılık'
      ],
      beforeAfter: 'Doğal güzelliğiniz ön plana çıkacak'
    },
    {
      id: 11,
      title: 'İğneli Epilasyon',
      subtitle: 'Electrolysis',
      description: 'Elektrik akımı ile kalıcı tüy azaltma işlemi. Hassas bölgeler ve az sayıdaki tüyler için en etkili yöntem.',
      image: '/images/salon_hero.png',
      icon: Zap,
      duration: '30 dakika - 1 Saat',
      price: 'Fiyat için arayınız',
      features: [
        'Kalıcı tüy azaltma',
        'Hassas bölgeler için ideal',
        'Tek tek tüy işlemi',
        'Güvenli uygulama',
        'Etkili sonuçlar'
      ],
      beforeAfter: 'İstenmeyen tüylerden tamamen kurtulacaksınız'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Crown className="text-amber-600" size={32} />
            <span className="text-amber-600 font-medium text-xl">Profesyonel Hizmetler</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Güzellik Hizmetlerimiz
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            15 yıllık tecrübemiz ve modern ekipmanlarımızla, güzelliğiniz için en kaliteli hizmetleri sunuyoruz. 
            Her alanda uzman ekibimizle mükemmel sonuçlar elde edin.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                    <service.icon className="text-amber-600" size={24} />
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium opacity-90">{service.subtitle}</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 flex items-center">
                        <Clock size={14} className="mr-1" />
                        {service.duration}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Özellikler:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Check className="text-green-500 flex-shrink-0" size={16} />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Result */}
                  <div className="bg-gradient-to-r from-amber-50 to-rose-50 rounded-xl p-4 mb-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="text-amber-500" size={16} />
                      <span className="text-sm font-medium text-gray-700">Sonuç:</span>
                    </div>
                    <p className="text-sm text-gray-600">{service.beforeAfter}</p>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-bold text-amber-600">{service.price}</p>
                    </div>
                    <a
                      href="tel:+905396072520"
                      className="flex items-center space-x-2 bg-gradient-to-r from-amber-600 to-rose-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <Phone size={16} />
                      <span>Randevu Al</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Diğer Hizmetlerimiz
            </h2>
            <p className="text-lg text-gray-600">
              Güzelliğiniz için sunduğumuz diğer profesyonel hizmetler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Cilt Temizliği',
              'Yüz Masajı',
              'Kaş Şekillendirme',
              'Güzellik Danışmanlığı',
              'Gelin Bakım Paketi',
              'Özel Etkinlik Hazırlığı'
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-amber-600 to-rose-600 rounded-full"></div>
                  <h3 className="font-semibold text-gray-900">{service}</h3>
                </div>
                <p className="text-gray-600 text-sm mt-2">Detaylı bilgi için bizimle iletişime geçin</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 via-rose-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hangi Hizmetimizi Tercih Edeceksiniz?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Uzman ekibimizle güzelliğinize en uygun hizmeti belirleyelim
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="tel:+905396072520"
              className="flex items-center justify-center space-x-3 bg-white text-rose-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Phone size={20} />
              <span>Ücretsiz Danışmanlık</span>
            </a>
            <Link
              to="/iletisim"
              className="flex items-center justify-center space-x-3 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-rose-600 transition-all duration-300"
            >
              <span>İletişime Geç</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;