interface HeadingType {
  text: string;
  TailwindClass?: string;
}
const TypographyH4: React.FC<HeadingType> = ({ text, TailwindClass = "" }) => {
  return (
    <h4
      className={`${TailwindClass}scroll-m-20 text-xl font-semibold tracking-tight`}
    >
      {text}
    </h4>
  );
};

export default TypographyH4;
