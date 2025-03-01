import { ReactNode } from "react";
import Menu from "./Menu";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <Menu />
      <div className="p-10">{children}</div>
    </div>
  );
}
