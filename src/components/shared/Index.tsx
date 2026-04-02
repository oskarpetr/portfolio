interface Props {
  index: number;
}

export default function Index({ index }: Props) {
  return (
    <div className="flex items-center gap-[1px] text-sm font-semibold opacity-50">
      <p>(</p>
      <p>{String(index + 1).padStart(2, "0")}</p>
      <p>)</p>
    </div>
  );
}
