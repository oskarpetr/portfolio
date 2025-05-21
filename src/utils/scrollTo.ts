export default function scrollTo(id: string) {
  const section = document.getElementById(id);

  if (section) {
    const offset = section.offsetTop;
    window.scrollTo({
      top: offset - 160,
      behavior: "smooth",
    });
  }
}
