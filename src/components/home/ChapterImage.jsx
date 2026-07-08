/* eslint-disable react/prop-types */
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ik, ikSrcSet } from "../../lib/imagekit";
import { useArtworkViewer } from "../ArtworkViewer";

const EASE = [0.16, 1, 0.3, 1];

// A veil of linen that lifts to reveal the work (for the shroud: a passage, an unveiling).
function VeilEffect() {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-10 bg-linen"
      initial={{ y: "0%" }}
      whileInView={{ y: "-101%" }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 1.5, ease: EASE }}
    />
  );
}

// A running stitch that sews itself across the frame (for the floral/textile work).
function StitchEffect() {
  const stitches = Array.from({ length: 14 });
  return (
    <svg
      className="pointer-events-none absolute inset-x-0 bottom-6 z-10 h-6 w-full"
      viewBox="0 0 280 12"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.g
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-15% 0px" }}
        variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } } }}
      >
        {stitches.map((_, i) => (
          <motion.line
            key={i}
            x1={14 + i * 18}
            y1="6"
            x2={14 + i * 18 + 11}
            y2="6"
            stroke="#8A3B2E"
            strokeWidth="2.5"
            strokeLinecap="round"
            variants={{
              hidden: { opacity: 0, scaleX: 0 },
              show: { opacity: 0.9, scaleX: 1, transition: { duration: 0.35, ease: EASE } },
            }}
            style={{ transformOrigin: "left center" }}
          />
        ))}
      </motion.g>
    </svg>
  );
}

// A framed artwork image with subtle scroll parallax + optional signature effect.
// Clicking opens the zoom viewer.
export default function ChapterImage({ src, title, subtitle, effect, className = "" }) {
  const ref = useRef(null);
  const viewer = useArtworkViewer();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  const openViewer = () => viewer?.open({ src, title, subtitle });

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-[3px] bg-shade ${className}`}
    >
      <motion.img
        style={{ y, scale: 1.16 }}
        src={ik(src, { w: 1200 })}
        srcSet={ikSrcSet(src, [600, 1000, 1400])}
        sizes="(min-width: 1024px) 50vw, 92vw"
        alt={title}
        loading="lazy"
        decoding="async"
        onClick={openViewer}
        className="h-full w-full cursor-zoom-in object-cover"
      />

      {effect === "veil" && <VeilEffect />}
      {effect === "stitch" && <StitchEffect />}

      <button
        onClick={openViewer}
        className="absolute bottom-4 right-4 z-20 translate-y-2 rounded-full border border-linen/50 bg-ink/30 px-4 py-2 text-[10px] uppercase tracking-eyebrow text-linen opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
      >
        View closer
      </button>
    </div>
  );
}
