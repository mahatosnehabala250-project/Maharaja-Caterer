import { Star, Facebook } from 'lucide-react';
import SectionReveal from '../../components/SectionReveal';

const testimonials = [
  {
    text: 'Starters to desserts — everything was top notch. Best caterer in Purulia for wedding feasts!',
    name: 'Somnath Dutta',
    rating: 5,
  },
  {
    text: 'Dishes were beautifully arranged — a treat for both eyes and taste buds. Highly recommended!',
    name: 'Debkumar Banerjee',
    rating: 5,
  },
  {
    text: 'Fresh, flavorful food with a wide variety. Guests could not stop praising the menu.',
    name: 'Sanjib Seth',
    rating: 5,
  },
  {
    text: 'Very good food quality and the staff was well-trained and courteous. Will book again!',
    name: 'Rabijyoti Bera',
    rating: 5,
  },
  {
    text: 'Maharaja Caterer made our Biye Bari special. The Kosha Mangsho and Basanti Pulao were divine.',
    name: 'Animesh Mahato',
    rating: 5,
  },
  {
    text: 'On-time service, clean setup, and the buffet arrangement was superb. Five stars!',
    name: 'Priya Mukherjee',
    rating: 5,
  },
  {
    text: 'We booked them for my daughter birthday. Kids and adults both loved the food. Thank you!',
    name: 'Rupak Dey',
    rating: 5,
  },
  {
    text: 'The thali arrangement looked royal. Every dish was hot and fresh. Professional team.',
    name: 'Sujata Karmakar',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-cream overflow-hidden">
      <div className="section-container mb-12">
        <SectionReveal>
          <div className="text-center">
            <span className="font-poppins text-gold text-xs uppercase tracking-[2px]">
              Testimonials
            </span>
            <h2 className="font-playfair font-bold text-maroon text-3xl lg:text-4xl mt-3">
              What Our Clients Say
            </h2>
          </div>
        </SectionReveal>
      </div>

      {/* Marquee */}
      <div className="relative group">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[350px] mx-3 bg-white rounded-xl p-8 border-l-4 border-maroon shadow-card"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star
                    key={si}
                    className="w-4 h-4 text-gold fill-gold"
                  />
                ))}
              </div>
              {/* Quote */}
              <p className="font-inter text-charcoal text-sm leading-relaxed mb-4">
                "{t.text}"
              </p>
              {/* Name */}
              <p className="font-poppins font-semibold text-maroon text-sm">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Facebook Callout */}
      <div className="section-container mt-12">
        <SectionReveal delay={0.3}>
          <div className="flex justify-center">
            <a
              href="https://www.facebook.com/profile.php?id=100054214612708"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border-2 border-gold rounded-xl px-8 py-4 hover:bg-gold hover:text-maroon transition-all duration-300 group"
            >
              <Facebook className="w-5 h-5 text-blue-600 group-hover:text-maroon transition-colors" />
              <span className="font-poppins font-medium text-maroon text-sm group-hover:text-maroon">
                Join our community of 1K+ Followers on Facebook
              </span>
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
