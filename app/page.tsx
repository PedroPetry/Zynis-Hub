import { Hero } from "../components/Hero";
import { Methodology } from "../components/Methodology";
import { Projects } from "../components/Projects";
import { FAQ } from "../components/FAQ";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Methodology />
      <Projects />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}