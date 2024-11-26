import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token:
    "skKEFaxsaBb6DVAdTsTdybKJUlyHrwAy2gEj8VZkU7Uy4rdJaBkZh06mOdwPi6X7SW5hY4lsVCvxRdcQzi1mNuSlvKi8yPQhkrWz7CMaXJkEIjukdyiIsdWBF4DG3ste2oLcvARsjT5DH7HaSCNsn8zYyno5d3W32DEWeblAZ1oBxV5ewAO4",
});
