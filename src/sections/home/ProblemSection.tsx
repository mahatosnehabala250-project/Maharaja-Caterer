import { Thermometer, Users, UtensilsCrossed } from 'lucide-react';
import SectionReveal from '../../components/SectionReveal';

const painPoints = [
  {
    icon: Thermometer,
    title: 'Cold Food?',
    description:
      'Our chafing dishes keep every dish piping hot from first guest to last.',
  },
  {
    icon: Users,
    title: 'Chaos?',
    description:
      'Trained staff, assigned stations, zero confusion.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Boring Menu?',
    description:
      'Custom thali designed around YOUR family traditions.',
  },
];

export default function ProblemSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Peacock Feather Watermark */}
      <div
        className="absolute top-10 right-10 w-64 h-64 opacity-[0.03] pointer-events-none"
        style={{ transform: 'rotate(-15deg)' }}
      >
        <img
          src="./images/peacock_feather.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="section-container">
        <SectionReveal>
          <div className="text-center max-w-[700px] mx-auto mb-14">
            <h2 className="font-playfair font-bold text-maroon text-3xl lg:text-4xl mb-6">
              Planning a wedding shouldn't feel like a second job.
            </h2>
            <p className="font-inter text-charcoal text-base leading-relaxed">
              Cold food. Unorganized staff. Rigid menus that ignore your traditions.
              These aren't just inconveniences — they're memories ruined. For 9 years,
              we've ensured every Biye Bari in Purulia runs like a royal procession.
            </p>
          </div>
        </SectionReveal>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[900px] mx-auto">
          {painPoints.map((point, index) => (
            <SectionReveal key={point.title} delay={0.15 * (index + 1)}>
              <div className="text-center p-6">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-maroon/10 flex items-center justify-center">
                  <point.icon className="w-7 h-7 text-maroon" />
                </div>
                <h3 className="font-poppins font-semibold text-maroon text-lg mb-2">
                  {point.title}
                </h3>
                <p className="font-inter text-charcoal/80 text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
