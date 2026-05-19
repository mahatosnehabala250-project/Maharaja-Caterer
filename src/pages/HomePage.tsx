import HeroSection from '../sections/home/HeroSection';
import ProblemSection from '../sections/home/ProblemSection';
import ExperienceSection from '../sections/home/ExperienceSection';
import ProcessSection from '../sections/home/ProcessSection';
import SuccessVisionSection from '../sections/home/SuccessVisionSection';
import PricingSection from '../components/PricingSection';
import TestimonialsSection from '../sections/home/TestimonialsSection';
import StatsCounter from '../components/StatsCounter';
import FAQSection from '../components/FAQSection';
import OrnamentalDivider from '../components/OrnamentalDivider';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsCounter />
      <OrnamentalDivider />
      <ProblemSection />
      <ExperienceSection />
      <OrnamentalDivider />
      <ProcessSection />
      <OrnamentalDivider />
      <SuccessVisionSection />
      <PricingSection />
      <OrnamentalDivider />
      <TestimonialsSection />
      <OrnamentalDivider />
      <FAQSection />
    </main>
  );
}
