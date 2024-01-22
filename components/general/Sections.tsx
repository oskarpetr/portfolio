import { menuItems } from "@/data/menuItems";
import Section from "./Section";

export default function Sections() {
  return (
    <div className="flex flex-col items-start gap-12 md:gap-20">
      {menuItems.map((item, index) => {
        return <Section key={item.title} section={item} index={index} />;
      })}
    </div>
  );
}
