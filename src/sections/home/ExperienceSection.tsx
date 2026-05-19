import { useState, useEffect, useRef } from 'react';
import { Star, Facebook } from 'lucide-react';
import SectionReveal from '../../components/SectionReveal';

function useExperiencCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const start = () => {
      if (hasStarted) return;
      setHasStarted(true);
    };

    // Check if already visible
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const timer = setTimeout(start, 500);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start();
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  return { count, ref };
}

export default function ExperienceSection() {
  const { count, ref: counterRef } = useExperiencCounter(500, 2000);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoPlaying = () => {
    setVideoReady(true);
  };

  useEffect(() => {
    if (videoRef.current) {
      const v = videoRef.current;
      v.addEventListener('playing', handleVideoPlaying);
      v.play().catch(() => {});
      return () => v.removeEventListener('playing', handleVideoPlaying);
    }
  }, []);

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-cream relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #800020 1px, transparent 0)`,
        backgroundSize: '30px 30px',
      }} />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Left: Video */}
          <SectionReveal>
            <div className="relative rounded-2xl overflow-hidden border-2 border-gold shadow-video bg-maroon">
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/images/staff_serving.jpg"
                className={`w-full aspect-video object-cover transition-opacity duration-700 ${
                  videoReady ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <source src="/videos/staff_video.mp4" type="video/mp4" />
              </video>
              {/* Play indicator overlay — shows when video loading */}
              {!videoReady && (
                <div className="absolute inset-0 flex items-center justify-center bg-maroon/20">
                  <div className="w-12 h-12 rounded-full bg-gold/80 flex items-center justify-center animate-pulse">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-maroon border-b-[8px] border-b-transparent ml-1" />
                  </div>
                </div>
              )}
            </div>
          </SectionReveal>

          {/* Right: Stats & Info */}
          <div>
            <SectionReveal>
              <span className="font-poppins text-gold text-[10px] sm:text-xs uppercase tracking-[2px]">
                Your Trusted Event Guide
              </span>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <h2 className="font-playfair font-bold text-maroon text-xl sm:text-2xl lg:text-3xl mt-3">
                Prop. Ujjal Chakraborty (Dolon)
              </h2>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <div className="w-16 h-[2px] bg-gradient-to-r from-gold to-gold/30 my-4 sm:my-5" />
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <p className="font-inter text-charcoal/70 text-sm leading-relaxed mb-4">
                With over 9 years of experience serving Purulia's most important celebrations,
                Ujjal Chakraborty has built Maharaja Caterer into the region's most trusted
                catering name. Every event is personally supervised to ensure the quality
                your guests deserve.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.25}>
              <div ref={counterRef} className="mb-5 py-3 px-4 bg-maroon/5 rounded-xl border-l-4 border-gold">
                <span className="font-poppins font-semibold text-maroon text-base sm:text-xl">
                  <span className="text-gold text-2xl sm:text-3xl font-bold">{count}+</span>{' '}
                  Successful Events Managed Across Purulia
                </span>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2.5 bg-white rounded-lg px-3 py-2 shadow-sm">
                  <Star className="w-4 h-4 text-gold fill-gold flex-shrink-0" />
                  <span className="font-poppins text-charcoal text-sm">
                    Justdial Chowk Bazar: <strong className="text-maroon">4.8/5</strong> (70 Reviews)
                  </span>
                </div>
                <div className="flex items-center gap-2.5 bg-white rounded-lg px-3 py-2 shadow-sm">
                  <Star className="w-4 h-4 text-gold fill-gold flex-shrink-0" />
                  <span className="font-poppins text-charcoal text-sm">
                    Justdial Dulmi Nadiha: <strong className="text-maroon">4.9/5</strong> (9 Reviews)
                  </span>
                </div>
                <a
                  href="https://www.facebook.com/profile.php?id=100054214612708"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 bg-white rounded-lg px-3 py-2 shadow-sm hover:shadow-md transition-shadow"
                >
                  <Facebook className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span className="font-poppins text-charcoal text-sm">
                    Facebook: <strong className="text-maroon">1K+ Followers</strong>
                  </span>
                </a>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.35}>
              <a
                href="https://www.facebook.com/profile.php?id=100054214612708"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-poppins text-gold text-sm hover:text-maroon transition-colors group"
              >
                Read Our Reviews
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
