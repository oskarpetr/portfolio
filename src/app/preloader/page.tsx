import Image from "next/image";
import logo from "../../../public/images/logo.svg";

export default function PreloaderPage() {
  return (
    <div className="mt-96 flex flex-col items-center justify-center gap-4">
      <Image src={logo} alt="Logo" width={60} height={60} />
      <div className="text-2xl">Oskar Petr</div>
    </div>
  );
}
