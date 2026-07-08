import { useArtworkViewer } from "../components/ArtworkViewer";
import { Reveal } from "../components/motion/Reveal";
import { ik, ikSrcSet } from "../lib/imagekit";
import { textileTitle, textileText, textilePieces } from "../data/textilePieces";
import { usePageMeta } from "../lib/usePageMeta";

/* eslint-disable-next-line react/prop-types */
function TextileTile({ piece, onOpen }) {
  return (
    <Reveal>
      <figure className="group">
        <button
          onClick={() => onOpen(piece)}
          className="block aspect-square w-full overflow-hidden rounded-2xl border border-line bg-paper"
          aria-label={`View ${piece.title}`}
        >
          <img
            src={ik(piece.src, { w: 700 })}
            srcSet={ikSrcSet(piece.src, [400, 700, 1000])}
            sizes="(min-width: 1024px) 24vw, 45vw"
            alt={piece.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-contain p-4 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
          />
        </button>
        <figcaption className="mt-3 text-center font-display text-lg text-ink">
          {piece.title}
        </figcaption>
      </figure>
    </Reveal>
  );
}

function TextileGallery() {
  usePageMeta(
    "Floral & Textile | Miuh Yang",
    "Hand-sewn floral textile works by Miuh Yang, arranged in quilt-like grids. The ordinary made luminous."
  );
  const viewer = useArtworkViewer();
  const open = (piece) =>
    viewer?.open({ src: piece.src, title: piece.title, subtitle: "Floral & Textile" });

  return (
    <div className="overflow-hidden">
      <section className="mx-auto max-w-[1100px] px-6 pt-36 text-center sm:px-10 sm:pt-48">
        <p className="text-xs uppercase tracking-eyebrow text-madder">
          Floral &amp; Textile
        </p>
        <h1 className="mt-5 font-display text-5xl leading-[1.04] text-ink sm:text-6xl md:text-7xl">
          {textileTitle}
        </h1>

        <Reveal
          as="p"
          className="mx-auto mt-12 max-w-xl whitespace-pre-line font-display text-xl italic leading-[1.7] text-ink/80"
        >
          {textileText[0]}
        </Reveal>

        <div className="mx-auto mt-10 max-w-prose space-y-6 text-left">
          {textileText.slice(1).map((p, i) => (
            <Reveal key={i} as="p" className="text-[15px] leading-[1.9] text-muted">
              {p}
            </Reveal>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-[1300px] px-6 pb-28 pt-16 sm:px-10">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
          {textilePieces.map((piece) => (
            <TextileTile key={piece.src} piece={piece} onOpen={open} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TextileGallery;
