import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Star, 
  Award, 
  Users, 
  Shield, 
  Sparkles,
  Clock,
  MapPin,
  Phone,
  CheckCircle,
  Target,
  Eye
} from 'lucide-react';

const About = () => {
  useEffect(() => {
    document.title = 'Hakkımızda - SitemTaze Güzellik Salonu';
  }, []);

  const values = [
    {
      icon: Heart,
      title: 'Kalite',
      description: 'En kaliteli ürünler ve profesyonel hizmet anlayışı'
    },
    {
      icon: Shield,
      title: 'Güven',
      description: '15 yıllık tecrübe ile güvenilir hizmet sunuyoruz'
    },
    {
      icon: Sparkles,
      title: 'Yenilikçilik',
      description: 'Sektördeki en son teknolojileri takip ediyoruz'
    },
    {
      icon: Users,
      title: 'Müşteri Memnuniyeti',
      description: 'Müşteri memnuniyeti her zaman önceliğimizdir'
    }
  ];

  const timeline = [
    {
      year: '2009',
      title: 'Kuruluş',
      description: 'Sitem Taze Güzellik Salonu Ankara\'da hizmete başladı'
    },
    {
      year: '2015',
      title: 'Genişleme',
      description: 'Yeni teknolojiler ve hizmet alanları eklendi'
    },
    {
      year: '2020',
      title: 'Yenileme',
      description: 'Modern salon tasarımı ve ekipman yenileme'
    },
    {
      year: '2024',
      title: 'Bugün',
      description: '15+ yıl tecrübe ile binlerce mutlu müşteri'
    }
  ];

  const team = [
    {
      name: 'Sitem Hanım',
      role: 'Kurucu & Uzman Estetisyen',
      experience: '15+ Yıl',
      specialties: ['Dudak Renklendirme', 'Cilt Bakımı', 'Genel Koordinasyon']
    }
  ];

  const achievements = [
    { icon: Users, number: '1000+', text: 'Mutlu Müşteri' },
    { icon: Award, number: '15+', text: 'Yıl Tecrübe' },
    { icon: Star, number: '4.9/5', text: 'Müşteri Puanı' },
    { icon: CheckCircle, number: '100%', text: 'Hijyen Standardı' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Heart className="text-rose-600" size={32} />
                <span className="text-rose-600 font-medium text-xl">Hakkımızda</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                <span className="bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                  TazeBeauty
                </span>
                <br />
                <span className="text-3xl md:text-4xl">Güzellik Merkezi</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                15 yıllık tecrübe ve deneyimimizle güzellik dünyasında 
                sizlere en kaliteli hizmeti sunuyoruz.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/salon_hero.png"
                alt="TazeBeauty Salon"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-center">
                  <Award className="text-amber-600 mx-auto mb-2" size={32} />
                  <p className="font-bold text-2xl text-gray-900">15+</p>
                  <p className="text-sm text-gray-600">Yıl Tecrübe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Target className="text-amber-600" size={28} />
                <h2 className="text-3xl font-bold text-gray-900">Misyonumuz</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Güzellik ve bakım sektöründe en kaliteli hizmeti sunarak, 
                müşterilerimizin kendilerini güzel ve değerli hissetmelerini sağlamak. 
                15 yıllık tecrübemiz ve uzman ekibimizle, her müşterimize özel çözümler üretiyoruz.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Hijyen, kalite ve müşteri memnuniyetini ön planda tutarak, 
                sektörde güvenilir bir marka olmaya devam ediyoruz.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Eye className="text-rose-600" size={28} />
                <h2 className="text-3xl font-bold text-gray-900">Vizyonumuz</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ankara'nın en güvenilir ve kaliteli güzellik merkezi olarak, 
                güzellik sektöründe öncü olmaya devam etmek. Yenilikçi teknolojiler 
                ve sürekli eğitimle kendimizi geliştirerek, müşterilerimize en iyi deneyimi sunmak.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Güzelliğin her kadının hakkı olduğu inancıyla, 
                herkes için erişilebilir kaliteli hizmet sunmayı hedefliyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Değerlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TazeBeauty olarak benimsediğimiz temel değerler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="bg-gradient-to-r from-amber-100 to-rose-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-amber-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Bizim Hikayemiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              15 yıllık yolculuğumuzda attığımız önemli adımlar
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-amber-600 to-rose-600"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <div className="text-2xl font-bold text-amber-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-gradient-to-r from-amber-600 to-rose-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Uzman Ekibimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alanında uzman, deneyimli ve güler yüzlü ekibimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center max-w-sm mx-auto">
                <div className="w-24 h-24 bg-gradient-to-r from-amber-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="text-rose-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-rose-600 font-medium mb-3">{member.role}</p>
                <p className="text-amber-600 font-semibold mb-4">{member.experience}</p>
                <div className="space-y-2">
                  {member.specialties.map((specialty, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-full px-3 py-1 text-sm text-gray-600">
                      {specialty}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Başarılarımız
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              15 yıllık yolculuğumuzda elde ettiğimiz başarılar
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-amber-100 to-rose-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="text-amber-600" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</h3>
                <p className="text-gray-600 font-medium">{achievement.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-600 via-rose-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bize Katılın!
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            TazeBeauty ailesinin bir parçası olun ve güzelliğinizi keşfedin
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="tel:+905396072520"
              className="flex items-center justify-center space-x-3 bg-white text-rose-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Phone size={20} />
              <span>Randevu Al</span>
            </a>
            <Link
              to="/iletisim"
              className="flex items-center justify-center space-x-3 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-rose-600 transition-all duration-300"
            >
              <MapPin size={20} />
              <span>Bizi Ziyaret Edin</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;