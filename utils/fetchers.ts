import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

export function useCMS<T>({
  query,
  dependency = true,
}: {
  query: string;
  dependency?: boolean;
}) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await client.fetch(query);
        setData(data);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
          setLoading(false);
        } else {
          setError("An error occurred.");
          setLoading(false);
        }
      }
    }

    if (dependency) fetchData();
  }, [query, dependency]);

  return { data, loading, error };
}

export const projectsQuery = () => {
  return `
    *[_type == "projects"] {
      title, category, type, client,
      about, year, "slug": slug.current,
      link, secondaryLink, 
      "mainImage": mainImage.asset->url,
      showcases[] {
        "src": src.asset->url, alt
      },
      detailText, services, publishedAt
    }
  `;
};

export const projectQuery = (slug: string) => {
  return `
    *[_type == "projects" && slug.current == "${slug}"] {
      title, category, type, client,
      about, "slug": slug.current,
      link, secondaryLink,
      "mainImage": mainImage.asset->url,
      showcases[] {
        "src": src.asset->url, alt
      },
      detailText, services, publishedAt
    }
  `;
};

export const testimonialsQuery = () => {
  return `
    *[_type == "testimonials"] {
      author, description, quoteText,
      quotes, "image": image.asset->url
    }
  `;
};

export const articlesQuery = () => {
  return `
    *[_type == "articles"] {
      title, client, link, publishedAt
    }
  `;
};
