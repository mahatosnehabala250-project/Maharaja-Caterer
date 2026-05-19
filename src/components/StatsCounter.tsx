import { useState, useEffect, useRef } from 'react';
import { Award, Users, Clock, ThumbsUp } from 'lucide-react';

const stats = [
  { icon: Award, value: 9, suffix: '+', label: 'Years of Excellence' },
  { icon: Users, value: 500, suffix: '+', label: 'Events Served' },
  { icon: ThumbsUp, value: 4.8, suffix: '/5', label: 'Justdial Rating' },
  { icon: Clock, value: 1000, suffix: '+', label: 'Happy Families' },
];

function AnimatedCounter({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const startAnimation = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;
      const startTime = Date.now();
      const isFloat = target % 1 !== 0;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = eased * target;
        setCount(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current));
        if (progress < 1) requestAnimationFrame(animate);
      };
      animate();
    };

    // Check if element is already visible (e.g., loading screen was covering it)
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (isVisible) {
      // Already in viewport — start immediately with a small delay for visual effect
      const timer = setTimeout(startAnimation, 300);
      return () => clearTimeout(timer);
    }

    // Not visible yet — use IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div ref={ref} className="font-poppins font-bold text-4xl lg:text-5xl text-gold">
      {count}{suffix}
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="py-16 lg:py-20 bg-maroon relative overflow-hidden">
      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-yellow-400 to-gold" />

      {/* Subtle diagonal pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 1px, transparent 20px)`,
      }} />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center group"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-cream/10 flex items-center justify-center group-hover:bg-gold/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-gold">
                <stat.icon className="w-7 h-7 text-gold" />
              </div>
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="font-poppins text-cream/80 text-[10px] sm:text-xs mt-2 uppercase tracking-[0.15em] font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-yellow-400 to-gold" />
    </section>
  );
}
