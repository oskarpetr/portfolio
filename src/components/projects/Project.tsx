import { IProject } from "@/types/Project.types";

interface Props {
  project: IProject;
}

export default function Project({ project }: Props) {
  return <div>{project.title}</div>;
}
