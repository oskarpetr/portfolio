import { useState } from "react";
import SectionBubble from "../general/SectionBubble";
import TechnologyItem from "./TechnologyItem";
import technologies from "@/data/technologies";

export default function Technologies() {
  const [active, setActive] = useState<null | string>(null);

  return (
    <div className="p-16 h-screen">
      <SectionBubble title="Technologies" />

      <div>
        {technologies.map((technology, index) => (
          <TechnologyItem
            key={technology.id}
            technology={technology}
            index={index}
            active={active}
            setActive={setActive}
          />
        ))}
      </div>
    </div>
  );
}
