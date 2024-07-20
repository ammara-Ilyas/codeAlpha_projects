"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/assets/portfolio/Logo.png";
import { NavType } from "../types/Type";
import { Button } from "@/components/ui/button";
import { VscThreeBars } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";
import Navlink from "../widgets/Navlink";
function Header() {
  const [isOpened, setIsOpenedl] = useState(false);

  const navLink: NavType[] = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "about",
      path: "#about",
    },
    {
      name: "Services",
      path: "#services",
    },
    {
      name: "Project",
      path: "#project",
    },

    {
      name: "Contact",
      path: "#contact",
    },
  ];
  return (
    <header className="bg-rose-200 text-black  font-bold grid grid-cols-9 items-center py-3 duration-75 sticky top-0 z-50">
      <div className="rounded-full hidden bg-red-500 absolute left-1/3 w-28 h-28 -top-3/4 z-100"></div>
      <div className="w-40 col-start-1 pl-10">
        <Image src={logo} alt="logo" className="w-full" />
      </div>
      <nav
        className={`${
          !isOpened ? "hidden" : "block"
        }  navLink col-start-4 col-end-10 pt-2 row-start-0 md:block  bg-red-400 bg-opacity-90 md:bg-transparent md:row-start-1  md:w-1/2  w-1/2  md:col-start-4 md:gap-5  md:row-end-1 md:relative  absolute top-0 right-0 md:h-auto h-screen  `}
      >
        {" "}
        <div className="pl-5 pt-5 text-3xl md:hidden">
          {" "}
          <RxCross2 onClick={() => setIsOpenedl(false)} />{" "}
        </div>
        <ul className="flex   md:justify-between flex-col text-2xl md:text-lg w-full mt-24 md:m-0 gap-5 items-center h-full md:flex-row md:gap-2">
          {navLink.map((item, i) => (
            <li
              className=" text-left w-1/2 md:w-auto capitalize"
              key={i}
              onClick={() => setIsOpenedl(!isOpened)}
            >
              <Navlink path={item.path} name={item.name} />
            </li>
          ))}
        </ul>
      </nav>

      <div className="col-start-9 row-start-1 md:col-start-8 md:col-end-10 flex justify-center">
        <div className="hidden md:block ">
          <Button variant="hire" size="lg">
            Hire me
          </Button>
        </div>
        <div className="block text-2xl md:hidden col-start-10 ml-8">
          <VscThreeBars onClick={() => setIsOpenedl(!isOpened)} />
        </div>
      </div>
    </header>
  );
}

export default Header;
