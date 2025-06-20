import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Instagram } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Hizmetler', path: '/hizmetler' },
    { name: 'Hakkımızda', path: '/hakkimizda' },
    { name: 'Galeri', path: '/galeri' },
    { name: 'İletişim', path: '/iletisim' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/images/image.png" 
              alt="Sitem Taze Güzellik Salonu Logo" 
              className="h-12 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                Sitem Taze Güzellik Salonu
              </span>
              <span className="text-xs text-gray-600 font-medium">
                15 YILLIK DENEYİM
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-amber-600'
                    : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-amber-600 to-rose-600"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+905396072520"
              className="flex items-center space-x-2 bg-gradient-to-r from-amber-600 to-rose-600 text-white px-4 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              <Phone size={16} />
              <span>Ara</span>
            </a>
            <a
              href="https://www.instagram.com/sitemtazebeauty/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-pink-600 hover:bg-pink-50 rounded-full transition-colors duration-200"
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-amber-600 hover:bg-gray-100 transition-colors duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-amber-600'
                      : 'text-gray-700 hover:text-amber-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-3 pt-4 border-t border-gray-200">
                <a
                  href="tel:+905396072520"
                  className="flex items-center space-x-2 bg-gradient-to-r from-amber-600 to-rose-600 text-white px-4 py-2 rounded-full font-medium flex-1 justify-center"
                >
                  <Phone size={16} />
                  <span>Ara</span>
                </a>
                <a
                  href="https://www.instagram.com/sitemtazebeauty/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-pink-600 hover:bg-pink-50 rounded-full"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;