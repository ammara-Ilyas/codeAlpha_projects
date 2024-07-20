import { AddressType } from "./Type";
//////////////import icons
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
export const address: AddressType[] = [
  {
    link: "+1205 5872 321",
    icon: <FaPhoneVolume />,
  },
  {
    link: "contact@sarajonesdesign.com",
    icon: <MdEmail />,
  },
  {
    link: "1234 Design Street,Creativeville, Webland,Imaginary State, 98765",
    icon: <FaMapMarkerAlt />,
  },
];
export const contactIcons: AddressType[] = [
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
