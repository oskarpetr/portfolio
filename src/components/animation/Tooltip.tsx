"use client";

import { memo, ReactNode } from "react";
import Icon, { IconType } from "../shared/Icon";
import dynamic from "next/dynamic";

export interface Props {
  children: ReactNode;
  icon?: IconType;
  title?: string;
  description?: string;
  zIndex?: number;
}

const HoverElement = dynamic(() => import("./HoverElement"), { ssr: false });

function Tooltip({ children, icon, title, description, zIndex = 10 }: Props) {
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

  return (
    <HoverElement hoverChildren={tooltip} zIndex={zIndex}>
      {children}
    </HoverElement>
  );
}

export default memo(Tooltip);
