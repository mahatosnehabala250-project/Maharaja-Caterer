import { Crown, Star, Gem, Sparkles } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';
import { MessageCircle } from 'lucide-react';

const packages = [
  {
    icon: Star,
    name: 'Basic',
    tagline: 'Perfect for small gatherings',
    price: 'Starting ₹8,000',
    features: [
      'Up to 100 guests',
      '2 Veg + 2 Non-Veg items',
      'Rice, Roti, Dal',
      'Basic dessert',
      'Buffet setup',
    ],
    popular: false,
  },
  {
    icon: Crown,
    name: 'Royal',
    tagline: 'Most popular for weddings',
    price: 'Starting ₹25,000',
    features: [
      'Up to 500 guests',
      'Full Bengali + North Indian menu',
      'Starters to desserts',
      'Live tandoor counter',
      'Chafing dish setup',
      'Stage decoration basic',
    ],
    popular: true,
  },
  {
    icon: Gem,
    name: 'Maharaja',
    tagline: 'The complete royal experience',
    price: 'Custom Quote',
    features: [
      'Unlimited guests',
      'Bengali + North Indian + Chinese',
      'Premium starters & desserts',
      'Live counters (3+)',
      'Full stage & mandap decor',
      'Dedicated event manager',
      'Lighting & sound setup',
    ],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section className="py-20 lg:py-28 bg-maroon relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)`,
        backgroundSize: '30px 30px',
      }} />

      {/* Top gold border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="section-container relative z-10">
        <SectionReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-4">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="font-poppins text-gold text-xs uppercase tracking-wider">Packages</span>
            </div>
            <h2 className="font-playfair font-bold text-cream text-3xl lg:text-4xl">
              Choose Your Royal Package
            </h2>
            <p className="font-inter text-cream/60 text-sm mt-3 max-w-[600px] mx-auto">
              Every celebration is unique. Pick a package or tell us your requirements for a custom quote.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
          {packages.map((pkg, i) => (
            <SectionReveal key={pkg.name} delay={0.15 * (i + 1)}>
              <div className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                pkg.popular
                  ? 'bg-gradient-to-b from-gold/20 to-maroon border-2 border-gold shadow-gold scale-[1.02]'
                  : 'bg-cream/5 border border-cream/10 hover:border-gold/30'
              }`}>
                {/* Popular badge */}
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="font-poppins font-semibold text-maroon text-xs bg-gold px-4 py-1 rounded-full shadow-gold">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-14 h-14 mx-auto mb-5 rounded-full flex items-center justify-center ${
                  pkg.popular ? 'bg-gold/20' : 'bg-cream/10'
                }`}>
                  <pkg.icon className={`w-7 h-7 ${pkg.popular ? 'text-gold' : 'text-cream/70'}`} />
                </div>

                {/* Name & Tagline */}
                <h3 className={`font-playfair font-bold text-xl text-center mb-1 ${
                  pkg.popular ? 'text-gold' : 'text-cream'
                }`}>
                  {pkg.name}
                </h3>
                <p className="font-poppins text-cream/50 text-xs text-center uppercase tracking-wider mb-4">
                  {pkg.tagline}
                </p>

                {/* Price */}
                <div className="text-center mb-6 pb-6 border-b border-cream/10">
                  <span className={`font-poppins font-bold text-2xl ${
                    pkg.popular ? 'text-gold' : 'text-cream'
                  }`}>
                    {pkg.price}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      <span className="font-inter text-cream/80 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`https://wa.me/918945005456?text=${encodeURIComponent(`Hi Maharaja Caterer, I'm interested in the ${pkg.name} package. Please share details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 font-poppins font-semibold text-sm py-3.5 rounded-full transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gold text-maroon hover:bg-cream'
                      : 'bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-maroon'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  Enquire Now
                </a>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Note */}
        <SectionReveal delay={0.5}>
          <p className="text-center font-inter text-cream/40 text-xs mt-10">
            * Prices are indicative and may vary based on menu selection, guest count, and event requirements. Contact us for a detailed quote.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
