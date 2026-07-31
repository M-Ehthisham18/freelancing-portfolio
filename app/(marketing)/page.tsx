import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Technologies } from "@/components/sections/Technologies";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { WhyChooseMe } from "@/components/sections/WhyChooseMe";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex-1">
        <Hero />
        <Services />
        <Technologies />
        <Process />
        <Projects />
        <WhyChooseMe />
        <FAQ />
        <CTA />
      </div>
      <Footer />
    </>
  );
}
