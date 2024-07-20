import React from "react";
import Image from "next/image";
import heroImg from "@/images/assets/portfolio/poster.png";
import { Button } from "@/components/ui/button";
import TypographyH2 from "../shacdnCom/Heading2";
import TypographyP from "../shacdnCom/Para";
function Hero() {
  return (
    <section className="flex flex-wrap flex-col sm:flex-row  w-full h-full justify-center items-center bg-rose-200 gap-3 pt-7 ">
      <div className="  font-serif w-3/4  flex justify-evenly gap-6 sm:gap-2 sm:w-5/12  md:w-2/5 lg:w-1/3 flex-col ">
        <TypographyP text="UX Designer" />
        <div className="">
          <TypographyH2 text="Hi There, I'm" />
          <TypographyH2 text="Ammara Ilyas" TailwindClass="text-red-500" />
        </div>
        <TypographyP
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam esse,
          maiores sed iure impedit numquam?"
          TailwindClass="w-11/12 md:w-10/12"
        />

        <div className="flex items-center pb-6 w-4/5 justify-between mt- sm:w-full md:w-10/12 lg:w-4/5 xl:w-3/4">
          <Button variant="hire" size="lg">
            Hire me
          </Button>
          <Button variant="port" size="lg">
            Portfolio
          </Button>
        </div>
      </div>
      <div className="   sm:block w-2/3 sm:w-5/12 h-full lg:w-1/3 ">
        <Image src={heroImg} alt="hero section" className="h-[55vh]" />
      </div>
    </section>
  );
}

export default Hero;
