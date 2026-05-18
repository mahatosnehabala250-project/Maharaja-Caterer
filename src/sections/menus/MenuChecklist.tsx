import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import SectionReveal from '../../components/SectionReveal';

const allItems = [
  'Fish Fry', 'Vegetable Chop', 'Prawn Cutlet', 'Beguni', 'Mochar Chop', 'Chicken Pakora',
  'Shorshe Ilish', 'Kosha Mangsho', 'Chingri Malai', 'Bhetki Paturi', 'Aloo Posto', 'Cholar Dal',
  'Butter Chicken', 'Paneer Tikka', 'Dal Makhani', 'Chicken Biryani', 'Mutton Biryani', 'Naan/Roti',
  'Rosogolla', 'Mishti Doi', 'Sandesh', 'Payesh', 'Gulab Jamun', 'Ice Cream',
];

export default function MenuChecklist() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleItem = (item: string) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const submitToWhatsApp = () => {
    if (selected.length === 0) {
      alert('Please select at least one menu item.');
      return;
    }
    const text = `Hi Maharaja Caterer, I'm interested in the following menu items for my event: ${selected.join(', ')}. Please contact me for pricing.`;
    const url = `https://wa.me/918945005456?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="section-container">
        <SectionReveal>
          <div className="text-center mb-10">
            <span className="font-poppins text-gold text-xs uppercase tracking-[2px]">
              Interactive Menu
            </span>
            <h2 className="font-playfair font-bold text-maroon text-3xl lg:text-4xl mt-3">
              Select Your Dishes
            </h2>
            <p className="font-inter text-charcoal/70 text-sm mt-3 max-w-[600px] mx-auto">
              Check the items you're interested in and send them to us via WhatsApp for a custom quote.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="max-w-[800px] mx-auto">
            {/* Checkbox Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
              {allItems.map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-3 p-3 rounded-xl border border-gold/20 hover:border-gold/50 hover:bg-cream/50 cursor-pointer transition-all duration-200 group"
                >
                  <div
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                      selected.includes(item)
                        ? 'bg-maroon border-maroon scale-110'
                        : 'border-gold group-hover:border-maroon'
                    }`}
                    onClick={() => toggleItem(item)}
                  >
                    {selected.includes(item) && (
                      <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <span className="font-inter text-sm text-charcoal">{item}</span>
                </label>
              ))}
            </div>

            {/* Selected Count */}
            {selected.length > 0 && (
              <p className="text-center font-poppins text-sm text-maroon mb-4">
                {selected.length} item(s) selected
              </p>
            )}

            {/* Submit Button */}
            <div className="text-center">
              <button
                onClick={submitToWhatsApp}
                className="inline-flex items-center gap-2 bg-maroon border-2 border-gold text-cream font-poppins font-semibold text-base px-8 py-4 rounded-full hover:bg-gold hover:text-maroon hover:shadow-gold active:scale-[0.98] transition-all duration-300 animate-glow"
              >
                <MessageCircle className="w-5 h-5" />
                Submit Menu via WhatsApp
              </button>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
