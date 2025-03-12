import { memo, ReactNode } from "react";
import HoverElement from "./HoverElement";

export interface Props {
  children: ReactNode;
  title?: string;
  description?: string;
}

function Tooltip({ children, title, description }: Props) {
  const tooltip = (
    <div className="flex flex-col gap-1 border bg-white px-4 py-2 whitespace-nowrap">
      {title && <div className="text-sm uppercase">[ {title} ]</div>}
      {description && (
        <div className="text-base font-normal opacity-80">{description}</div>
      )}
    </div>
  );

  return <HoverElement hoverChildren={tooltip}>{children}</HoverElement>;
}

export default memo(Tooltip);
