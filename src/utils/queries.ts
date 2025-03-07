export const projectsQuery = `*[_type == "project"] {
    _id,
    title,
    "slug": slug.current,
    category,
    personal,
    client,
    mainImage {
      "url": asset->url,
      alt
    },
    images[] {
      "url": image.asset->url,
      alt
    },
    development,
    design,
    description,
    startedAt
  }`;

export const projectQuery = (
  slug: string,
) => `*[_type == "project" && slug.current == "${slug}"] {
     _id,
    title,
    "slug": slug.current,
    category,
    personal,
    client,
    mainImage {
      "url": asset->url,
      alt
    },
    images[] {
      "url": image.asset->url,
      alt
    },
    development,
    design,
    description,
    startedAt
  }[0]`;

export const projectsSitemapQuery = `*[_type == "project"] {
    "slug": slug.current,
    "images": images[].image.asset->url
  }`;

export const articlesQuery = `*[_type == "article"] {
    _id,
    title,
    url,
    publishedAt,
  }`;

export const graphicDesignsQuery = `*[_type == "graphicDesign"] {
  _id,
	image {
		"url": asset->url,
    alt
  },
}`;
