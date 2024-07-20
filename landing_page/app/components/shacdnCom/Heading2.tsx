import React from "react";
interface HeadingType {
  text: string;
  TailwindClass?: string;
}
const TypographyH2: React.FC<HeadingType> = ({ text, TailwindClass = "" }) => {
  return (
    <h2
      className={`${TailwindClass} scroll-m-20  pb-2 text-3xl font-bold tracking-tight first:mt-0`}
    >
      {text}
    </h2>
  );
};

export default TypographyH2;
