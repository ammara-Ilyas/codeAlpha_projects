import React from "react";
interface HeadingType {
  text: string;
  TailwindClass?: string;
}
const TypographyH1: React.FC<HeadingType> = ({ text, TailwindClass = "" }) => {
  return (
    <h1
      className={`${TailwindClass} text-4xl font-bold tracking-tight lg:text-4xl `}
    >
      {text}
    </h1>
  );
};

export default TypographyH1;
