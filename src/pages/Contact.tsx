import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  Send,
  User,
  Mail,
  MessageCircle,
  Calendar,
  CheckCircle,
  Navigation
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adres',
      content: 'Harbiye, Dikmen Cd 142/D',
      subtitle: '06460 Çankaya/Ankara',
      action: 'Yol Tarifi Al',
      link: 'https://maps.google.com/?q=Harbiye+Dikmen+Cd+142/D+06460+Çankaya+Ankara'
    },
    {
      icon: Phone,
      title: 'Telefon',
      content: '+90 539 607 25 20',
      subtitle: 'Randevu ve bilgi için',
      action: 'Hemen Ara',
      link: 'tel:+905396072520'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      content: '@sitemtazebeauty',
      subtitle: 'Güncel çalışmalarımız',
      action: 'Takip Et',
      link: 'https://www.instagram.com/sitemtazebeauty/'
    },
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      content: 'Pazartesi - Cumartesi: 09:00 - 19:30',
      subtitle: 'Pazar: Kapalı',
      action: 'Randevu Al',
      link: 'tel:+905396072520'
    }
  ];

  const services = [
    'Cilt Bakımı',
    'Protez Tırnak',
    'Manikür / Pedikür',
    'Kalıcı Makyaj',
    'Lazer Epilasyon',
    'İpek Kirpik',
    'Kaş Laminasyon',
    'Kirpik Lifting',
    'Bölgesel İncelme',
    'Makyaj',
    'İğneli Epilasyon',
    'Diğer'
  ];

  const faqs = [
    {
      question: 'Randevu nasıl alınır?',
      answer: 'Telefon numaramızı arayarak veya Instagram hesabımızdan mesaj atarak randevu alabilirsiniz.'
    },
    {
      question: 'Çalışma saatleriniz nedir?',
      answer: 'Pazartesi-Cumartesi 09:00-19:30 saatleri arasında hizmet veriyoruz. Pazar günü kapalıyız.'
    },
    {
      question: 'Fiyatlar hakkında bilgi alabilir miyim?',
      answer: 'Fiyatlarımız hizmet türüne göre değişmektedir. Detaylı bilgi için lütfen bizimle iletişime geçin.'
    },
    {
      question: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?',
      answer: 'Nakit, kredi kartı ve bankamatik kartı ile ödeme kabul edilmektedir.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Navigation className="text-amber-600" size={32} />
            <span className="text-amber-600 font-medium text-xl">İletişim</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Bizimle İletişime Geçin
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Sorularınız için bizimle iletişime geçin veya randevu alın. 
            15 yıllık tecrübemizle size en iyi hizmeti sunmaya hazırız.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-100">
                <div className="bg-gradient-to-r from-amber-100 to-rose-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="text-amber-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                <p className="text-gray-800 font-medium mb-2">{info.content}</p>
                <p className="text-gray-600 text-sm mb-6">{info.subtitle}</p>
                <a
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-600 to-rose-600 text-white px-4 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <span>{info.action}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-8">
                <MessageCircle className="text-amber-600" size={28} />
                <h2 className="text-3xl font-bold text-gray-900">Mesaj Gönderin</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      <User size={16} className="inline mr-2" />
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-100 transition-colors duration-200"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      <Phone size={16} className="inline mr-2" />
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-100 transition-colors duration-200"
                      placeholder="Telefon numaranız"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    <Mail size={16} className="inline mr-2" />
                    E-posta
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-100 transition-colors duration-200"
                    placeholder="E-posta adresiniz (opsiyonel)"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    <Calendar size={16} className="inline mr-2" />
                    İlgilendiğiniz Hizmet
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-100 transition-colors duration-200"
                  >
                    <option value="">Hizmet seçin</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    <MessageCircle size={16} className="inline mr-2" />
                    Mesajınız *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-100 transition-colors duration-200 resize-none"
                    placeholder="Mesajınızı buraya yazın..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-amber-600 to-rose-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle size={20} />
                      <span>Mesaj Gönderildi!</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Mesaj Gönder</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map & Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-white rounded-2xl p-2 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.2!2d32.8597!3d39.9334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDU2JzAwLjAiTiAzMsKwNTEnMzUuMCJF!5e0!3m2!1str!2str!4v1640000000000!5m2!1str!2str&q=Harbiye+Dikmen+Cd+142/D+06460+Çankaya+Ankara"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                  title="TazeBeauty Konum"
                />
              </div>

              {/* Quick Contact */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Hızlı İletişim</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+905396072520"
                    className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl hover:shadow-md transition-shadow duration-200"
                  >
                    <Phone className="text-green-600" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">Telefon ile ara</p>
                      <p className="text-sm text-gray-600">+90 539 607 25 20</p>
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/sitemtazebeauty/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl hover:shadow-md transition-shadow duration-200"
                  >
                    <Instagram className="text-pink-600" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">Instagram'dan mesaj</p>
                      <p className="text-sm text-gray-600">@sitemtazebeauty</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Merak ettiğiniz konularda hızlı cevaplar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 via-rose-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hemen Randevu Alın!
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Güzelliğiniz için bir adım daha yakın olun. Uzman ekibimizle tanışmak için bugün arayın.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="tel:+905396072520"
              className="flex items-center justify-center space-x-3 bg-white text-rose-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Phone size={20} />
              <span>Randevu Al</span>
            </a>
            <a
              href="https://maps.google.com/?q=Harbiye+Dikmen+Cd+142/D+06460+Çankaya+Ankara"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-rose-600 transition-all duration-300"
            >
              <MapPin size={20} />
              <span>Yol Tarifi</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;