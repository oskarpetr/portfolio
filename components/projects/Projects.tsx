import { useState } from "react";
import ProjectsSelector from "./ProjectSelector";

export default function Projects() {
  const projectItems = ["Development", "Writing", "Design"];
  const [indexSelected, setIndexSelected] = useState(0);

  return (
    <div className="mt-8">
      <ProjectsSelector
        projectItems={projectItems}
        indexSelected={indexSelected}
        setIndexSelected={setIndexSelected}
      />
    </div>
  );
}
