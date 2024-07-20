import React from "react";
import Link from "next/link";
type NavType = {
  name: string;
  path: string;
};
const Navlink: React.FC<NavType> = ({ name, path }) => {
  return <Link href={path}>{name}</Link>;
};

export default Navlink;
