import HeroSection from '../sections/home/HeroSection';
import ProblemSection from '../sections/home/ProblemSection';
import ExperienceSection from '../sections/home/ExperienceSection';
import ProcessSection from '../sections/home/ProcessSection';
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
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
