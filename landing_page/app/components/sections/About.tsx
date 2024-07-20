import Image from "next/image";
import { AboutType } from "../types/Type";
import bg from "@/images/assets/Images/Background.png";
import Wrapper from "../layout/Wrapper";
import TypographyH1 from "../shacdnCom/Heading";
import TypographyH2 from "../shacdnCom/Heading2";
import TypographyP from "../shacdnCom/Para";
function About() {
  const aboutData: AboutType[] = [
    {
      heading: "Projects Done",
      num: 502,
    },
    {
      heading: "Years of Experience",
      num: 10,
    },
    {
      heading: "Clients Served",
      num: 273,
    },
  ];
  return (
    // <Wrapper>
    <div className=" text-center items-center font-thin w-full mx-auto p-10  bg-slate-900  text-white relative ">
      <div className=" absolute   bottom-0  right-1/2 z-0">
        <Image src={bg} alt="background" />
      </div>
      <TypographyH2 text="About Me" TailwindClass="text-white" />
      <TypographyP
        text=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
        maiores soluta! Non quis consequuntur magnam dignissimos dolores qui
        assumenda, sunt quae dolorum tempora earum dolor reiciendis sapiente
        quasi vero, veritatis ducimus quidem. Facere ipsum alias quos delectus
        laboriosam sequi."
        TailwindClass="w-11/12 md:w-8/12  mx-auto py-2"
      />
      <div className="flex  my-4 flex-wrap justify-between sm:justify-center sm:gap-6  px-4 w-full text-center z-30">
        {aboutData.map((item, i) => (
          <div className="  w-1/4 sm:1/3 " key={i}>
            <TypographyH1
              text={`${item.num.toString()}+`}
              TailwindClass="text-rose-200 font-semibold text-4xl md:text-5xl "
            />
            <TypographyP
              text={`${item.heading}`}
              TailwindClass="text-2xl font-medium sm:font-semibold  pt-3"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
