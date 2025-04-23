import FadeIn from "@/components/animation/FadeIn";
import ParagraphSplit from "@/components/animation/ParagraphSplit";
import PageLayout from "@/components/layout/PageLayout";
import Button from "@/components/shared/Button";
import SectionTitle from "@/components/shared/SectionTitle";
import { useTranslationStore } from "@/translation/useTranslationStore";
import Link from "next/link";

export default function NotFoundPage() {
  const { translation } = useTranslationStore();

  return (
    <PageLayout>
      <div className="mt-20 flex flex-col gap-8 font-normal md:ml-[50%]">
        <div className="flex flex-col gap-4">
          <SectionTitle
            title={translation.sectionTitles.notFound}
            enableMargin={false}
          />
          <ParagraphSplit
            text={translation.notFound.description}
            indent={false}
          />
        </div>

        <FadeIn delay={0.2}>
          <Link href="/">
            <Button text={translation.buttons.backHome} />
          </Link>
        </FadeIn>
      </div>
    </PageLayout>
  );
}
