import { IProject } from "@/types/Project.types";
import TextSlideIn from "../animation/TextSlideIn";
import Container from "../general/Container";

interface Props {
  project: IProject;
}

export default function ProjectDetail({ project }: Props) {
  return (
    <Container className="bg-white-primary">
      <div className="flex justify-between px-40 py-20">
        <div className="flex flex-col gap-6 w-2/3">
          {project.detailText.map((text, index) => (
            <TextSlideIn
              key={`detailText_${index}`}
              text={text}
              stagger={0.01}
              className="text-black-primary body-text text-2xl"
            />
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <TextSlideIn
            text="Services"
            stagger={0.01}
            className="text-black-primary body-text text-xl font-semibold"
          />
          {project.services.map((service, index) => (
            <TextSlideIn
              key={`service_${index}`}
              text={service}
              delay={0.5}
              stagger={0.01}
              className="text-black-primary body-text text-xl opacity-70"
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
