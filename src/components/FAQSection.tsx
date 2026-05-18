import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';

const faqs = [
  {
    q: 'How far in advance should I book?',
    a: 'We recommend booking at least 2-4 weeks before your event, especially during wedding season (November-February). Popular dates fill up fast, so earlier is better. A small advance confirms your date.',
  },
  {
    q: 'What is the minimum guest count?',
    a: 'We serve a minimum of 50 guests for full event catering. For smaller gatherings like birthdays or anniversaries, please contact us directly and we will work out a special arrangement for you.',
  },
  {
    q: 'Can I customize the menu?',
    a: 'Absolutely! Every event is unique. We offer Bengali, North Indian, Chinese, and Tandoori cuisines. You can mix and match items from all categories to create your perfect menu. Just share your preferences with us.',
  },
  {
    q: 'Do you provide venue decoration too?',
    a: 'Yes! We offer complete event solutions including stage decoration, mandap setup, lighting, and marigold garlands. You get food and decor from one team — less hassle for you.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We are based in Purulia, West Bengal and serve Purulia town, Nadiha, Chowk Bazar, Dulmi, Raghunathpur, Adra, Jhalda, and surrounding areas within a 50km radius. Contact us for specific location queries.',
  },
  {
    q: 'Is your food FSSAI certified?',
    a: 'Yes, we are FSSAI registered (Lic. No. 12817016000590). We maintain strict hygiene standards, use fresh ingredients, and follow all food safety regulations. Your health is our priority.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative gold dots */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="section-container max-w-[800px] mx-auto">
        <SectionReveal>
          <div className="text-center mb-14">
            <span className="font-poppins text-gold text-xs uppercase tracking-[2px]">
              Questions?
            </span>
            <h2 className="font-playfair font-bold text-maroon text-3xl lg:text-4xl mt-3">
              Frequently Asked Questions
            </h2>
            <p className="font-inter text-charcoal/70 text-sm mt-3">
              Everything you need to know about booking Maharaja Caterer
            </p>
          </div>
        </SectionReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <SectionReveal key={i} delay={0.08 * (i + 1)}>
              <div className="border border-gold/20 rounded-xl overflow-hidden bg-cream/50 hover:border-gold/40 transition-colors duration-300">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-poppins font-semibold text-maroon text-sm pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-4 font-inter text-charcoal/80 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
