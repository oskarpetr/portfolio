// import { ProjectImage } from "@/types/Project.types";
// import HoverElement from "../animation/HoverElement";
// import Reveal from "../animation/Reveal";
// import Image from "next/image";
// import { getPlaceholder } from "@/utils/placeholder";
// import { useEffect, useState } from "react";

// interface Props {
//   image: ProjectImage;
//   index: number;
// }

// export default function ImageComponent({ image, index }: Props) {
//   const [placeholder, setPlaceholder] = useState<string | undefined>(undefined);

//   useEffect(() => {
//     const fetchPlaceholder = async () => {
//       setPlaceholder(await getPlaceholder(image.url));
//     };

//     fetchPlaceholder();
//   }, []);

//   return (
//     <HoverElement
//       hoverText={{
//         title: image.alt,
//       }}
//     >
//       <Reveal direction="up" delay={0.1 * index}>
//         <div className="relative pt-[80%]">
//           <Image
//             src={image.url}
//             alt={image.alt}
//             placeholder="blur"
//             blurDataURL={placeholder}
//             fill
//             priority
//             loading="eager"
//             className="object-cover grayscale"
//           />
//         </div>
//       </Reveal>
//     </HoverElement>
//   );
// }
