interface Props {
  index: number;
}

export default function Index({ index }: Props) {
  return (
    <div className="serif text-xl">{String(index + 1).padStart(2, "0")}</div>
  );
}
