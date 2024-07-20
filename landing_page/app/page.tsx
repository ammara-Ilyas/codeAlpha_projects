import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Service";
import Portfolio from "./components/sections/Portfolio";
import Progress from "./components/sections/Progress";
import Testimonial from "./components/sections/Testimonial";
import Blog from "./components/sections/Blog";
import Contact from "./components/sections/Contact";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Progress />
      <Testimonial />
      <Blog />
      <Contact />
    </>
  );
}
