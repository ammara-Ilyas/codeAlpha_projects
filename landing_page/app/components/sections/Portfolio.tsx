import { SerPortType } from "../types/Type";
import Image from "next/image";
/////Imgaes import
import card2 from "@/images/assets/portfolio/card-02.png";
import card3 from "@/images/assets/portfolio/card-03.png";
import card4 from "@/images/assets/portfolio/card-04.png";
import card5 from "@/images/assets/portfolio/card-05.png";
import card6 from "@/images/assets/portfolio/card-06.png";
import card1 from "@/images/assets/portfolio/card-01.png";
import { MdArrowOutward } from "react-icons/md";
import Wrapper from "../layout/Wrapper";
//////////////////////
import TypographyH1 from "../shacdnCom/Heading";
import TypographyH2 from "../shacdnCom/Heading2";
import TypographyH4 from "../shacdnCom/Hading4";
import TypographyP from "../shacdnCom/Para";
import CardDem from "../shacdnCom/Card";
function Portfolio() {
  const portfolioData: SerPortType[] = [
    {
      img: card1,
      heading: "Educational Platform",
      des: "Web Design / Usability Testing",
      icon: <MdArrowOutward />,
    },
    {
      img: card2,
      heading: "Travel App Design",
      des: "UX Research / App Design ",
      icon: <MdArrowOutward />,
    },
    {
      img: card3,
      heading: "Personal Page ",
      des: "Web Design ",
      icon: <MdArrowOutward />,
    },
    {
      img: card4,
      heading: "Furniture Mobile App",
      des: "App Design",
      icon: <MdArrowOutward />,
    },
    {
      img: card5,
      heading: "Coffee House Landing Page",
      des: "Web Design / UI research",
      icon: <MdArrowOutward />,
    },
    {
      img: card6,
      heading: "Home Services Page",
      des: "Web Design / Marketing",
      icon: <MdArrowOutward />,
    },
  ];
  return (
    <Wrapper>
      <div className="  flex flex-col justify-center items-center  ">
        <div>
          <div className="absolute bg-rose-200 flex pt-10 items-center w-full  flex-col  h-[350px]">
            <TypographyH1 text="My Portfolio" />
            <TypographyP
              text=" Explore my design services, from user interface and experience to
              prototyping and testing. Let's craft exceptional digital
              experiences together."
              TailwindClass="pt-4 w-3/4 mx-auto text-center md:w-3/5"
            />
          </div>
          <div className="relative mt-40 flex flex-wrap gap-16 justify-center pt-10 w-full mb-10">
            <CardDem data={portfolioData} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Portfolio;
