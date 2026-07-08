/* eslint-disable react/prop-types */
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Word({ children, progress, range }) {
  const color = useTransform(progress, range, ["#BCB2A2", "#171310"]);
  return (
    <motion.span style={{ color }}>
      {children}
      {" "}
    </motion.span>
  );
}

// Reveals text word by word as it scrolls through view: each word shifts from a soft
// light-gray to ink, like a thought coming into focus. Good for reflective prose.
export default function ScrollWords({ text, as: Tag = "p", className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.32"],
  });
  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </Tag>
  );
}
