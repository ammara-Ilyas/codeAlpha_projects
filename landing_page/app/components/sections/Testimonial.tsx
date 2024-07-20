import React from "react";
import Image from "next/image";
import background from "@/images/assets/portfolio/Background.png";
import profile from "@/images/assets/portfolio/testimonial.png";
import CarouselDemo from "../shacdnCom/Testimonialsh";
import TypographyH1 from "../shacdnCom/Heading";
function Testimonial() {
  const data = {
    paragraph:
      "Sara Jones's designs are both visually captivating and highlyeffective. She transformed our website, enhancing user engagement an conversions. Her attention to detail and creative approach are top-notch. Highly recommended!",
    img: profile,
    name: "John Smith /",
    position: "CEO of XYZ Company",
  };
  return (
    // <Wrapper>
    <div className="flex  items-center  bg-red-200 p-10 flex-col relative ">
      <Image
        src={background}
        alt="red circle"
        className="absolute top-0 left-1/2"
      />
      <TypographyH1 text="Testimonials" TailwindClass="z-30" />
      <CarouselDemo data={data} />
    </div>
  );
}

export default Testimonial;
