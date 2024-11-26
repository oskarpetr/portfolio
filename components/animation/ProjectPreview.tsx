import { BEZIER_EASING } from "@/constants/animation";
import { IProject } from "@/types/Project.types";
import { cdnBlurImage, cdnCustomWidthImage } from "@/utils/images";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface Props {
  project?: IProject;
  mousePosition: { x: number; y: number };
}

export default function ProjectPreview({ project, mousePosition }: Props) {
  return (
    <AnimatePresence mode="wait">
      {mousePosition.x !== 0 && mousePosition.y !== 0 && project?.mainImage && (
        <motion.div
          initial={{
            scale: 0,
            opacity: 0,
            y: mousePosition.y,
            x: mousePosition.x,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            y: mousePosition.y,
            x: mousePosition.x,
          }}
          exit={{
            scale: 0,
            opacity: 0,
            transition: { ease: BEZIER_EASING },
          }}
          transition={{ ease: "backOut" }}
          // style={{ backgroundColor: app.images.main.color }}
          className="p-10 relative z-10 pointer-events-none w-fit flex flex-col gap-4 justify-center rounded-lg"
        >
          <Image
            src={project.mainImage}
            alt={project.title}
            width={300}
            height={300}
            className="w-96 rounded-lg transition-all duration-500"
            placeholder="blur"
            blurDataURL={cdnBlurImage(project.mainImage, 300)}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
