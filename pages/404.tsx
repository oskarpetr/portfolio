import FadeIn from "@/components/general/FadeIn";
import Layout from "@/components/general/Layout";
import Menu from "@/components/general/Menu";
import TextStagger from "@/components/general/TextStagger";

export default function Custom404() {
  return (
    <Layout title="Not found">
      <Menu />

      <TextStagger
        className="flex flex-col justify-center items-center gap-4"
        delay={0.5}
      >
        <h1 className="font-bold text-5xl">Error 404</h1>
        <p className="opacity-50">Oops! This page does not exist!</p>
      </TextStagger>
    </Layout>
  );
}
