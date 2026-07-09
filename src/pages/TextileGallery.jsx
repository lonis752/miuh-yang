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
          className="block aspect-square w-full"
          aria-label={`View ${piece.title}`}
        >
          <img
            src={ik(piece.src, { w: 800 })}
            srcSet={ikSrcSet(piece.src, [500, 800, 1100])}
            sizes="(min-width: 768px) 30vw, 45vw"
            alt={piece.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-contain p-4 drop-shadow-[0_14px_22px_rgba(23,19,16,0.22)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
          />
        </button>
        <figcaption className="mt-3 text-center font-display text-lg text-ink">
          {piece.title}
        </figcaption>
      </figure>
    </Reveal>
  );
}

// Split the pieces into as many groups as there are write-up paragraphs, so the text plays
// between the image rows (like the memorial page).
function buildFlow(pieces, texts) {
  const groups = texts.length;
  const per = Math.ceil(pieces.length / groups);
  return texts.map((text, i) => ({
    text,
    images: pieces.slice(i * per, (i + 1) * per),
  }));
}

function TextileGallery() {
  usePageMeta(
    "Floral & Textile | Miuh Yang",
    "Hand-sewn floral textile works by Miuh Yang, arranged in quilt-like grids. The ordinary made luminous."
  );
  const viewer = useArtworkViewer();
  const open = (piece) =>
    viewer?.open({ src: piece.src, title: piece.title, subtitle: "Floral & Textile" });

  const flow = buildFlow(textilePieces, textileText);

  return (
    <div className="overflow-hidden">
      <section className="mx-auto max-w-[1100px] px-6 pt-36 text-center sm:px-10 sm:pt-48">
        <p className="text-xs uppercase tracking-eyebrow text-madder">Floral &amp; Textile</p>
        <h1 className="mt-5 font-display text-5xl leading-[1.04] text-ink sm:text-6xl md:text-7xl">
          {textileTitle}
        </h1>
      </section>

      <div className="mx-auto max-w-[1200px] px-6 pb-28 sm:px-10">
        {flow.map((group, i) => (
          <div key={i}>
            <Reveal
              as="p"
              className={
                i === 0
                  ? "mx-auto max-w-2xl whitespace-pre-line py-16 text-center font-display text-2xl italic leading-[1.7] text-ink/80 sm:py-20"
                  : "mx-auto max-w-prose py-16 text-center text-[15px] leading-[1.9] text-muted sm:py-20"
              }
            >
              {group.text}
            </Reveal>
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3">
              {group.images.map((piece) => (
                <TextileTile key={piece.src} piece={piece} onOpen={open} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TextileGallery;
