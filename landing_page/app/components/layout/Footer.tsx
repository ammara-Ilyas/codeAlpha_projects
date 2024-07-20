import Link from "next/link";
import Image from "next/image";
import Logo from "@/images/assets/portfolio/Logo (1).png";
import Navlink from "../widgets/Navlink";
import { IconsType } from "../types/Type";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaDribbble,
} from "react-icons/fa";

function Footer() {
  const contactIcon: IconsType[] = [
    {
      link: "https://www.instagram.com",
      icon: <FaInstagram />,
    },
    {
      link: "https://www.twitter.com",
      icon: <FaTwitter />,
    },
    {
      link: "https://www.facebook.com",
      icon: <FaFacebookF />,
    },
    {
      link: "https://www.dribble.com",
      icon: <FaDribbble />,
    },
  ];
  return (
    <div className="bg-slate-900 w-full py-16  text-center">
      <div className="flex flex-col sm:flex-row justify-between  sm:w-10/12 w-1/2 mx-auto pb-8 gap-4  text-white items-center ">
        <ul className="flex  font-semibold justify-evenly w-3/4 sm:1/3  text-xl text-white">
          <li>
            <Navlink name="About" path="#about" />
          </li>
          <li>
            <Navlink name="Services" path="#services" />
          </li>
        </ul>
        <div className="text-xl text-white sm:w-1/3 w-32">
          <Image src={Logo} alt="logo" />
        </div>
        <ul className="flex  font-semibold justify-evenly w-3/4 sm:1/3  text-xl text-white">
          <li>
            <Navlink name="Projects" path="#projects" />
          </li>
          <li>
            <Navlink name="Contact" path="#contact" />
          </li>
        </ul>
      </div>
      <p className=" text-white ">Follow me on social media:</p>
      {/* <Icon /> */}
      <ul className="flex text-white  justify-between items-center text-xl mt-3  w-40 mx-auto">
        {contactIcon.map((item, i) => (
          <li key={i}>
            <Link href={item.link} target="_blank">
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
