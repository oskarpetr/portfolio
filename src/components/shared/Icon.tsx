import {
  ArrowElbowDownRight,
  ArrowRight,
  ArrowUpRight,
  CaretRight,
  Eyes,
  IconWeight,
  LockSimple,
  Spinner,
} from "@phosphor-icons/react";

export type IconType =
  | "ArrowUpRight"
  | "ArrowRight"
  | "ArrowElbowDownRight"
  | "Eyes"
  | "Spinner"
  | "CaretRight"
  | "LockSimple";

interface Props {
  name: IconType;
  size?: number;
  weight?: IconWeight;
  color?: string;
  className?: string;
}

export default function Icon({
  name,
  size = 24,
  weight = "regular",
  color = "currentColor",
  className,
}: Props) {
  const icons = {
    ArrowUpRight,
    ArrowRight,
    ArrowElbowDownRight,
    Eyes,
    Spinner,
    CaretRight,
    LockSimple,
  };
  const PhosphorIcon = icons[name as keyof typeof icons];

  if (!PhosphorIcon) return null;

  return (
    <PhosphorIcon
      size={size}
      weight={weight}
      color={color}
      className={className}
    />
  );
}
