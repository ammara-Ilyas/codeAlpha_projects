interface ParaType {
  text: string;
  TailwindClass?: string;
}

const TypographyP: React.FC<ParaType> = ({ text, TailwindClass = "" }) => {
  return (
    <p className={`${TailwindClass} leading-7 [&:not(:first-child)]:mt-1 mb-2`}>
      {text}
    </p>
  );
};

export default TypographyP;
