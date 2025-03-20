import { PropsWithChildren } from "react";

export default function PageLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-[calc(100vh-85px)] flex-col gap-64 p-10">
      {children}
    </div>
  );
}
