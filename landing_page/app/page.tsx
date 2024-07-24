import React from "react";
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
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="project">
        <Portfolio />
        <Progress />
      </div>
      <Testimonial />
      <Blog />
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
