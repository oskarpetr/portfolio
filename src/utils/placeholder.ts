import { getPlaiceholder } from "plaiceholder";

export async function getPlaceholder(src: string) {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer()),
  );

  return (await getPlaiceholder(buffer, { size: 10 })).base64;
}

// export default async function getPlaceholder(url: string) {
//   const placeholder = await fetch(url).then(async (res) => {
//     return Buffer.from(await res.arrayBuffer()).toString("base64");
//   });

//   return `data:image/webp;base64,${placeholder}`;
// }
