import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: true,
});
