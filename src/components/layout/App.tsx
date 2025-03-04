"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Providers from "./Providers";
import Layout from "./Layout";

interface Props {
  children: ReactNode;
}

export default function App({ children }: Props) {
  const pathname = usePathname();

  // const [preloader, setPreloader] = useState(true);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setPreloader(false);
  //   }, 1000);

  //   return () => clearTimeout(timeout);
  // }, []);

  if (pathname.startsWith("/admin")) {
    return children;
  }

  return (
    <Providers>
      {/* <AnimatePresence mode="wait">
        {preloader && <Preloader />}
      </AnimatePresence> */}

      <Layout>{children}</Layout>
    </Providers>
  );
}
