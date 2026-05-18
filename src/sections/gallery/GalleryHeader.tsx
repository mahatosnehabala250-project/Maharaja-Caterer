import SectionReveal from '../../components/SectionReveal';

export default function GalleryHeader() {
  return (
    <section className="pt-28 pb-12 bg-cream">
      <div className="section-container">
        <SectionReveal>
          <div className="text-center">
            <span className="font-poppins text-gold text-xs uppercase tracking-[2px]">
              Portfolio
            </span>
            <h1 className="font-playfair font-bold text-maroon text-4xl lg:text-5xl mt-3">
              Moments of Perfection
            </h1>
            <p className="font-vibes text-charcoal text-2xl mt-4">
              Real events. Real families. Real celebrations.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
