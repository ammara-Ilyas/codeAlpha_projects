import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { StaticImageData } from "next/image";

interface ImageType {
  img: StaticImageData;
}
const AvatarImg: React.FC<ImageType> = ({ img }) => {
  return (
    <Avatar>
      <AvatarImage src={img.src} alt="Avatar" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};
export default AvatarImg;
