import { useState, useRef, useCallback, useEffect } from 'react';
import { Star, Facebook, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
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

/* ─── Single Testimonial Card ─── */
function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[340px] mx-3 bg-white rounded-2xl p-7 border border-gold/10 shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group/card">
      {/* Quote icon */}
      <div className="absolute top-4 right-4 opacity-10 group-hover/card:opacity-20 transition-opacity">
        <Quote className="w-10 h-10 text-gold" />
      </div>

      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: t.rating }).map((_, si) => (
          <Star key={si} className="w-4 h-4 text-gold fill-gold" />
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
            {t.name.split(' ').map((n) => n[0]).join('')}
          </span>
        </div>
        <div>
          <p className="font-poppins font-semibold text-maroon text-sm">{t.name}</p>
          <p className="font-inter text-charcoal/50 text-[10px]">Verified Client</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Mobile Swipeable Carousel ─── */
function MobileCarousel() {
  const [current, setCurrent] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const dragDelta = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = testimonials.length;
  const cardWidth = 300; // matches TestimonialCard w-[300px] on mobile

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-play — pauses while user is dragging
  useEffect(() => {
    if (dragging) return;
    const timer = setInterval(goNext, 4000);
    return () => clearInterval(timer);
  }, [dragging, goNext]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setDragging(true);
    startX.current = e.touches[0].clientX;
    dragDelta.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    dragDelta.current = e.touches[0].clientX - startX.current;
    if (containerRef.current) {
      const base = -current * (cardWidth + 24); // 24 = mx-3 gap
      containerRef.current.style.transform = `translateX(${base + dragDelta.current}px)`;
      containerRef.current.style.transition = 'none';
    }
  };

  const handleTouchEnd = () => {
    setDragging(false);
    if (Math.abs(dragDelta.current) > 50) {
      if (dragDelta.current < 0) goNext();
      else goPrev();
    }
    // Reset transform (React state will handle it)
    if (containerRef.current) {
      containerRef.current.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)';
      containerRef.current.style.transform = `translateX(${-current * (cardWidth + 24)}px)`;
    }
  };

  // Sync transform when current changes
  useEffect(() => {
    if (containerRef.current && !dragging) {
      containerRef.current.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)';
      containerRef.current.style.transform = `translateX(${-current * (cardWidth + 24)}px)`;
    }
  }, [current, dragging]);

  return (
    <div className="lg:hidden">
      {/* Carousel viewport */}
      <div className="relative overflow-hidden">
        {/* Left/Right arrows */}
        <button
          onClick={goPrev}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-maroon/80 text-cream flex items-center justify-center shadow-lg active:scale-95 transition-transform"
          aria-label="Previous review"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={goNext}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-maroon/80 text-cream flex items-center justify-center shadow-lg active:scale-95 transition-transform"
          aria-label="Next review"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Scrollable track */}
        <div
          className="flex cursor-grab active:cursor-grabbing px-4 py-2"
          style={{ willChange: 'transform' }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div ref={containerRef} className="flex" style={{ willChange: 'transform' }}>
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-5">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'w-6 h-2 bg-maroon'
                : 'w-2 h-2 bg-maroon/25'
            }`}
            aria-label={`Go to review ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Desktop Marquee ─── */
function DesktopMarquee() {
  return (
    <div className="hidden lg:block relative group">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
        {[...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>
    </div>
  );
}

/* ─── Main Section ─── */
export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-cream overflow-hidden relative">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #800020 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

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

      {/* Mobile swipeable carousel */}
      <MobileCarousel />

      {/* Desktop marquee */}
      <DesktopMarquee />

      {/* Facebook Callout */}
      <div className="section-container mt-12 relative z-10">
        <SectionReveal delay={0.3}>
          <div className="flex justify-center">
            <a
              href="https://www.facebook.com/profile.php?id=100054214612708"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white border-2 border-gold/30 rounded-2xl px-6 sm:px-8 py-4 hover:bg-gold hover:border-gold transition-all duration-300 group hover:shadow-gold"
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
