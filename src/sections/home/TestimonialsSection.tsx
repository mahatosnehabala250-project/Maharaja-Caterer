import { Star, Facebook, Quote } from 'lucide-react';
import SectionReveal from '../../components/SectionReveal';

const testimonials = [
  {
    text: 'Starters to desserts — everything was top notch. Best caterer in Purulia for wedding feasts!',
    name: 'Somnath Dutta',
    event: 'Wedding',
    rating: 5,
  },
  {
    text: 'Dishes were beautifully arranged — a treat for both eyes and taste buds. Highly recommended!',
    name: 'Debkumar Banerjee',
    event: 'Anniversary',
    rating: 5,
  },
  {
    text: 'Fresh, flavorful food with a wide variety. Guests could not stop praising the menu.',
    name: 'Sanjib Seth',
    event: 'Corporate Event',
    rating: 5,
  },
  {
    text: 'Very good food quality and the staff was well-trained and courteous. Will book again!',
    name: 'Rabijyoti Bera',
    event: 'Birthday',
    rating: 5,
  },
  {
    text: 'Maharaja Caterer made our Biye Bari special. The Kosha Mangsho and Basanti Pulao were divine.',
    name: 'Animesh Mahato',
    event: 'Wedding',
    rating: 5,
  },
  {
    text: 'On-time service, clean setup, and the buffet arrangement was superb. Five stars!',
    name: 'Priya Mukherjee',
    event: 'Reception',
    rating: 5,
  },
  {
    text: "We booked them for my daughter's birthday. Kids and adults both loved the food. Thank you!",
    name: 'Rupak Dey',
    event: 'Birthday',
    rating: 5,
  },
  {
    text: 'The thali arrangement looked royal. Every dish was hot and fresh. Professional team.',
    name: 'Sujata Karmakar',
    event: 'Religious Function',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-cream overflow-hidden relative">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #800020 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="section-container mb-12 relative z-10">
        <SectionReveal>
          <div className="text-center">
            <span className="font-poppins text-gold text-xs uppercase tracking-[2px]">
              Testimonials
            </span>
            <h2 className="font-playfair font-bold text-maroon text-3xl lg:text-4xl mt-3">
              What Our Clients Say
            </h2>
            <p className="font-inter text-charcoal/60 text-sm mt-3 max-w-[500px] mx-auto">
              Real reviews from real families who trusted us with their celebrations
            </p>
          </div>
        </SectionReveal>
      </div>

      {/* Marquee */}
      <div className="relative group">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[340px] mx-3 bg-white rounded-2xl p-7 border border-gold/10 shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group/card"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover/card:opacity-20 transition-opacity">
                <Quote className="w-10 h-10 text-gold" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star
                    key={si}
                    className="w-4 h-4 text-gold fill-gold"
                  />
                ))}
              </div>

              {/* Event tag */}
              <span className="inline-block bg-maroon/5 text-maroon font-poppins text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full mb-3">
                {t.event}
              </span>

              {/* Quote */}
              <p className="font-inter text-charcoal text-sm leading-relaxed mb-5">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Name with avatar placeholder */}
              <div className="flex items-center gap-3 pt-3 border-t border-gold/10">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-maroon to-maroon/70 flex items-center justify-center">
                  <span className="font-poppins font-semibold text-cream text-xs">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-poppins font-semibold text-maroon text-sm">
                    {t.name}
                  </p>
                  <p className="font-inter text-charcoal/50 text-[10px]">
                    Verified Client
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Facebook Callout */}
      <div className="section-container mt-12 relative z-10">
        <SectionReveal delay={0.3}>
          <div className="flex justify-center">
            <a
              href="https://www.facebook.com/profile.php?id=100054214612708"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white border-2 border-gold/30 rounded-2xl px-8 py-4 hover:bg-gold hover:border-gold transition-all duration-300 group hover:shadow-gold"
            >
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Facebook className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <span className="font-poppins font-semibold text-maroon text-sm group-hover:text-maroon block">
                  Join 1K+ Followers on Facebook
                </span>
                <span className="font-inter text-charcoal/50 text-xs">
                  See real photos, reviews & updates
                </span>
              </div>
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
