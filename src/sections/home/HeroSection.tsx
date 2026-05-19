import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Crown, Shield, Phone } from 'lucide-react';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const v = videoRef.current;
      const onPlay = () => setVideoVisible(true);
      v.addEventListener('playing', onPlay);
      v.play().catch(() => {});
      return () => v.removeEventListener('playing', onPlay);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
      setTimeout(() => setVideoVisible(true), 2000);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-maroon">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          videoVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src="/videos/hero_video.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay — ensures text readability on all devices */}
      <div className="absolute inset-0 bg-gradient-to-b from-maroon/70 via-maroon/50 to-maroon/80" />

      {/* Content wrapper with semi-transparent card for mobile clarity */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-[800px] mx-auto pt-16 sm:pt-20">
        {/* Semi-transparent background panel for text separation on mobile */}
        <div className="bg-black/20 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none rounded-2xl sm:rounded-none px-4 py-6 sm:p-0 border border-white/10 sm:border-none">
          {/* Heading */}
          <h1
            className={`font-playfair font-bold text-cream text-shadow-hero leading-tight transition-all duration-1000 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ fontSize: 'clamp(26px, 5vw, 56px)' }}
          >
            Purulia's Grandest Celebrations Deserve a Royal Feast.
          </h1>

          {/* Subheading */}
          <p
            className={`font-poppins text-cream/90 text-sm sm:text-lg mt-3 sm:mt-6 transition-all duration-1000 delay-200 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Give your guests an unforgettable culinary experience with zero hosting stress.
          </p>

          {/* Trust Badge */}
          <div
            className={`mt-5 sm:mt-8 inline-flex items-center gap-2 border border-gold/80 rounded-full px-3 sm:px-5 py-2 sm:py-2.5 animate-bob transition-all duration-700 delay-400 ${
              loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold" />
            <span className="font-poppins text-[10px] sm:text-xs text-cream">
              Serving Purulia Since 2017 | FSSAI Registered
            </span>
          </div>

          {/* CTA Button */}
          <div
            className={`mt-6 sm:mt-8 transition-all duration-1000 delay-600 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-maroon border-2 border-gold text-cream font-poppins font-semibold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-full hover:bg-gold hover:text-maroon hover:shadow-gold active:scale-[0.98] transition-all duration-300 animate-glow"
            >
              <Crown className="w-4 h-4 sm:w-5 sm:h-5" />
              Book Your Date Now
            </Link>
          </div>

          {/* Phone Quick Contact */}
          <div
            className={`mt-4 sm:mt-6 transition-all duration-1000 delay-700 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <a
              href="tel:+918945005456"
              className="inline-flex items-center gap-2 text-gold font-poppins text-xs sm:text-sm hover:text-cream transition-colors"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Or Call: +91 89450 05456
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
