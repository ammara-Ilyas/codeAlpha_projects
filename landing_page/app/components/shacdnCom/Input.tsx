import { Input } from "@/components/ui/input";
interface InputType {
  text: string;
}
const InputDemo: React.FC<InputType> = (text) => {
  console.log(text);

  return (
    <Input
      type={text}
      placeholder={text}
      className="px-2 py-[14px] bg-white placeholder:text-gray-400"
    />
  );
};
export default InputDemo;
