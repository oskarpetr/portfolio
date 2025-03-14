import { memo, ReactNode } from "react";
import HoverElement from "./HoverElement";
import Icon, { IconNames } from "../shared/Icon";

export interface Props {
  children: ReactNode;
  icon?: IconNames;
  title?: string;
  description?: string;
}

function Tooltip({ children, icon, title, description }: Props) {
  const tooltip = (
    <div className="flex items-center gap-2 border bg-white px-4 py-2 whitespace-nowrap shadow-2xl">
      {icon && <Icon name={icon} size={16} />}
      <div className="flex flex-col gap-1">
        {title && <div className="text-sm uppercase">{title}</div>}
        {description && (
          <div className="text-base font-normal">{description}</div>
        )}
      </div>
    </div>
  );

  return <HoverElement hoverChildren={tooltip}>{children}</HoverElement>;
}

export default memo(Tooltip);
