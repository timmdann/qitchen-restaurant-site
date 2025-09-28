import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
import type { Variants } from "framer-motion";

type Props = { children: ReactNode; routeKey?: string };

const easeOut: [number, number, number, number] = [0.22, 0.61, 0.36, 1];
const easeIn: [number, number, number, number] = [0.4, 0, 1, 1];

const variants: Variants = {
  initial: { opacity: 0, y: 8 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: easeOut },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.18, ease: easeIn },
  },
};

export default function PageTransition({ children, routeKey }: Props) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={routeKey}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
        style={{ willChange: "transform, opacity" }}
        className="h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
