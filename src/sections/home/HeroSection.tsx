import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Crown, Shield, Phone } from 'lucide-react';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="./images/hero_poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="./videos/hero_video.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-maroon/60" />
      <div className="absolute inset-0 bg-maroon/30" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-[800px] mx-auto pt-20">
        {/* Heading */}
        <h1
          className={`font-playfair font-bold text-cream text-shadow-hero leading-tight transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
        >
          Purulia's Grandest Celebrations Deserve a Royal Feast.
        </h1>

        {/* Subheading */}
        <p
          className={`font-poppins text-cream/90 text-lg mt-6 transition-all duration-1000 delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Give your guests an unforgettable culinary experience with zero hosting stress.
        </p>

        {/* Trust Badge */}
        <div
          className={`mt-8 inline-flex items-center gap-2 border border-gold rounded-full px-5 py-2.5 animate-bob transition-all duration-700 delay-400 ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <Shield className="w-4 h-4 text-gold" />
          <span className="font-poppins text-xs text-cream">
            Serving Purulia Since 2017 | FSSAI Registered | Lic. No. 12817016000590
          </span>
        </div>

        {/* CTA Button */}
        <div
          className={`mt-8 transition-all duration-1000 delay-600 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-maroon border-2 border-gold text-cream font-poppins font-semibold text-base px-8 py-4 rounded-full hover:bg-gold hover:text-maroon hover:shadow-gold active:scale-[0.98] transition-all duration-300 animate-glow"
          >
            <Crown className="w-5 h-5" />
            Book Your Date Now
          </Link>
        </div>

        {/* Phone Quick Contact */}
        <div
          className={`mt-6 transition-all duration-1000 delay-700 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <a
            href="tel:+918945005456"
            className="inline-flex items-center gap-2 text-gold font-poppins text-sm hover:text-cream transition-colors"
          >
            <Phone className="w-4 h-4" />
            Or Call: +91 89450 05456
          </a>
        </div>
      </div>
    </section>
  );
}
