/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

// A running-stitch underline that sews itself in one stitch at a time, left to right, at an
// unhurried hand-sewn pace. Stretches to the width of its container.
export default function StitchedUnderline({
  count = 22,
  color = "#8A3B2E",
  duration = 4.2,
  className = "",
}) {
  const per = duration / count;
  const cell = 100 / count;
  return (
    <svg
      className={`block w-full overflow-visible ${className}`}
      style={{ height: "0.45em" }}
      viewBox="0 0 100 3"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.g
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px" }}
        variants={{ show: { transition: { staggerChildren: per } } }}
      >
        {Array.from({ length: count }).map((_, i) => (
          <motion.line
            key={i}
            x1={i * cell + cell * 0.15}
            y1="1.5"
            x2={i * cell + cell * 0.72}
            y2="1.5"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { duration: 0.18 } },
            }}
          />
        ))}
      </motion.g>
    </svg>
  );
}
