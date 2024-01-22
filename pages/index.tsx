import Layout from "@/components/general/Layout";
import Menu from "@/components/general/Menu";
import Sections from "@/components/general/Sections";

export default function Home() {
  return (
    <Layout homeLayout>
      <Menu showMenu={false} />

      <Sections />

      <p className="absolute bottom-16 right-16 font-medium tracking-wide text-neutral-600">
        Portfolio © 2024 by Oskar Petr.
      </p>
    </Layout>

    // This work © 2024 by Oskar Petr is licensed under CC BY-NC-ND 4.0
  );
}
