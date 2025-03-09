import SectionTitle from "../shared/SectionTitle";
import AboutUniversity from "./AboutUniversity";
import AboutText from "./AboutText";

export default function About() {
  return (
    <div>
      <SectionTitle title="About" />

      <div className="flex flex-col gap-32">
        <AboutText />
        <AboutUniversity />
      </div>
    </div>
  );
}
