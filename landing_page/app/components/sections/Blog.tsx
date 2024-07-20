import React from "react";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
import Wrapper from "../layout/Wrapper";
/////////import images
import Typography from "@/images/assets/portfolio/Typography.png";
import psycology from "@/images/assets/portfolio/psycology.png";
import bootsing from "@/images/assets/portfolio/bootsing.png";
////////import type
import { SerPortType } from "../types/Type";
/////////import shacdn component
import TypographyH1 from "../shacdnCom/Heading";
import TypographyP from "../shacdnCom/Para";
import BlogCard from "../shacdnCom/Blogcard";
function Blog() {
  const blogData: SerPortType[] = [
    {
      img: Typography,
      date: "August 15, 2023 / UX",
      heading: "Typography Tips for Design Success",
      des: "Dive into the world of web typography and discover how to choose, pair, and optimize fonts for compelling and readable digital designs.",
    },
    {
      img: psycology,
      date: "August 15, 2023 / UX",
      heading: "Color Psychology in UX Physocology",
      des: "Explore how color choices impact user emotions and decision-making in UX design.",
    },
    {
      img: bootsing,
      date: "August 15, 2023 / UX",
      heading: "Boosting UX with Microinteractions",
      des: "Discover the power of microinteractions in enhancing user experience and engagement.",
    },
  ];
  return (
    <Wrapper>
      <div className=" bg-white text-center  py-20">
        <TypographyH1 text="Design Insights and Inspiration" />
        <TypographyP
          text=" Discover industry insights, expert tips, and design inspiration. Stay
            updated with the latest trends in web design and user experience."
          TailwindClass=" w-3/5 mx-auto"
        />

        <div>
          <div className="relative flex flex-wrap justify-center mt-10 lg:w-[90%]  mx-auto gap-5 lg:gap-10 mb-10">
            <BlogCard data={blogData} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Blog;
