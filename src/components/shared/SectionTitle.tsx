import FadeIn from "../animation/FadeIn";

interface Props {
  title: string;
  number?: number;
  enableMargin?: boolean;
}

export default function SectionTitle({
  title,
  number,
  enableMargin = true,
}: Props) {
  return (
    <div className={enableMargin ? "mb-12" : ""}>
      <FadeIn delay={0.1}>
        <div className="flex items-end gap-2">
          <h2 className="serif text-5xl whitespace-nowrap">{title}</h2>
          {number && <div className="serif text-2xl">({number})</div>}
        </div>
      </FadeIn>
    </div>
  );
}
