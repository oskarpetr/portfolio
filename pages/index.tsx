import Introduction from "@/components/general/Introduction";
import Layout from "@/components/general/Layout";
import Menu from "@/components/general/Menu";

export default function Home() {
  return (
    <Layout homeLayout>
      <Menu showMenu={false} />

      <Introduction />

      {/* <p className="mt-16 md:mt-0 md:absolute md:bottom-16 md:right-16 tracking-wide text-neutral-500">
        Portfolio © {new Date().getFullYear()} by Oskar Petr.
      </p> */}
    </Layout>

    // This work © 2024 by Oskar Petr is licensed under CC BY-NC-ND 4.0
  );
}
