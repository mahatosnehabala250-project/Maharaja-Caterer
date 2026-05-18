import HeroSection from '../sections/home/HeroSection';
import ProblemSection from '../sections/home/ProblemSection';
import ExperienceSection from '../sections/home/ExperienceSection';
import ProcessSection from '../sections/home/ProcessSection';
import TestimonialsSection from '../sections/home/TestimonialsSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <ExperienceSection />
      <ProcessSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
