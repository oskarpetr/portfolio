"use client";

import { Fragment, ReactNode } from "react";
import Menu from "./Menu";
import Providers from "./Providers";
// import Preloader from "./Preloader";
// import { AnimatePresence } from "framer-motion";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  // const [isPreloaded, setIsPreloaded] = useState(false);

  return (
    <Providers>
      {/* <AnimatePresence mode="wait">
        {!isPreloaded && <Preloader setIsPreloaded={setIsPreloaded} />}
      </AnimatePresence> */}

      {/* {isPreloaded && ( */}
      <Fragment>
        <Menu />
        <div className="p-10">{children}</div>
      </Fragment>
      {/* )} */}
    </Providers>
  );
}
