/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Renders a word as outlined letters with a dashed (stitched) madder stroke that reveals
// left to right, as if it is being sewn. Sizes itself to the surrounding font.
export default function StitchedText({ children, italic = false, className = "" }) {
  const textRef = useRef(null);
  const [box, setBox] = useState(null);

  useEffect(() => {
    // measure after the web font settles so the outline width is right
    let raf1, raf2;
    const measure = () => {
      if (textRef.current) {
        const b = textRef.current.getBBox();
        if (b.width) setBox({ x: b.x, y: b.y, w: b.width, h: b.height });
      }
    };
    raf1 = requestAnimationFrame(() => {
      measure();
      raf2 = requestAnimationFrame(measure);
    });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [children]);

  const pad = 6;
  const vb = box
    ? `${box.x - pad} ${box.y - pad} ${box.w + pad * 2} ${box.h + pad * 2}`
    : "0 0 320 90";
  const widthEm = box ? (box.w + pad * 2) / (box.h + pad * 2) : 4.2;

  return (
    <motion.span
      className={`inline-block ${className}`}
      style={{ height: "1em", width: `${widthEm}em`, verticalAlign: "-0.12em" }}
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
    >
      <svg
        className="h-full w-full overflow-visible"
        viewBox={vb}
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <text
          ref={textRef}
          x="0"
          y="0"
          dominantBaseline="text-before-edge"
          fontFamily="Fraunces, Georgia, serif"
          fontSize="80"
          fontWeight="400"
          fontStyle={italic ? "italic" : "normal"}
          fill="rgba(23,19,16,0.07)"
          stroke="#8A3B2E"
          strokeWidth="1.4"
          strokeDasharray="5 3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {children}
        </text>
      </svg>
      <span className="sr-only">{children}</span>
    </motion.span>
  );
}
