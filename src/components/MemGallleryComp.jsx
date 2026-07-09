import GalleryPiece from "./GalleryPiece";
import { useArtworkViewer } from "./ArtworkViewer";
import { Reveal } from "./motion/Reveal";
import {
  koreanWarPieces,
  installationTitle,
  installationText,
} from "../data/koreanWarPieces";

function MemGalleryComp() {
  const viewer = useArtworkViewer();

  const open = (piece, side) =>
    viewer?.open({
      src: piece[side],
      title: piece.country,
      subtitle: `${side === "front" ? "Front" : "Back"} · ${piece.stitches} stitches`,
      rotate: 90,
    });

  return (
    <div className="mx-auto flex max-w-[1200px] flex-col gap-16 px-6 pb-24 pt-36 sm:px-10 sm:pt-44">
      <header>
        <p className="text-xs uppercase tracking-eyebrow text-madder">The Memorial</p>
        <h1 className="mt-5 font-display text-5xl leading-[1.04] text-ink sm:text-6xl">
          {installationTitle}
        </h1>
      </header>
      <Reveal as="p" className="max-w-prose border-l-2 border-line pl-6 text-[15px] leading-[1.9] text-muted">
        {installationText[0]}
      </Reveal>

      {koreanWarPieces.map((piece, i) => (
        <div key={piece.country} className="flex flex-col gap-16">
          <GalleryPiece piece={piece} index={i} onOpen={open} />
          {i === 0 && (
            <Reveal as="p" className="max-w-prose border-l-2 border-line pl-6 text-[15px] leading-[1.9] text-muted">
              {installationText[1]}
            </Reveal>
          )}
        </div>
      ))}
    </div>
  );
}

export default MemGalleryComp;
