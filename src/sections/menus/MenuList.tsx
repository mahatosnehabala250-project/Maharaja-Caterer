import { Leaf, Beef, Candy } from 'lucide-react';
import SectionReveal from '../../components/SectionReveal';

const menuData = {
  starters: [
    { name: 'Fish Fry', type: 'nonveg' as const },
    { name: 'Vegetable Chop', type: 'veg' as const },
    { name: 'Prawn Cutlet', type: 'nonveg' as const },
    { name: 'Beguni', type: 'veg' as const },
    { name: 'Mochar Chop', type: 'veg' as const },
    { name: 'Chicken Pakora', type: 'nonveg' as const },
  ],
  bengali: [
    { name: 'Shorshe Ilish', type: 'nonveg' as const },
    { name: 'Kosha Mangsho', type: 'nonveg' as const },
    { name: 'Chingri Malai', type: 'nonveg' as const },
    { name: 'Bhetki Paturi', type: 'nonveg' as const },
    { name: 'Aloo Posto', type: 'veg' as const },
    { name: 'Cholar Dal', type: 'veg' as const },
  ],
  northIndian: [
    { name: 'Butter Chicken', type: 'nonveg' as const },
    { name: 'Paneer Tikka', type: 'veg' as const },
    { name: 'Dal Makhani', type: 'veg' as const },
    { name: 'Chicken Biryani', type: 'nonveg' as const },
    { name: 'Mutton Biryani', type: 'nonveg' as const },
    { name: 'Naan / Roti', type: 'veg' as const },
  ],
  desserts: [
    { name: 'Rosogolla', type: 'sweet' as const },
    { name: 'Mishti Doi', type: 'sweet' as const },
    { name: 'Sandesh', type: 'sweet' as const },
    { name: 'Payesh', type: 'sweet' as const },
    { name: 'Gulab Jamun', type: 'sweet' as const },
    { name: 'Ice Cream', type: 'sweet' as const },
  ],
};

function TypeIcon({ type }: { type: 'veg' | 'nonveg' | 'sweet' }) {
  if (type === 'veg') return <Leaf className="w-3.5 h-3.5 text-emerald" />;
  if (type === 'nonveg') return <Beef className="w-3.5 h-3.5 text-red-500" />;
  return <Candy className="w-3.5 h-3.5 text-gold" />;
}

export default function MenuList() {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="section-container">
        <SectionReveal>
          <div className="text-center mb-12">
            <span className="font-poppins text-gold text-xs uppercase tracking-[2px]">
              Menu Categories
            </span>
            <h2 className="font-playfair font-bold text-maroon text-3xl lg:text-4xl mt-3">
              Our Complete Menu
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Starters */}
          <SectionReveal delay={0.1}>
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <h3 className="font-poppins font-semibold text-maroon text-lg mb-4 pb-3 border-b border-gold/30">
                Starters & Snacks
              </h3>
              <ul className="space-y-2.5">
                {menuData.starters.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-2 font-inter text-sm text-charcoal"
                  >
                    <TypeIcon type={item.type} />
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>

          {/* Main Course */}
          <SectionReveal delay={0.2}>
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <h3 className="font-poppins font-semibold text-maroon text-lg mb-4 pb-3 border-b border-gold/30">
                Main Course
              </h3>
              <div className="mb-4">
                <h4 className="font-poppins text-xs text-gold uppercase tracking-wider mb-2">
                  Bengali Specialties
                </h4>
                <ul className="space-y-2">
                  {menuData.bengali.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center gap-2 font-inter text-sm text-charcoal"
                    >
                      <TypeIcon type={item.type} />
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-poppins text-xs text-gold uppercase tracking-wider mb-2">
                  North Indian
                </h4>
                <ul className="space-y-2">
                  {menuData.northIndian.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center gap-2 font-inter text-sm text-charcoal"
                    >
                      <TypeIcon type={item.type} />
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionReveal>

          {/* Desserts */}
          <SectionReveal delay={0.3}>
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <h3 className="font-poppins font-semibold text-maroon text-lg mb-4 pb-3 border-b border-gold/30">
                Sweets & Desserts
              </h3>
              <ul className="space-y-2.5">
                {menuData.desserts.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-2 font-inter text-sm text-charcoal"
                  >
                    <TypeIcon type={item.type} />
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
