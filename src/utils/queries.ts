export const projectsShortQuery = `*[_type == "project"] {
    _id,
    title,
    "slug": slug.current,
    service->{
      _id,
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
     _id,
    title,
    "slug": slug.current,
    tags[]->{
      _id,
      service->{
        _id,
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
    "images": images[].image.asset->url
  }`;

export const servicesQuery = `*[_type == "service"] {
    _id,
    name,
    description,  
    tags[]->{
      _id,
      name,
      description,
    },
    order
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

export const aboutQuery = `*[_type == "about"] {
  "id": _id,
  title,
  subtitle
}[0]`;
