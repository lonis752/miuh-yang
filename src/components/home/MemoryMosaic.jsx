/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { koreanWarPieces } from "../../data/koreanWarPieces";
import { ik } from "../../lib/imagekit";

// Every memorial garment (front + back) is a source; each tile shows a tightly cropped,
// zoomed-in section of one, so you see texture and stitch detail rather than the whole piece.
const SOURCES = koreanWarPieces.flatMap((p) => [p.front, p.back]);

// A varied span pattern gives the mosaic its masonry feel; grid-flow-dense packs it edge-to-edge.
const SPAN_PATTERN = [
  "",
  "",
  "col-span-2",
  "",
  "row-span-2",
  "",
  "col-span-2 row-span-2",
  "",
  "",
  "row-span-2",
  "col-span-2",
  "",
  "",
  "col-span-2",
  "",
  "row-span-2",
];
const TILE_COUNT = 48;

let uid = 0;
const randInt = (n) => Math.floor(Math.random() * n);

function makeCrop(srcIndex) {
  return {
    // Crop deep into the centre of each piece (33-67%) at high zoom so we land on fabric
    // and stitch detail, never the white photo background at the edges. Higher-res source
    // keeps the deep crops sharp.
    key: ++uid,
    src: ik(SOURCES[srcIndex], { w: 720, q: 68 }),
    srcIndex,
    x: 38 + randInt(24),
    y: 38 + randInt(24),
    zoom: 400 + randInt(170),
  };
}

export default function MemoryMosaic({ className = "" }) {
  const [tiles, setTiles] = useState(() =>
    Array.from({ length: TILE_COUNT }, (_, i) => makeCrop(i % SOURCES.length))
  );
  const recent = useRef([]); // recently shown source indexes (for distribution)
  const lastChanged = useRef(Array(TILE_COUNT).fill(0));

  useEffect(() => {
    let stopped = false;
    let timer;

    const pickSource = () => {
      let idx;
      let attempts = 0;
      do {
        idx = randInt(SOURCES.length);
        attempts += 1;
      } while (recent.current.includes(idx) && attempts < 10);
      recent.current.push(idx);
      if (recent.current.length > 14) recent.current.shift();
      return idx;
    };

    const swapOne = () => {
      const now = Date.now();
      const cool = [];
      for (let i = 0; i < TILE_COUNT; i += 1) {
        if (now - lastChanged.current[i] > 6000) cool.push(i);
      }
      const pool = cool.length ? cool : Array.from({ length: TILE_COUNT }, (_, i) => i);
      const ti = pool[randInt(pool.length)];
      const crop = makeCrop(pickSource());
      const img = new Image();
      img.src = crop.src; // preload before showing so there is no flash
      const apply = () => {
        if (stopped) return;
        lastChanged.current[ti] = Date.now();
        setTiles((prev) => {
          const next = prev.slice();
          next[ti] = crop;
          return next;
        });
      };
      if (img.complete) apply();
      else img.onload = apply;
    };

    const tick = () => {
      if (stopped) return;
      swapOne();
      if (Math.random() < 0.1) swapOne(); // occasionally two at once
      timer = setTimeout(tick, 1600 + Math.random() * 2600);
    };

    timer = setTimeout(tick, 1600);
    return () => {
      stopped = true;
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`grid h-full w-full grid-flow-dense grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 ${className}`}
      style={{ gridAutoRows: "13vh" }}
      aria-hidden="true"
    >
      {tiles.map((crop, i) => (
        <div
          key={i}
          className={`relative overflow-hidden bg-ink/5 ${
            SPAN_PATTERN[i % SPAN_PATTERN.length]
          }`}
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={crop.key}
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${crop.src})`,
                backgroundSize: `${crop.zoom}%`,
                backgroundPosition: `${crop.x}% ${crop.y}%`,
              }}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.4, ease: [0.4, 0, 0.2, 1] }}
            />
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
