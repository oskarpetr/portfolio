import FadeIn from "./FadeIn";

interface Props {
  title: string;
  delay?: number;
}

export default function Subheading({ title, delay = 0 }: Props) {
  return (
    <FadeIn
      delay={delay}
      className="text-3xl flex gap-4 z-30 relative text-neutral-400 font-medium"
    >
      <h2>{title}</h2>
      {/* <span className="opacity-50">➼</span> */}
    </FadeIn>
  );
}
