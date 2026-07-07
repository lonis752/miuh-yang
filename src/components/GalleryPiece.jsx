/* eslint-disable react/prop-types */
import { ik, ikSrcSet } from "../lib/imagekit";

// One memorial garment: an info panel (country + stitch count + size + media) beside the
// front/back photographs. Layout alternates side-to-side by index for an editorial rhythm.
// Clicking an image opens the shared detail modal via onOpen(piece, side).

function PieceImage({ piece, side, onOpen }) {
  const src = piece[side];
  const label = `${piece.country} memorial garment, ${side}`;
  return (
    <img
      onClick={() => onOpen(piece, side)}
      loading="lazy"
      decoding="async"
      alt={label}
      title={`${piece.country} (${side})`}
      className="png zoom object-contain rounded-sm w-1/2 cursor-pointer"
      src={ik(src, { w: 800 })}
      srcSet={ikSrcSet(src)}
      sizes="(min-width: 640px) 40vw, 45vw"
    />
  );
}

function InfoPanel({ piece }) {
  return (
    <div className="flex flex-col justify-end min-w-36">
      <p>
        <strong>{piece.country}</strong>
      </p>
      <p>
        <strong>Stitches:</strong> {piece.stitches}
      </p>
      <p>
        <strong>Size:</strong> {piece.size}
      </p>
      <p>
        <strong>Media:</strong> {piece.media}
      </p>
    </div>
  );
}

export default function GalleryPiece({ piece, index, onOpen }) {
  const infoFirst = index % 2 === 0;
  const images = (
    <div className="flex gap-8 sm:gap-16 p-5 sm:pr-16">
      <PieceImage piece={piece} side="front" onOpen={onOpen} />
      <PieceImage piece={piece} side="back" onOpen={onOpen} />
    </div>
  );
  const info = <InfoPanel piece={piece} />;

  return (
    <div
      className={`flex flex-col-reverse sm:flex-row sm:pt-16 gap-5 sm:gap-10 justify-center ${
        index > 0 ? "border-t" : ""
      }`}
    >
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
  );
}
