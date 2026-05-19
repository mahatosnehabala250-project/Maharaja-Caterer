import { Heart, CheckCircle2, Sparkles, PartyPopper } from 'lucide-react';
import SectionReveal from '../../components/SectionReveal';

const visions = [
  {
    icon: Heart,
    title: 'Guests Who Rave About the Food',
    description:
      'Imagine your aunt pulling you aside to ask, "Who made this Kosha Mangsho?" That moment of pride when every single guest compliments the spread — that is what we deliver at every event.',
  },
  {
    icon: CheckCircle2,
    title: 'Zero Stress, Zero Worries',
    description:
      'No running after vendors. No checking if the biryani is ready. No last-minute panics. You enjoy your own celebration while our team handles every detail from setup to cleanup.',
  },
  {
    icon: Sparkles,
    title: 'Photos That Tell a Story',
    description:
      'A beautifully decorated stage, gleaming chafing dishes, and a spread that looks straight out of a magazine. Your event photos will be the ones you frame and share for years.',
  },
  {
    icon: PartyPopper,
    title: 'Memories Worth Cherishing',
    description:
      'Long after the last guest leaves and the lights come down, what remains are the memories. We make sure those memories are filled with the aroma of fresh food, the warmth of great service, and the joy of a celebration well done.',
  },
];

export default function SuccessVisionSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white to-cream relative overflow-hidden">
      {/* Decorative corner elements */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-maroon/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="section-container relative z-10">
        <SectionReveal>
          <div className="text-center max-w-[700px] mx-auto mb-12 sm:mb-14">
            <span className="font-poppins text-gold text-[10px] sm:text-xs uppercase tracking-[2px]">
              The Maharaja Promise
            </span>
            <h2 className="font-playfair font-bold text-maroon text-2xl sm:text-3xl lg:text-4xl mt-3 mb-5">
              Your Celebration, Our Reputation
            </h2>
            <p className="font-inter text-charcoal/70 text-sm sm:text-base leading-relaxed">
              We do not just serve food — we craft experiences. Every dish, every decoration,
              every detail is designed to make your event the one everyone talks about.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-[1000px] mx-auto">
          {visions.map((vision, index) => (
            <SectionReveal key={vision.title} delay={0.15 * (index + 1)}>
              <div className="group bg-white rounded-2xl p-6 sm:p-8 border border-gold/10 shadow-card hover:shadow-lg hover:-translate-y-1 hover:border-gold/30 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:from-gold/30 transition-all duration-300">
                  <vision.icon className="w-6 h-6 text-gold" />
                </div>

                {/* Title */}
                <h3 className="font-poppins font-semibold text-maroon text-base sm:text-lg mb-3">
                  {vision.title}
                </h3>

                {/* Description */}
                <p className="font-inter text-charcoal/70 text-sm leading-relaxed">
                  {vision.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <SectionReveal delay={0.6}>
          <div className="text-center mt-10 sm:mt-12">
            <a
              href="https://wa.me/918945005456?text=Hi%20Maharaja%20Caterer%2C%20I%20want%20to%20book%20my%20event.%20Please%20share%20availability."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-maroon border-2 border-gold text-cream font-poppins font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-gold hover:text-maroon hover:shadow-gold active:scale-[0.98] transition-all duration-300"
            >
              Make It Happen — Book Now
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
