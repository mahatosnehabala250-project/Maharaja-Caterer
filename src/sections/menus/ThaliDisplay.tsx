import SectionReveal from '../../components/SectionReveal';

export default function ThaliDisplay() {
  return (
    <section className="py-16 lg:py-24 bg-maroon">
      <div className="section-container">
        <SectionReveal>
          <div className="text-center mb-10">
            <span className="font-poppins text-gold text-xs uppercase tracking-[2px]">
              Signature Offering
            </span>
            <h2 className="font-playfair font-bold text-cream text-3xl lg:text-4xl mt-3">
              The Purulia Wedding Thali
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="relative rounded-2xl overflow-hidden max-w-[900px] mx-auto border-2 border-gold shadow-gold">
            <img
              src="./images/thali_arrangement.jpg"
              alt="The Purulia Wedding Thali - Complete Bengali Wedding Feast with Basanti Pulao, Shorshe Ilish, Kosha Mangsho, Chingri Malai Curry, and traditional sweets"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </SectionReveal>

        {/* Legend */}
        <SectionReveal delay={0.3}>
          <div className="mt-8 max-w-[800px] mx-auto text-center">
            <p className="font-inter text-cream/80 text-sm leading-relaxed">
              Our signature wedding thali features <strong className="text-gold">Basanti Pulao</strong> at the center,
              surrounded by <strong className="text-gold">Shorshe Ilish</strong>,{' '}
              <strong className="text-gold">Kosha Mangsho</strong>,{' '}
              <strong className="text-gold">Chingri Malai Curry</strong>,{' '}
              <strong className="text-gold">Bhetki Paturi</strong>,{' '}
              <strong className="text-gold">Aloo Posto</strong>, and{' '}
              <strong className="text-gold">Cholar Dal</strong>.
              Complete with <strong className="text-gold">Mishti Doi</strong>,{' '}
              <strong className="text-gold">Rosogolla</strong>,{' '}
              <strong className="text-gold">Sandesh</strong>, and{' '}
              <strong className="text-gold">Payesh</strong> for dessert.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
