import Container from "../../general/Container";
import TextSlideIn from "../../animation/TextSlideIn";
import Image from "next/image";
import Parallax from "../../animation/Parallax";
import ImageSlideIn from "../../animation/ImageSlideIn";
import SectionTitle from "../../general/SectionTitle";
import AboutParagraph from "./AboutParagraph";
import AboutCards from "./AboutCards";

export default function About() {
  // about me
  const aboutMe =
    "As a creative developer, I continuously craft innovative layouts and features that make my projects visually captivating and stand out.";

  // development text
  const developmentText =
    "I am a cybernetics student who loves to pursue web development, design, and writing. I help individuals and businesses make a memorable online presence.";

  return (
    <Container>
      <div className="mt-48 w-full sm:w-4/5 flex flex-col gap-32">
        <div>
          {/* <SectionTitle title="About" color="white" delay={0.5} /> */}
          <SectionTitle title="About" color="white" />
          <TextSlideIn
            text={aboutMe}
            className="text-3xl sm:text-[3vw] text-white-primary"
          />
        </div>

        <div className="absolute right-0 mt-96 sm:mt-64 mix-blend-luminosity">
          <Parallax size="lg">
            <ImageSlideIn>
              <Container>
                <Image
                  src="https://res.cloudinary.com/dod9tmblh/image/upload/v1724585153/Piano_dihuva.jpg"
                  alt="Piano"
                  width={150}
                  height={0}
                />
              </Container>
            </ImageSlideIn>
          </Parallax>
        </div>

        {/* <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 sm:gap-24 mr-16">
          <AboutParagraph
            title="Development"
            text={developmentText}
            linkText="GitHub"
            link="https://github.com/oskarpetr"
            order={1}
          />
          <AboutParagraph
            title="Design"
            text={developmentText}
            linkText="Dribble"
            link="https://dribbble.com/oskarpetr"
            delay={0.2}
            order={2}
          />
          <AboutParagraph
            title="Technical writing"
            text={developmentText}
            linkText="Medium"
            link="https://medium.com/@oskarpetr"
            delay={0.4}
            order={3}
          />
        </div> */}
      </div>

      <AboutCards />
    </Container>
  );
}
