import { Star, Facebook } from 'lucide-react';
import SectionReveal from '../../components/SectionReveal';
import { useCounter } from '../../hooks/useCounter';

export default function ExperienceSection() {
  const { count, ref: counterRef } = useCounter(500, 2000);

  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Video */}
          <SectionReveal>
            <div className="relative rounded-2xl overflow-hidden border-2 border-gold shadow-video">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="./images/staff_serving.jpg"
                className="w-full aspect-video object-cover"
              >
                <source src="./videos/staff_video.mp4" type="video/mp4" />
              </video>
            </div>
          </SectionReveal>

          {/* Right: Stats */}
          <div>
            <SectionReveal>
              <span className="font-poppins text-gold text-xs uppercase tracking-[2px]">
                Your Trusted Event Guide
              </span>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <h2 className="font-playfair font-bold text-maroon text-2xl lg:text-3xl mt-3">
                Prop. Ujjal Chakraborty (Dolon)
              </h2>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <div className="w-16 h-[2px] bg-gold my-5" />
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div ref={counterRef} className="mb-5">
                <span className="font-poppins font-semibold text-maroon text-xl">
                  <span className="text-gold text-3xl font-bold">{count}+</span>{' '}
                  Successful Events Managed Across Purulia
                </span>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.25}>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-gold fill-gold" />
                  <span className="font-poppins text-charcoal text-sm">
                    Justdial Chowk Bazar: <strong className="text-maroon">4.8/5</strong> (70 Reviews)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-gold fill-gold" />
                  <span className="font-poppins text-charcoal text-sm">
                    Justdial Dulmi Nadiha: <strong className="text-maroon">4.9/5</strong> (9 Reviews)
                  </span>
                </div>
                <a
                  href="https://www.facebook.com/profile.php?id=100054214612708"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <Facebook className="w-4 h-4 text-blue-600" />
                  <span className="font-poppins text-charcoal text-sm">
                    Facebook: <strong className="text-maroon">1K+ Followers</strong>
                  </span>
                </a>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <a
                href="https://www.facebook.com/profile.php?id=100054214612708"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-poppins text-gold text-sm hover:underline transition-all"
              >
                Read Our Reviews →
              </a>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
