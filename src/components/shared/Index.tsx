interface Props {
  index: number;
}

export default function Index({ index }: Props) {
  return <div className="text-sm">[ {String(index).padStart(2, "0")} ]</div>;
}
