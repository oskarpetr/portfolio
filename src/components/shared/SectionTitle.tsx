import FadeIn from "../animation/FadeIn";

interface Props {
  title: string;
}

export default function SectionTitle({ title }: Props) {
  return (
    <FadeIn delay={0.1}>
      <h2 className="text-sm uppercase">[ {title} ]</h2>
    </FadeIn>
  );
}
