import { PropsWithChildren } from "react";

export default function PageLayout({ children }: PropsWithChildren) {
  return <div className="flex flex-col gap-64">{children}</div>;
}
