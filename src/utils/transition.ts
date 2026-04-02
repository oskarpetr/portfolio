import { BEZIER_PAGE_EASING } from "./animation";

export const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 0.3,
        scale: 0.9,
        transform: "translateY(-150px)",
        // rotate: "3deg",
      },
    ],
    {
      duration: 1000,
      easing: `cubic-bezier(${BEZIER_PAGE_EASING.join(",")})`,
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    },
  );

  document.documentElement.animate(
    [
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
      },
    ],
    {
      duration: 1000,
      easing: `cubic-bezier(${BEZIER_PAGE_EASING.join(",")})`,
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    },
  );
};
