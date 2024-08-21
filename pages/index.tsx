import Introduction from "@/components/general/Introduction";
import Layout from "@/components/general/Layout";
import Menu from "@/components/general/Menu";
import DevelopmentSection from "@/components/general/DevelopmentSection";

export default function Home() {
  return (
    <Layout>
      <Menu />

      <Introduction />

      {/* <div className="absolute top-0"> */}
      {/* <div className="min-h-screen pointer-events-none select-none"></div> */}
      {/* <DevelopmentSection /> */}
      {/* </div> */}

      <div className="h-screen"></div>

      <p className="mt-16 md:mt-0 md:absolute md:bottom-16 md:right-16 tracking-wide text-neutral-500">
        Portfolio © {new Date().getFullYear()} by Oskar Petr.
      </p>
    </Layout>

    // This work © 2024 by Oskar Petr is licensed under CC BY-NC-ND 4.0
  );
}
