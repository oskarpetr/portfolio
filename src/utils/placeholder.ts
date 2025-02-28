export default async function getPlaceholder(url: string) {
  const placeholder = await fetch(url).then(async (res) => {
    return Buffer.from(await res.arrayBuffer()).toString("base64");
  });

  return `data:image/webp;base64,${placeholder}`;
}
