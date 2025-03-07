import FadeIn from "../animation/FadeIn";

interface Props {
  title: string;
  enableMargin?: boolean;
}

export default function SectionTitle({ title, enableMargin = true }: Props) {
  return (
    <div className={enableMargin ? "mb-8" : ""}>
      <FadeIn delay={0.1}>
        <h2 className="text-sm uppercase">[ {title} ]</h2>
      </FadeIn>
    </div>
  );
}
