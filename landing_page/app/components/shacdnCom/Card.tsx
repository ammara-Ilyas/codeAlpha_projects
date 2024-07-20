import React from "react";
import Image from "next/image";
import TypographyH4 from "./Hading4";
import { StaticImageData } from "next/image";
import TypographyP from "./Para";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
interface CardType {
  data: {
    img: StaticImageData;
    heading: string;
    des: string;
    icon: JSX.Element;
  }[];
  Tailwindclass: string;
}
const CardDem: React.FC<CardType> = ({ data, Tailwindclass }) => {
  return (
    <>
      {data.map((item, i) => (
        <Card
          key={i}
          className={`${Tailwindclass}  flex gap-4 flex-col justify-center items-center`}
        >
          <CardHeader className=" flex justify-center items-center">
            <Image src={item.img} alt="img" className="" />
            <CardTitle></CardTitle>
          </CardHeader>
          <CardContent className="w-11/12">
            <TypographyH4 text={item.heading}></TypographyH4>
          </CardContent>
          <CardFooter className="flex justify-between  w-11/12 items-center px-5 ">
            <TypographyP
              text={item.des}
              TailwindClass="w-10/12 mx-auto "
            ></TypographyP>
            {item.icon && (
              <span className=" rounded-full bg-red-600 p-2 text-xl text-white">
                {item.icon}
              </span>
            )}
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default CardDem;
