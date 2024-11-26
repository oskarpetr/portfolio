import TextSlideIn from "../animation/TextSlideIn";
import Container from "./Container";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="fixed top-0 left-0 z-[5] mix-blend-difference">
      <Container>
        <Link href="/" className="flex gap-3 items-center group">
          <TextSlideIn
            text="Oskar Petr"
            className="text-white-primary text-2xl body-text font-semibold"
          />
          {/* <div className="">
            <TextSlideIn
              text="✻"
              className="text-white-primary text-2xl body-text font-semibold"
            />
          </div> */}

          {/* <Image src={"/logos/Logo.svg"} width={30} height={30} alt="Logo" /> */}
        </Link>
      </Container>
    </div>
  );
}
