import React from "react";
import Image from "next/image";
import { SerPortType } from "../types/Type";
import TypographyH4 from "./Hading4";
import { StaticImageData } from "next/image";
import TypographyP from "./Para";
import { Button } from "@/components/ui/button";
import { IoChevronForward } from "react-icons/io5";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
interface CardType {
  data: SerPortType[];
}
const BlogCard: React.FC<CardType> = ({ data }) => {
  console.log(data);

  return (
    <>
      {data.map((item, i) => (
        <Card
          key={i}
          className="mx-auto w-[75%] sm:w-[45%] md:w-[30%] lg:[28%]  shadow-lg"
        >
          <CardHeader className=" flex justify-center items-center">
            <Image src={item.img} alt="img" className="w-full" />
            <CardTitle></CardTitle>
          </CardHeader>
          <CardContent>
            <TypographyP text={`${item.date}`} TailwindClass=" text-left" />
            <TypographyH4
              text={item.heading}
              TailwindClass="text-left "
            ></TypographyH4>
            <TypographyP
              text={item.des}
              TailwindClass=" text-left h-48 lg:h-32"
            />
          </CardContent>
          <CardFooter>
            <div className="flex items-center justify-center text-xl ">
              <Button variant="link">Read More</Button>
              <span>
                <IoChevronForward />
              </span>
            </div>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default BlogCard;
