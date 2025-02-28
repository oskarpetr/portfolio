interface Props {
  title: string;
}

export default function SectionTitle({ title }: Props) {
  return <h2 className="text-sm uppercase">[ {title} ]</h2>;
}
