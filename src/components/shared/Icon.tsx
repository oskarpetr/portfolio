import {
  ArrowElbowDownRight,
  ArrowUpRight,
  BracketsCurly,
  Eyes,
  IconWeight,
} from "@phosphor-icons/react";

export type IconType =
  | "ArrowUpRight"
  | "ArrowElbowDownRight"
  | "Eyes"
  | "BracketsCurly";

interface Props {
  name: IconType;
  size?: number;
  weight?: IconWeight;
  color?: string;
  className?: string;
}

const Icon = ({
  name,
  size = 24,
  weight = "regular",
  color = "currentColor",
  className,
}: Props) => {
  const icons = { ArrowUpRight, ArrowElbowDownRight, Eyes, BracketsCurly };
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
};

export default Icon;
