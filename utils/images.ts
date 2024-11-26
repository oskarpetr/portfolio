import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

export function cdnBlurImage(url: string, width: number) {
  const uploadIndex = url.indexOf("/upload/");

  const transformedUrl =
    url.slice(0, uploadIndex + 8) +
    `e_blur:10000,w_${width}/` +
    url.slice(uploadIndex + 8);

  return transformedUrl;
}

export function cdnCustomWidthImage(url: string, width: number) {
  const uploadIndex = url.indexOf("/upload/");

  const transformedUrl =
    url.slice(0, uploadIndex + 8) + `w_${width}/` + url.slice(uploadIndex + 8);

  return transformedUrl;
}

export function sanityImage(source: string) {
  return imageUrlBuilder(client).image(source).url();
}
