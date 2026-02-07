import Hero from "../components/sections/Hero";
import About from "./About";
import Stats from "../components/sections/Stats";
import ProgramsGrid from "../components/sections/ProgramsGrid";
import Labs from "../components/sections/Labs";
import Faculty from "../components/sections/Faculty";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <ProgramsGrid />
      <Labs />
      <Faculty />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;
