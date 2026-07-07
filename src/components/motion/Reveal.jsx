/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

// Fade + rise as the element scrolls into view. Runs once.
export function Reveal({ children, as = "div", delay = 0, y = 28, className }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 1, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

// Staggered container: children animate in sequence. Pair with <RevealItem>.
export function RevealGroup({ children, className, stagger = 0.12, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-12% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, as = "div", y = 22, className }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
      }}
    >
      {children}
    </MotionTag>
  );
}
