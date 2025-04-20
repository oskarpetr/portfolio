export const projectsShortQuery = `*[_type == "project"] {
    "id": _id,
    title,
    "slug": slug.current,
    service->{
      "id": _id,
      name,
    },
    mainImage {
      "url": asset->url,
      alt
    },
    startedAt
  }`;

export const projectQuery = (
  slug: string,
) => `*[_type == "project" && slug.current == "${slug}"] {
     "id": _id,
    title,
    "slug": slug.current,
    tags[]->{
      "id": _id,
      service->{
        "id": _id,
        name
      },
      name,
      description,
    },
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
    description,
    startedAt
  }[0]`;

export const projectsSitemapQuery = `*[_type == "project"] {
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    "images": images[].image.asset->url
  }`;

export const projectsSlugsQuery = `*[_type == "project"] {
    "slug": slug.current
  }`;

export const servicesQuery = `*[_type == "service"] {
    "id": _id,
    name,
    description,  
    tags[]->{
      "id": _id,
      name,
      description,
    },
    order
  }`;

export const articlesQuery = `*[_type == "article"] {
    "id": _id,
    title,
    url,
    publishedAt,
  }`;

export const graphicDesignsQuery = `*[_type == "graphicDesign"] {
  "id": _id,
	image {
		"url": asset->url,
    alt
  },
}`;

export const aboutQuery = `*[_type == "about"] {
  "id": _id,
  title,
  process
}[0]`;

export const testimonialsQuery = `*[_type == "testimonial"] {
  "id": _id,
  logo {
    "url": asset->url,
    alt
  },
  content,
  author,
  authorPosition,
  publishedAt
}`;
