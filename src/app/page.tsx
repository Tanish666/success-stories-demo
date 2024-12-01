
import HeroSection from "./components/hero-section";
import Section from "./components/section";
import Section2 from "./components/section2";
import Section3 from "./components/section3";

export default function Home() {
  return (
  <main className="min-h-screen bg-black antialiased bg-grid-white/[0.02] w-full">
  <HeroSection/>
  <Section3/>
  <Section/>
  <Section2/>
  
  </main>
  );
}
