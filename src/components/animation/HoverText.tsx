import { memo } from "react";

interface Props {
  hoverText: HoverTextType;
}

export interface HoverTextType {
  title: string;
  description?: string;
}

function HoverText({ hoverText }: Props) {
  return (
    <div className="flex max-w-72 flex-col gap-1 border bg-white px-4 py-2">
      <h2 className="text-sm uppercase">[ {hoverText.title} ]</h2>
      {hoverText.description && (
        <div className="text-base font-normal opacity-80">
          {hoverText.description}
        </div>
      )}
    </div>
  );
}

export default memo(HoverText);
