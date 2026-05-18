import SectionReveal from '../../components/SectionReveal';

export default function ContactHeader() {
  return (
    <section className="pt-28 pb-8 bg-cream">
      <div className="section-container">
        <SectionReveal>
          <div className="text-center">
            <span className="font-poppins text-gold text-xs uppercase tracking-[2px]">
              Get In Touch
            </span>
            <h1 className="font-playfair font-bold text-maroon text-4xl lg:text-5xl mt-3">
              Secure Your Big Day
            </h1>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
