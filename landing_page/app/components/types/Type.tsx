import { StaticImageData } from "next/image";
export interface IconsType {
  link: string;
  icon: JSX.Element;
}
export interface NavType {
  name: string;
  path: string;
}
export interface AboutType {
  heading: string;
  num: number;
}
export interface SerPortType {
  img: StaticImageData;
  heading: string;
  des: string;
  icon?: Element;
  date?: string;
}
export interface SkillType {
  name: string;
  range: number;
}
export interface BlogType {
  img: StaticImageData;
  date: string;
  heading: string;
  des: string;
}

export interface AddressType {
  link: string;
  icon: JSX.Element;
}
