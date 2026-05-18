import HeroSection from '../sections/home/HeroSection';
import ProblemSection from '../sections/home/ProblemSection';
import ExperienceSection from '../sections/home/ExperienceSection';
import ProcessSection from '../sections/home/ProcessSection';
import PricingSection from '../components/PricingSection';
import TestimonialsSection from '../sections/home/TestimonialsSection';
import StatsCounter from '../components/StatsCounter';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsCounter />
      <ProblemSection />
      <ExperienceSection />
      <ProcessSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
