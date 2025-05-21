import ClientDocs from "@/components/clients/ClientDocs";
import EmptyPage from "@/components/layout/EmptyPage";
import PageLayout from "@/components/layout/PageLayout";
import { getClient } from "@/utils/cms";
import { notFound } from "next/navigation";
import { cache, Suspense } from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

// fetch data
const fetchClient = cache(getClient);

export default async function ClientPage({ params }: Props) {
  const client = await fetchClient((await params).slug);

  if (!client) {
    return notFound();
  }

  return (
    <PageLayout>
      <Suspense fallback={<EmptyPage />}>
        <ClientDocs client={client} />
      </Suspense>
    </PageLayout>
  );
}
