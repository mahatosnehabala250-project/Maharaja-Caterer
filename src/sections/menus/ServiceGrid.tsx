import {
  Heart,
  Cake,
  Church,
  Palette,
  ClipboardList,
  Soup,
} from 'lucide-react';
import SectionReveal from '../../components/SectionReveal';

const services = [
  {
    icon: Heart,
    title: 'Wedding & Reception Catering',
    description:
      'Complete wedding feast with Bengali traditions, from welcome drinks to dessert.',
  },
  {
    icon: Cake,
    title: 'Birthday & Anniversary Events',
    description:
      'Themed menus and decor for milestone celebrations of any size.',
  },
  {
    icon: Church,
    title: 'Religious & Social Functions',
    description:
      'Pure veg options and traditional prasad arrangements for puja ceremonies.',
  },
  {
    icon: Palette,
    title: 'Stage & Venue Decoration',
    description:
      'Marigold garlands, lighting, mandap setup — we transform any venue.',
  },
  {
    icon: ClipboardList,
    title: 'Full Event Planning & Management',
    description:
      'End-to-end coordination so you can enjoy your own celebration.',
  },
  {
    icon: Soup,
    title: 'Buffet Setup (Veg & Non-Veg)',
    description:
      'Elegant buffet arrangements with separate veg and non-veg stations.',
  },
];

export default function ServiceGrid() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="section-container">
        <SectionReveal>
          <div className="text-center mb-12">
            <span className="font-poppins text-gold text-xs uppercase tracking-[2px]">
              Our Services
            </span>
            <h2 className="font-playfair font-bold text-maroon text-3xl lg:text-4xl mt-3">
              Complete Event Solutions
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <SectionReveal key={service.title} delay={0.1 * (index + 1)}>
              <div className="group bg-cream rounded-2xl p-8 border-t-4 border-maroon shadow-card hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer">
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-maroon/10 flex items-center justify-center mb-4 group-hover:bg-maroon/20 transition-colors">
                  <service.icon className="w-6 h-6 text-maroon" />
                </div>

                {/* Title */}
                <h3 className="font-poppins font-semibold text-maroon text-lg mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-inter text-charcoal/80 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
