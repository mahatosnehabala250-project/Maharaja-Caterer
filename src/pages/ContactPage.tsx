import ContactHeader from '../sections/contact/ContactHeader';
import WarningBanner from '../sections/contact/WarningBanner';
import WhatsAppForm from '../sections/contact/WhatsAppForm';
import ContactDetails from '../sections/contact/ContactDetails';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <main className="pt-[70px]">
      <ContactHeader />
      <WarningBanner />
      <section className="py-16 lg:py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <WhatsAppForm />
            <ContactDetails />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
