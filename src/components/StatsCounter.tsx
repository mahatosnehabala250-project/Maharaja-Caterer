import { useState, useEffect, useRef } from 'react';
import { Award, Users, Clock, ThumbsUp } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';

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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
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
        }
      },
      { threshold: 0.3 }
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

      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <SectionReveal key={stat.label} delay={0.1 * (i + 1)}>
              <div className="text-center group">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-cream/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <stat.icon className="w-7 h-7 text-gold" />
                </div>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <p className="font-poppins text-cream/80 text-xs mt-2 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-yellow-400 to-gold" />
    </section>
  );
}
