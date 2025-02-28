import Link from "next/link";
import TextStagger from "../shared/TextStagger";

export default function Menu() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-0 z-10 flex justify-between bg-white p-10">
      <TextStagger>
        <Link href="/">Oskar Petr</Link>
      </TextStagger>

      <div className="flex gap-4">
        <button onClick={() => scrollTo("projects")} className="cursor-pointer">
          <TextStagger>Projects,</TextStagger>
        </button>
        <button onClick={() => scrollTo("about")} className="cursor-pointer">
          <TextStagger>About,</TextStagger>
        </button>
        <button onClick={() => scrollTo("articles")} className="cursor-pointer">
          <TextStagger>Articles,</TextStagger>
        </button>
        <button onClick={() => scrollTo("contact")} className="cursor-pointer">
          <TextStagger>Contact</TextStagger>
        </button>
      </div>
    </div>
  );
}
