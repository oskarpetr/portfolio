import { memo } from "react";

interface Props {
  hoverText: HoverTextType;
}

export interface HoverTextType {
  title?: string;
  description?: string;
}

function HoverText({ hoverText }: Props) {
  return (
    <div className="flex flex-col gap-1 border bg-white px-4 py-2 whitespace-nowrap">
      {hoverText.title && (
        <div className="text-sm uppercase">[ {hoverText.title} ]</div>
      )}
      {hoverText.description && (
        <div className="text-base font-normal opacity-80">
          {hoverText.description}
        </div>
      )}
    </div>
  );
}

export default memo(HoverText);
