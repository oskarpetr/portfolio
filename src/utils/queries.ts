export const projectsQuery = `*[_type == "project"] {
    _id,
    title,
    slug,
    category,
    mainImage {
      asset -> {
        url
      }
    },
    images[] {
      "url": image.asset->url,
      alt
    },
    description,
    startedAt
  }`;

export const projectQuery = (
  slug: string,
) => `*[_type == "project" && slug.current == "${slug}"] {
    _id,
    title,
    slug,
    category,
    mainImage {
      asset -> {
        url
      }
    },
    images[] {
      "url": image.asset->url,
      alt
    },
    description,
    startedAt
  }[0]`;
