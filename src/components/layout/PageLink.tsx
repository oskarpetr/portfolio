import { ReactNode } from "react";
import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";
import { pageAnimation } from "@/utils/transition";

interface Props {
  href: string;
  children: ReactNode;
}

export default function PageLink({ href, children }: Props) {
  const router = useTransitionRouter();

  return (
    <Link
      href={href}
      onClick={(e) => {
        e.preventDefault();
        router.push(href, {
          onTransitionReady: pageAnimation,
        });
      }}
    >
      {children}
    </Link>
  );
}
