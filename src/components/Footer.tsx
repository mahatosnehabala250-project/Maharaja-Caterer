import { Link } from 'react-router-dom';
import { Facebook, Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';

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
  'Corporate Events',
  'Anniversary Parties',
];

const serviceAreas = [
  'Purulia Town',
  'Nadiha',
  'Chowk Bazar',
  'Dulmi',
  'Raghunathpur',
  'Adra',
  'Jhalda',
];

export default function Footer() {
  return (
    <footer className="bg-maroon text-cream relative">
      {/* Gold gradient top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="section-container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full border-2 border-gold overflow-hidden">
                <img
                  src="/images/logo.jpg"
                  alt="Maharaja Caterer Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-playfair font-bold text-xl text-cream block">
                  Maharaja Caterer
                </span>
                <span className="font-vibes text-gold text-sm">Royal Feast Since 2017</span>
              </div>
            </div>
            <p className="font-inter text-sm text-cream/80 leading-relaxed mb-4">
              Purulia's premier catering service specializing in Bengali, North Indian, Chinese, and Tandoori cuisines. Every event crafted with passion and precision.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-4">
              <a
                href="tel:+918945005456"
                className="flex items-center gap-2 text-cream/70 hover:text-gold transition-colors text-sm"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                +91 89450 05456 / +91 82938 29200
              </a>
              <a
                href="mailto:maharajaCaterer104@gmail.com"
                className="flex items-center gap-2 text-cream/70 hover:text-gold transition-colors text-sm"
              >
                <Mail className="w-3.5 h-3.5 text-gold" />
                maharajaCaterer104@gmail.com
              </a>
              <div className="flex items-center gap-2 text-cream/70 text-sm">
                <MapPin className="w-3.5 h-3.5 text-gold" />
                Near Fan House, Nadiha, Purulia
              </div>
              <div className="flex items-center gap-2 text-cream/70 text-sm">
                <Clock className="w-3.5 h-3.5 text-gold" />
                Open Daily: 9 AM - 10 PM
              </div>
            </div>

            {/* FSSAI Badge */}
            <div className="flex items-center gap-2 text-xs text-cream/60 bg-cream/10 inline-flex px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
              FSSAI Licensed & Certified
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-gold text-sm uppercase tracking-wider mb-4 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-gold" />
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="font-inter text-sm text-cream/80 hover:text-gold hover:pl-2 transition-all duration-300 inline-flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/40" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-poppins font-semibold text-gold text-sm uppercase tracking-wider mb-4 relative">
              Services
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-gold" />
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <span className="font-inter text-sm text-cream/80 hover:text-gold hover:pl-1 inline-block transition-all duration-300">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-poppins font-semibold text-gold text-sm uppercase tracking-wider mb-4 relative">
              We Serve
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-gold" />
            </h4>
            <ul className="space-y-2.5">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <span className="font-inter text-sm text-cream/80 hover:text-gold hover:pl-1 inline-block transition-all duration-300">
                    {area}
                  </span>
                </li>
              ))}
            </ul>

            {/* WhatsApp CTA */}
            <div className="mt-6">
              <a
                href="https://wa.me/918945005456?text=Hi%20Maharaja%20Caterer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-whatsapp/20 border border-whatsapp/30 text-whatsapp font-poppins font-medium text-xs px-4 py-2.5 rounded-full hover:bg-whatsapp hover:text-white transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                Quick Chat
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/20">
        <div className="section-container py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-cream/50 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Maharaja Caterer. All rights reserved. | Crafted with care in Purulia, West Bengal.
          </p>
          <div className="flex items-center gap-2">
            <a
              href="https://www.facebook.com/profile.php?id=100054214612708"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-cream/10 flex items-center justify-center text-cream hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/918945005456"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-cream/10 flex items-center justify-center text-cream hover:bg-whatsapp hover:text-white hover:scale-110 transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="tel:+918945005456"
              className="w-9 h-9 rounded-full bg-cream/10 flex items-center justify-center text-cream hover:bg-gold hover:text-maroon hover:scale-110 transition-all duration-300"
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
