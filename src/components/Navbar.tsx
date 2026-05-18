import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Crown, Phone } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/menus', label: 'Our Menus' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Home page: transparent → glass on scroll | Other pages: always maroon
  const navBg = isHomePage
    ? scrolled
      ? 'glass-nav shadow-lg'
      : 'bg-transparent'
    : 'glass-nav shadow-lg';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${navBg}`}>
      <div className="section-container flex items-center justify-between h-[70px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 rounded-full border-2 border-gold overflow-hidden group-hover:scale-105 transition-transform">
            <img
              src="./images/logo.jpg"
              alt="Maharaja Caterer Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-playfair font-bold text-cream text-lg hidden sm:block">
            Maharaja Caterer
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative font-poppins text-sm transition-colors group ${
                location.pathname === link.to
                  ? 'text-gold font-semibold'
                  : 'text-cream/90 hover:text-gold'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-gold transition-all duration-300 ${
                  location.pathname === link.to
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }`}
                style={{ transformOrigin: 'center' }}
              />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold text-maroon font-poppins font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-cream hover:text-maroon transition-all duration-300"
          >
            <Crown className="w-4 h-4" />
            Check Availability
          </Link>
        </div>

        {/* Phone Quick Link (Desktop) */}
        <a
          href="tel:+918945005456"
          className="hidden md:flex lg:hidden items-center gap-1.5 text-gold font-poppins text-sm hover:text-cream transition-colors"
        >
          <Phone className="w-4 h-4" />
          +91 89450 05456
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-cream p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-[70px] left-0 right-0 glass-nav overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="section-container py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-poppins text-sm transition-colors py-2 ${
                location.pathname === link.to
                  ? 'text-gold font-semibold'
                  : 'text-cream/90 hover:text-gold'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gold text-maroon font-poppins font-semibold text-sm px-5 py-2.5 rounded-full mt-2"
          >
            <Crown className="w-4 h-4" />
            Check Availability
          </Link>
          <a
            href="tel:+918945005456"
            className="flex items-center justify-center gap-2 text-gold font-poppins text-sm"
          >
            <Phone className="w-4 h-4" />
            +91 89450 05456
          </a>
        </div>
      </div>
    </nav>
  );
}
