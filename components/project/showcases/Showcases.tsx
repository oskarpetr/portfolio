import { IShowcase } from "@/types/Project.types";
import ShowcaseItem from "./ShowcaseItem";
import Container from "../../general/Container";

interface Props {
  showcases: IShowcase[];
}

export default function Showcases({ showcases }: Props) {
  return (
    showcases.length > 0 && (
      <Container className="bg-white-primary flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          {showcases.slice(0, 2).map((showcase) => (
            <ShowcaseItem key={showcase.alt} showcase={showcase} />
          ))}
        </div>

        <ShowcaseItem showcase={showcases[2]} />
      </Container>
    )
  );
}
