import Layout from "@/components/general/Layout";
import SlideIn from "@/components/animation/ImageSlideIn";

export default function Custom404() {
  return (
    <Layout title="Not found">
      <SlideIn
        className="flex flex-col justify-center items-center gap-4"
        delay={0.5}
      >
        <h1 className="font-bold text-5xl">Error 404</h1>
        <p className="opacity-50">Oops! This page does not exist!</p>
      </SlideIn>
    </Layout>
  );
}
