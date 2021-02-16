import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = () => {
  const controls = useAnimation();
  // This is used to work out when a component is in view or not. n.b. threshold is optional, but in this case we've specified that when half the element is in view, that's when we want to start the animations.
  const [element, view] = useInView({ threshold: 0.5 });

  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }

  return [element, controls];
};
