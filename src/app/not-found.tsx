import FadeIn from "@/components/animation/FadeIn";
import ParagraphSplit from "@/components/animation/ParagraphSplit";
import PageLayout from "@/components/layout/PageLayout";
import Button from "@/components/shared/Button";
import SectionTitle from "@/components/shared/SectionTitle";

export default function NotFound() {
  return (
    <PageLayout>
      <div className="mt-20 flex flex-col gap-8 font-normal md:ml-[50%]">
        <div className="flex flex-col gap-4">
          <SectionTitle title="Page Not Found" enableMargin={false} />
          <ParagraphSplit
            text="The page you are looking for does not exist."
            indent={false}
          />
        </div>

        <FadeIn delay={0.2}>
          <Button text="Back home" />
        </FadeIn>
      </div>
    </PageLayout>
  );
}
