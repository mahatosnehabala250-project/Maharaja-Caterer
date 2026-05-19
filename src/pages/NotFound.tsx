import { Home, Menu, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center pt-[70px]">
      <div className="section-container text-center py-20">
        {/* Decorative gold border */}
        <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />

        {/* 404 Number */}
        <div className="mb-6">
          <span className="font-playfair font-bold text-[120px] lg:text-[180px] leading-none text-maroon/10">
            404
          </span>
        </div>

        {/* Crown icon */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center border-2 border-gold">
          <Crown className="w-8 h-8 text-gold" />
        </div>

        {/* Message */}
        <h1 className="font-playfair font-bold text-maroon text-3xl lg:text-4xl mb-4">
          Page Not Found
        </h1>
        <p className="font-inter text-charcoal/70 text-base max-w-[500px] mx-auto mb-8 leading-relaxed">
          The royal page you are looking for does not exist or has been moved.
          Let us take you back to the feast.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-maroon border-2 border-gold text-cream font-poppins font-semibold text-base px-8 py-3.5 rounded-full hover:bg-gold hover:text-maroon transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <Link
            to="/menus"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-maroon text-maroon font-poppins font-semibold text-base px-8 py-3.5 rounded-full hover:bg-maroon hover:text-cream transition-all duration-300"
          >
            <Menu className="w-5 h-5" />
            View Our Menus
          </Link>
        </div>

        {/* Bottom decorative */}
        <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-12" />
      </div>
    </div>
  );
}
