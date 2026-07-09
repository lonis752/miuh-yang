/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Renders a word as its letter OUTLINES in distinct madder stitches (no fill), sewn in
// left-to-right and slowly so you can watch each stitch appear. Sizes to the surrounding font.
export default function StitchedText({ children, italic = false, className = "" }) {
  const textRef = useRef(null);
  const [box, setBox] = useState(null);

  useEffect(() => {
    let alive = true;
    let raf1, raf2;
    const measure = () => {
      if (!alive || !textRef.current) return;
      const b = textRef.current.getBBox();
      if (b.width) setBox({ x: b.x, y: b.y, w: b.width, h: b.height });
    };
    raf1 = requestAnimationFrame(() => {
      measure();
      raf2 = requestAnimationFrame(measure);
    });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    return () => {
      alive = false;
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [children]);

  const pad = 8;
  const vb = box
    ? `${box.x - pad} ${box.y - pad} ${box.w + pad * 2} ${box.h + pad * 2}`
    : "0 0 320 96";
  const widthEm = box ? (box.w + pad * 2) / (box.h + pad * 2) : 4.2;

  return (
    <motion.span
      className={`inline-block ${className}`}
      style={{
        height: "1em",
        width: `${widthEm}em`,
        verticalAlign: "-0.12em",
        visibility: box ? "visible" : "hidden",
      }}
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 3.8, ease: "linear", delay: 0.35 }}
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
          fill="none"
          stroke="#8A3B2E"
          strokeWidth="2.2"
          strokeDasharray="6 7"
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
