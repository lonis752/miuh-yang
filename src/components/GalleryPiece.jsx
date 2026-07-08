/* eslint-disable react/prop-types */
import { ik, ikSrcSet } from "../lib/imagekit";
import { Reveal } from "./motion/Reveal";

// One memorial garment: an info panel (country + stitch count + size + media) beside the
// front/back photographs. Layout alternates side-to-side by index for an editorial rhythm.
// Clicking an image opens the shared zoom viewer via onOpen(piece, side).

function PieceImage({ piece, side, onOpen }) {
  const src = piece[side];
  const label = `${piece.country} memorial garment, ${side}`;
  return (
    <button
      onClick={() => onOpen(piece, side)}
      className="group/img relative flex-1 overflow-hidden rounded-[3px] bg-shade"
      aria-label={`View ${label}`}
    >
      <img
        loading="lazy"
        decoding="async"
        alt={label}
        className="h-full w-full object-contain transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-[1.03]"
        src={ik(src, { w: 800 })}
        srcSet={ikSrcSet(src)}
        sizes="(min-width: 640px) 40vw, 45vw"
      />
    </button>
  );
}

function InfoPanel({ piece }) {
  return (
    <div className="flex min-w-[10rem] flex-col justify-center gap-1">
      <p className="font-display text-2xl text-ink">{piece.country}</p>
      <p className="mt-2 text-xs uppercase tracking-eyebrow text-muted">Stitches</p>
      <p className="text-lg text-ink/90">{piece.stitches}</p>
      <p className="mt-2 text-xs uppercase tracking-eyebrow text-muted">Dimensions</p>
      <p className="text-sm text-ink/80">{piece.size}</p>
      <p className="mt-2 text-xs uppercase tracking-eyebrow text-muted">Media</p>
      <p className="text-sm text-ink/80">{piece.media}</p>
    </div>
  );
}

export default function GalleryPiece({ piece, index, onOpen }) {
  const infoFirst = index % 2 === 0;
  const images = (
    <div className="flex flex-[2] gap-6 sm:gap-10">
      <PieceImage piece={piece} side="front" onOpen={onOpen} />
      <PieceImage piece={piece} side="back" onOpen={onOpen} />
    </div>
  );
  const info = <InfoPanel piece={piece} />;

  return (
    <Reveal className={index > 0 ? "border-t border-line pt-16" : ""}>
      <div className="flex flex-col gap-8 sm:flex-row sm:items-stretch sm:gap-12">
        {infoFirst ? (
          <>
            {info}
            {images}
          </>
        ) : (
          <>
            {images}
            {info}
          </>
        )}
      </div>
    </Reveal>
  );
}
