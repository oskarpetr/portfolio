import Layout from "@/components/general/Layout";
import Menu from "@/components/general/Menu";

export default function Custom404() {
  return (
    <Layout title="404">
      <Menu showMenu />

      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="font-bold text-5xl">Error 404</h1>
        <p className="opacity-50">Oops! This page does not exist!</p>
      </div>
    </Layout>
  );
}
