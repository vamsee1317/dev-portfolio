import Hero from '@/components/Hero';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import GitHubStats from '@/components/GitHubStats';
import Contact from '@/components/Contact';
import SectionDivider from '@/components/SectionDivider';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <TechStack />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <GitHubStats />
      <SectionDivider />
      <Contact />
    </div>
  );
}