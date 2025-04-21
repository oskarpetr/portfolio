import { PropsWithChildren } from "react";

export default function PageLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-[calc(100vh-85px)] flex-col gap-24 p-10 sm:pb-48 lg:gap-48">
      {children}
    </div>
  );
}
