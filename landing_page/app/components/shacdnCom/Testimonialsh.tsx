import * as React from "react";
import TypographyP from "./Para";
import type { StaticImageData } from "next/image";
import AvatarImg from "./Avatar";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
interface CourselType {
  data: {
    paragraph: string;
    img: StaticImageData;
    name: string;
    position: string;
  };
}

const CarouselDemo: React.FC<CourselType> = ({ data }) => {
  return (
    <Carousel className="sm:w-3/4 w-11/12 mt-0 md:pt-0  pt-5">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="  text-center ">
              <Card>
                <CardContent className="flex flex-col aspect-square   items-center justify-center  w-full h-100 md:h-80">
                  <TypographyP
                    text={data.paragraph}
                    TailwindClass="md:w-[75%] w-full text-xl"
                  />
                  <div className="flex items-center mt-5 justify-center">
                    <AvatarImg img={data.img} />
                    <TypographyP
                      text={data.name}
                      TailwindClass=" pl-4 font-bold"
                    />
                    <TypographyP text={data.position} TailwindClass="" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export default CarouselDemo;
