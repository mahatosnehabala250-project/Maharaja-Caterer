import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Crown, Phone } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/menus', label: 'Our Menus' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileAnimating, setMobileAnimating] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setMobileAnimating(true);
    }
  }, [isOpen]);

  const closeMobile = () => {
    setMobileAnimating(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  useEffect(() => {
    closeMobile();
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
              src="/images/logo.jpg"
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
            className="inline-flex items-center gap-2 bg-gold text-maroon font-poppins font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-cream hover:text-maroon transition-all duration-300 hover:shadow-gold"
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
          onClick={() => {
            if (isOpen) {
              closeMobile();
            } else {
              setIsOpen(true);
              setMobileAnimating(true);
            }
          }}
          className="lg:hidden text-cream p-2 relative z-[1001]"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-[2px] bg-cream rounded transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
            <span className={`block h-[2px] bg-cream rounded transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : ''}`} />
            <span className={`block h-[2px] bg-cream rounded transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu - Slide-in overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-[70px] transition-all duration-300 ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMobile}
        />

        {/* Slide-in Panel */}
        <div
          className={`absolute top-0 right-0 w-[280px] max-w-[80vw] h-full bg-maroon shadow-2xl transition-transform duration-300 ease-out ${
            mobileAnimating ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Gold top accent */}
          <div className="h-1 bg-gradient-to-r from-gold via-yellow-400 to-gold" />

          <div className="p-6 flex flex-col gap-1">
            {/* Nav links with staggered animation */}
            {navLinks.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMobile}
                className={`font-poppins text-base py-3 px-4 rounded-xl transition-all duration-200 ${
                  location.pathname === link.to
                    ? 'bg-gold/15 text-gold font-semibold border-l-4 border-gold'
                    : 'text-cream/90 hover:text-gold hover:bg-cream/5'
                }`}
                style={{ transitionDelay: isOpen ? `${i * 50}ms` : '0ms' }}
              >
                {link.label}
              </Link>
            ))}

            {/* Divider */}
            <div className="h-[1px] bg-gold/20 my-3 mx-4" />

            {/* CTA */}
            <Link
              to="/contact"
              onClick={closeMobile}
              className="inline-flex items-center justify-center gap-2 bg-gold text-maroon font-poppins font-semibold text-sm px-5 py-3 rounded-xl mt-2"
            >
              <Crown className="w-4 h-4" />
              Check Availability
            </Link>

            {/* Phone */}
            <a
              href="tel:+918945005456"
              className="flex items-center justify-center gap-2 text-gold font-poppins text-sm py-3 border border-gold/20 rounded-xl mt-2 hover:bg-gold/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91 89450 05456
            </a>
          </div>

          {/* Bottom decoration */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-center">
              <p className="font-vibes text-gold text-lg">Royal Feast Awaits</p>
              <p className="font-inter text-cream/40 text-[10px] mt-1">Serving Purulia since 2017</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
