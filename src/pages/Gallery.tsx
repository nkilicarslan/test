import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Camera, 
  Instagram, 
  Phone, 
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

const Gallery = () => {
  useEffect(() => {
    document.title = 'Galeri - SitemTaze Güzellik Salonu';
  }, []);

  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tümü' },
    { id: 'lips', name: 'Dudak Renklendirme' },
    { id: 'eyelash', name: 'İpek Kirpik' },
    { id: 'nails', name: 'Protez Tırnak' },
    { id: 'salon', name: 'Salon' }
  ];

  const galleryImages = [
    {
      id: 1,
      src: '/images/lip_service.png',
      category: 'lips',
      title: 'Dudak Renklendirme',
      description: 'Profesyonel permanent makeup uygulaması'
    },
    {
      id: 2,
      src: '/images/eyelash_service.png',
      category: 'eyelash',
      title: 'İpek Kirpik Uygulaması',
      description: 'Doğal ve uzun kirpikler için ipek kirpik'
    },
    {
      id: 3,
      src: '/images/nail_service.png',
      category: 'nails',
      title: 'Protez Tırnak Tasarımı',
      description: 'Renkli ve şık tırnak tasarımları'
    },
    {
      id: 4,
      src: '/images/salon_hero.png',
      category: 'salon',
      title: 'Salon İç Mekanı',
      description: 'Modern ve hijyenik salon ortamımız'
    },
    {
      id: 5,
      src: '/images/galeri_logo.jpeg',
      category: 'salon',
      title: 'Sitem Taze Logo',
      description: 'Sitem Taze Beauty logomuzu salon girişinde görebilirsiniz'
    },
    {
      id: 6,
      src: '/images/image_1.png',
      category: 'salon',
      title: 'Salon Girişi',
      description: 'Sitem Taze Beauty salon duvar yazımız'
    },
    {
      id: 7,
      src: '/images/image_2.png',
      category: 'all',
      title: 'Hizmetlerimiz',
      description: '15 senelik deneyim ile sunduğumuz 11 farklı hizmet'
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  const beforeAfterSamples = [
    {
      title: 'Dudak Renklendirme',
      before: 'Doğal dudak rengi',
      after: 'Kalıcı renklendirme sonrası',
      description: 'Profesyonel permanent makeup uygulaması ile doğal ve kalıcı sonuçlar'
    },
    {
      title: 'İpek Kirpik',
      before: 'Doğal kirpikler',
      after: 'İpek kirpik uygulaması sonrası',
      description: 'Uzun, dolgun ve doğal görünümlü kirpikler'
    },
    {
      title: 'Protez Tırnak',
      before: 'Kısa doğal tırnaklar',
      after: 'Protez tırnak uygulaması',
      description: 'Uzun, şık ve dayanıklı tırnak tasarımları'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Camera className="text-amber-600" size={32} />
            <span className="text-amber-600 font-medium text-xl">Çalışmalarımız</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Galeri & Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            15 yıllık tecrübemizle gerçekleştirdiğimiz çalışmaları inceleyin. 
            Her müşterimize özel yaklaşımımızla elde ettiğimiz başarılı sonuçları görün.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="https://www.instagram.com/sitemtazebeauty/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              <Instagram size={20} />
              <span>@sitemtazebeauty</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-amber-600 to-rose-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => openModal(index)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold mb-1">{image.title}</h3>
                  <p className="text-sm text-white/90">{image.description}</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye size={16} className="text-gray-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Öncesi & Sonrası
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesyonel uygulamalarımızın öncesi ve sonrası karşılaştırmaları
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beforeAfterSamples.map((sample, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">{sample.title}</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Öncesi:</h4>
                    <p className="text-gray-600">{sample.before}</p>
                  </div>
                  <div className="bg-gradient-to-r from-amber-50 to-rose-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Sonrası:</h4>
                    <p className="text-gray-600">{sample.after}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 text-center">{sample.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Instagram size={48} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Daha Fazla Çalışma İçin
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Instagram hesabımızı takip ederek güncel çalışmalarımızı ve özel tekliflerimizi kaçırmayın
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="https://www.instagram.com/sitemtazebeauty/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Instagram size={20} />
              <span>Takip Et</span>
            </a>
            <a
              href="tel:+905396072520"
              className="flex items-center justify-center space-x-3 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              <Phone size={20} />
              <span>Randevu Al</span>
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors duration-200 z-10"
            >
              <X size={24} />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors duration-200 z-10"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors duration-200 z-10"
            >
              <ChevronRight size={24} />
            </button>

            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">{filteredImages[selectedImage].title}</h3>
              <p className="text-white/90">{filteredImages[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;