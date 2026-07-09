import { useState } from "react";
import { useArtworkViewer } from "../components/ArtworkViewer";
import { Reveal } from "../components/motion/Reveal";
import ScrollWords from "../components/motion/ScrollWords";
import { ik, ikSrcSet } from "../lib/imagekit";
import { shroudTitle, shroudText, shroudSections } from "../data/shroudPieces";
import { usePageMeta } from "../lib/usePageMeta";

const COLS = 3;
const LETTERS = ["A", "B", "C", "D"];

// Distribute a section's images into COLS columns, filled top-to-bottom per column
// (column A first, then B, then C), so labels read A1..An down each column.
function toColumns(images) {
  const per = Math.ceil(images.length / COLS);
  return Array.from({ length: COLS }, (_, c) => images.slice(c * per, (c + 1) * per));
}

/* eslint-disable-next-line react/prop-types */
function ShroudTile({ src, section, badge, onOpen }) {
  return (
    <Reveal>
      <button
        onClick={() => onOpen(src, section)}
        className="group relative block w-full overflow-hidden rounded-2xl bg-shade"
        aria-label={`View ${section} shroud detail${badge ? `, ${badge}` : ""}`}
      >
        <img
          src={ik(src, { w: 800 })}
          srcSet={ikSrcSet(src, [500, 800, 1100])}
          sizes="(min-width: 768px) 32vw, 90vw"
          alt={`${section}, shroud work by Miuh Yang`}
          loading="lazy"
          decoding="async"
          className="w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
        />
        {badge && (
          <span className="absolute left-2 top-2 rounded-md bg-madder px-2 py-1 font-display text-sm leading-none text-linen shadow-md">
            {badge}
          </span>
        )}
      </button>
    </Reveal>
  );
}

/* eslint-disable-next-line react/prop-types */
function SectionVideo({ video, videoLong, videoShort }) {
  const [mode, setMode] = useState("long");
  const src = video || (mode === "long" ? videoLong : videoShort);
  if (!src) return null;
  const hasToggle = Boolean(videoLong || videoShort);
  return (
    <div className="mx-auto mb-14 max-w-[1000px]">
      {hasToggle && (
        <div className="mb-4 flex items-center gap-2">
          <span className="mr-2 text-xs uppercase tracking-eyebrow text-muted">
            Version
          </span>
          {["long", "short"].map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`rounded-full px-4 py-1.5 text-[10px] uppercase tracking-eyebrow transition-colors ${
                mode === m
                  ? "bg-madder text-linen"
                  : "border border-line text-muted hover:border-madder hover:text-madder"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      )}
      <video
        key={src}
        src={src}
        controls
        playsInline
        preload="metadata"
        className="w-full rounded-2xl bg-shade shadow-md"
      />
    </div>
  );
}

function ShroudGallery() {
  usePageMeta(
    "Shroud Work | Miuh Yang",
    "Burial shroud textile work by Miuh Yang, made for her father. Mortality, departure, and love, held in cloth."
  );
  const viewer = useArtworkViewer();
  const [showLabels, setShowLabels] = useState(true);
  const open = (src, section) =>
    viewer?.open({ src, title: section, subtitle: "Shroud Work" });

  return (
    <div className="overflow-hidden">
      <section className="mx-auto max-w-[1100px] px-6 pt-36 sm:px-10 sm:pt-48">
        <p className="text-xs uppercase tracking-eyebrow text-madder">The Shroud</p>
        <h1 className="mt-5 font-display text-5xl leading-[1.04] text-ink sm:text-6xl md:text-7xl">
          {shroudTitle}
        </h1>

        <div className="mt-16 max-w-2xl space-y-10">
          {shroudText.map((p, i) => (
            <ScrollWords
              key={i}
              text={p}
              className="font-display text-xl italic leading-[1.85] sm:text-2xl"
            />
          ))}
        </div>
      </section>

      {/* Sorting aid: toggle photo reference labels */}
      <div className="mx-auto mt-16 max-w-[1300px] px-6 sm:px-10">
        <button
          onClick={() => setShowLabels((v) => !v)}
          className="rounded-full border border-line px-4 py-2 text-[10px] uppercase tracking-eyebrow text-muted transition-colors hover:border-madder hover:text-madder"
        >
          {showLabels ? "Hide sorting labels" : "Show sorting labels"}
        </button>
      </div>

      <div className="mx-auto max-w-[1300px] px-6 pb-28 pt-6 sm:px-10">
        {shroudSections.map((section, si) => {
          const columns = toColumns(section.images);
          return (
            <section key={section.title} className="mb-24">
              <Reveal className="mb-12 border-b border-line pb-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-2xl text-madder">
                    {String(si + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-eyebrow text-muted">
                      A shroud for
                    </p>
                    <h2 className="mt-1 font-display text-3xl text-ink sm:text-4xl">
                      {section.title}
                    </h2>
                  </div>
                </div>
              </Reveal>

              <SectionVideo
                video={section.video}
                videoLong={section.videoLong}
                videoShort={section.videoShort}
              />

              <div className="flex gap-5 sm:gap-6">
                {columns.map((col, ci) => (
                  <div key={ci} className="flex flex-1 flex-col gap-5 sm:gap-6">
                    {showLabels && (
                      <p className="text-center text-xs uppercase tracking-eyebrow text-madder">
                        Column {LETTERS[ci]}
                      </p>
                    )}
                    {col.map((src, ri) => (
                      <ShroudTile
                        key={src}
                        src={src}
                        section={section.title}
                        badge={showLabels ? `${LETTERS[ci]}${ri + 1}` : null}
                        onOpen={open}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default ShroudGallery;
