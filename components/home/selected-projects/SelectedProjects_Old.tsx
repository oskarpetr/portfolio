import { useRef, useState } from "react";
import Container from "../../general/Container";
import { handleMouseMove } from "@/utils/mouseMove";
import ProjectPreview from "../../animation/ProjectPreview";
import { IProject } from "@/types/Project.types";
import TextSlideIn from "../../animation/TextSlideIn";
import SectionTitle from "../../general/SectionTitle";
import ProjectItem_Old from "./ProjectItem_Old";

interface Props {
  projects: IProject[];
}

export default function SelectedProjects_Old({ projects }: Props) {
  // hovered project
  const [active, setActive] = useState<null | string>(null);

  // preview position
  const [previewProsition, setPreviewPosition] = useState({ x: 0, y: 0 });

  // refs
  const projectsRef = useRef<HTMLDivElement>(null);
  const previewImageRef = useRef<HTMLDivElement>(null);

  // project for preview
  const project = projects.find((p) => p.slug === active);

  const projectsSubtitle =
    "I am a cybernetics student who loves to pursue web development, design, and writing. I turn your ideas into reality with aesthetics. Also writing for publications about my. Design, and writing. I turn your ideas into reality with.";

  return (
    <div id="projects">
      <Container className="mt-48">
        <div className="mb-48">
          <div className="flex justify-between items-end">
            <TextSlideIn
              className="text-[6vw] font-semibold !tracking-tight text-white-primary"
              text="Browse the projects"
            />
          </div>

          <div className="flex justify-end -mt-4">
            <TextSlideIn
              className="text-[6vw] font-semibold !tracking-tight text-white-primary"
              text="I've made for my clients"
            />
          </div>

          <div className="-mt-4">
            <TextSlideIn
              className="text-[6vw] font-semibold !tracking-tight text-white-primary"
              text="and other purposes"
            />
          </div>

          <div className="w-1/2 mt-8">
            <TextSlideIn
              text={projectsSubtitle}
              stagger={0.01}
              className="text-white-primary text-xl body-text opacity-70 font-normal"
            />
          </div>
        </div>

        <div className="absolute pointer-events-none" ref={previewImageRef}>
          <ProjectPreview project={project} mousePosition={previewProsition} />
        </div>

        <div
          ref={projectsRef}
          onMouseMove={(event) =>
            handleMouseMove({
              event,
              setMousePosition: setPreviewPosition,
              outerRef: projectsRef,
              innerRef: previewImageRef,
            })
          }
          onMouseLeave={() => setPreviewPosition({ x: 0, y: 0 })}
        >
          <SectionTitle title="Selected projects" color="white" />

          {projects.map((project, index) => (
            <ProjectItem_Old
              key={project.slug}
              project={project}
              index={index}
              active={active}
              setActive={setActive}
              projectsLength={projects.length}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
