/* eslint-disable react/prop-types */
import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ik, ikSrcSet } from "../../lib/imagekit";
import { useArtworkViewer } from "../ArtworkViewer";

const EASE = [0.16, 1, 0.3, 1];

// A veil of linen that lifts to reveal the work (for the shroud: a passage, an unveiling).
function VeilEffect() {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-10 origin-top bg-linen"
      initial={{ scaleY: 1 }}
      whileInView={{ scaleY: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 1.5, ease: EASE }}
    />
  );
}

// A framed artwork image with subtle scroll parallax.
// - linkTo: navigate into a gallery instead of opening the zoom viewer
// - fit "contain" + shadow: show the full piece at its true proportions, as if hung on a wall
export default function ChapterImage({
  src,
  title,
  subtitle,
  effect,
  linkTo,
  fit = "cover",
  shadow = false,
  hoverLabel,
  radiusClass = "rounded-2xl",
  className = "",
}) {
  const ref = useRef(null);
  const viewer = useArtworkViewer();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const contain = fit === "contain";
  const y = useTransform(scrollYProgress, [0, 1], contain ? ["-4%", "4%"] : ["-7%", "7%"]);

  const img = (
    <motion.img
      style={{ y, scale: contain ? 1 : 1.16 }}
      src={ik(src, { w: 1300 })}
      srcSet={ikSrcSet(src, [600, 1000, 1400])}
      sizes="(min-width: 1024px) 50vw, 92vw"
      alt={title}
      loading="lazy"
      decoding="async"
      className={
        contain
          ? "h-full w-full object-contain drop-shadow-[0_22px_34px_rgba(23,19,16,0.30)]"
          : "h-full w-full object-cover"
      }
    />
  );

  const frameBase = `group relative ${radiusClass} ${
    contain ? "" : "overflow-hidden bg-shade"
  } ${className}`;

  // Gallery teaser: the whole frame links into the collection.
  if (linkTo) {
    return (
      <Link ref={ref} to={linkTo} className={`block ${frameBase}`}>
        {img}
        {effect === "veil" && <VeilEffect />}
        <span className="absolute bottom-4 right-4 z-20 translate-y-2 rounded-full border border-linen/50 bg-ink/30 px-4 py-2 text-[10px] uppercase tracking-eyebrow text-linen opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          {hoverLabel || "Enter the collection"}
        </span>
      </Link>
    );
  }

  // Standalone artwork: open the zoom viewer.
  const openViewer = () => viewer?.open({ src, title, subtitle });
  return (
    <div ref={ref} className={frameBase}>
      <button onClick={openViewer} className="block h-full w-full cursor-zoom-in" aria-label={`View ${title}`}>
        {img}
      </button>
      {effect === "veil" && <VeilEffect />}
      <button
        onClick={openViewer}
        className="absolute bottom-4 right-4 z-20 translate-y-2 rounded-full border border-linen/50 bg-ink/30 px-4 py-2 text-[10px] uppercase tracking-eyebrow text-linen opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
      >
        {hoverLabel || "View closer"}
      </button>
    </div>
  );
}
