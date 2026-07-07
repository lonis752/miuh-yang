/* eslint-disable react/prop-types */
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ik, ikSrcSet } from "../../lib/imagekit";
import { useArtworkViewer } from "../ArtworkViewer";

// A framed artwork image with subtle scroll parallax. Clicking opens the zoom viewer.
export default function ChapterImage({ src, title, subtitle, className = "" }) {
  const ref = useRef(null);
  const viewer = useArtworkViewer();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

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
        onClick={() => viewer?.open({ src, title, subtitle })}
        className="h-full w-full cursor-zoom-in object-cover transition-[filter] duration-700"
      />
      <button
        onClick={() => viewer?.open({ src, title, subtitle })}
        className="absolute bottom-4 right-4 translate-y-2 rounded-full border border-linen/50 bg-ink/30 px-4 py-2 text-[10px] uppercase tracking-eyebrow text-linen opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
      >
        View closer
      </button>
    </div>
  );
}
