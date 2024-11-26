import { cn } from "@/utils/cn";
import Icon from "./Icon";

interface Props {
  text?: string;
  texts?: string[];
  invert?: boolean;
  icon?: string;
}

export default function CircleLink({
  text,
  texts,
  invert = true,
  icon,
}: Props) {
  return (
    <div
      className={cn(
        "w-36 h-36 border border-opacity-20 rounded-full select-none flex justify-center items-center gap-1 pointer-events-none",
        invert
          ? "bg-white-primary border-black-primary text-black-primary"
          : "bg-black-primary border-white-primary text-white-primary"
      )}
    >
      {text && (
        <div className="text-md uppercase body-text font-bold text-center">
          {text}
        </div>
      )}

      {texts && (
        <div>
          {texts.map((text, index) => (
            <div
              key={index}
              className="text-md uppercase body-text font-bold text-center"
            >
              {text}
            </div>
          ))}
        </div>
      )}

      {icon && (
        <Icon
          name={icon}
          size={20}
          weight="bold"
          className={invert ? "*:text-black-primary" : "*:text-white-primary"}
        />
      )}
    </div>
  );
}
