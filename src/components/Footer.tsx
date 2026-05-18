import { Link } from 'react-router-dom';
import { Facebook, Phone, MessageCircle } from 'lucide-react';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/menus', label: 'Our Menus' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/contact', label: 'Book Now' },
];

const services = [
  'Wedding Catering',
  'Birthday Events',
  'Religious Functions',
  'Buffet Setup',
  'Stage Decoration',
  'Event Planning',
];

export default function Footer() {
  return (
    <footer className="bg-maroon text-cream">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-10">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full border-2 border-gold overflow-hidden">
                <img
                  src="./images/logo.jpg"
                  alt="Maharaja Caterer Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-playfair font-bold text-xl text-cream">
                Maharaja Caterer
              </span>
            </div>
            <p className="font-inter text-sm text-cream/80 leading-relaxed mb-4">
              Serving Purulia with pride since 2017. FSSAI Lic. No. 12817016000590
            </p>
            <div className="flex items-center gap-2 text-xs text-cream/60 bg-cream/10 inline-flex px-3 py-1.5 rounded-full">
              <img
                src="./images/logo.jpg"
                alt="FSSAI"
                className="w-5 h-5 rounded-full"
              />
              FSSAI Certified
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-gold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="font-inter text-sm text-cream/80 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-poppins font-semibold text-gold text-sm uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <span className="font-inter text-sm text-cream/80">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/30">
        <div className="section-container py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-cream/60 text-center sm:text-left">
            &copy; 2026 Maharaja Caterer. All rights reserved. | Crafted with care in Purulia, West Bengal.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=100054214612708"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center text-cream hover:bg-gold hover:text-maroon transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/918945005456"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center text-cream hover:bg-gold hover:text-maroon transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="tel:+918945005456"
              className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center text-cream hover:bg-gold hover:text-maroon transition-all duration-300"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
