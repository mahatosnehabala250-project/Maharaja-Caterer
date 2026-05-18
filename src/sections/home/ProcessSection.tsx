import { ClipboardList, CalendarCheck, PartyPopper } from 'lucide-react';
import SectionReveal from '../../components/SectionReveal';

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Customize Your Menu',
    description:
      'Bengali, North Indian, Chinese, or a fusion of all three. You choose, we craft.',
  },
  {
    number: '02',
    icon: CalendarCheck,
    title: 'Lock Your Date',
    description:
      'Call +91 89450 05456 or WhatsApp us. We check availability instantly.',
  },
  {
    number: '03',
    icon: PartyPopper,
    title: 'Enjoy Your Royal Event',
    description:
      'Sit back. Let your guests rave about the food for years.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="section-container">
        <SectionReveal>
          <div className="text-center mb-14">
            <span className="font-poppins text-gold text-xs uppercase tracking-[2px]">
              How It Works
            </span>
            <h2 className="font-playfair font-bold text-maroon text-3xl lg:text-4xl mt-3">
              Your Royal Event, Simplified
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Animated Dashed Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[72px] left-[20%] right-[20%] h-[2px] z-0">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <line
                x1="0"
                y1="1"
                x2="100%"
                y2="1"
                stroke="#D4AF37"
                strokeWidth="2"
                strokeDasharray="8 8"
                className="animate-dash-flow"
              />
            </svg>
          </div>

          {steps.map((step, index) => (
            <SectionReveal key={step.number} delay={0.2 * (index + 1)}>
              <div className="relative bg-cream rounded-2xl p-8 shadow-card text-center group hover:-translate-y-1 hover:shadow-lg transition-all duration-300 z-10">
                {/* Gold Number Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center shadow-gold">
                  <span className="font-playfair font-bold text-maroon text-sm">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-5 mt-2 rounded-full bg-maroon/10 flex items-center justify-center animate-float">
                  <step.icon className="w-8 h-8 text-maroon" />
                </div>

                {/* Title */}
                <h3 className="font-poppins font-semibold text-maroon text-lg mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-inter text-charcoal/80 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
