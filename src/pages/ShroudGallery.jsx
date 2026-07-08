import { useArtworkViewer } from "../components/ArtworkViewer";
import { Reveal } from "../components/motion/Reveal";
import ScrollWords from "../components/motion/ScrollWords";
import { ik, ikSrcSet } from "../lib/imagekit";
import { shroudTitle, shroudText, shroudSections } from "../data/shroudPieces";
import { usePageMeta } from "../lib/usePageMeta";

/* eslint-disable-next-line react/prop-types */
function ShroudTile({ src, section, onOpen }) {
  return (
    <Reveal className="mb-5 break-inside-avoid">
      <button
        onClick={() => onOpen(src, section)}
        className="group block w-full overflow-hidden rounded-2xl bg-shade"
        aria-label={`View ${section} shroud detail`}
      >
        <img
          src={ik(src, { w: 800 })}
          srcSet={ikSrcSet(src, [500, 800, 1100])}
          sizes="(min-width: 768px) 32vw, 48vw"
          alt={`${section}, shroud work by Miuh Yang`}
          loading="lazy"
          decoding="async"
          className="w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
        />
      </button>
    </Reveal>
  );
}

function ShroudGallery() {
  usePageMeta(
    "Shroud Work | Miuh Yang",
    "Burial shroud textile work by Miuh Yang, made for her father. Mortality, departure, and love, held in cloth."
  );
  const viewer = useArtworkViewer();
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

      <div className="mx-auto max-w-[1300px] px-6 pb-28 pt-28 sm:px-10">
        {shroudSections.map((section, i) => (
          <section key={section.title} className="mb-24">
            <Reveal className="mb-12 border-b border-line pb-6">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-2xl text-madder">
                  {String(i + 1).padStart(2, "0")}
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
            <div className="columns-2 gap-6 md:columns-3">
              {section.images.map((src) => (
                <ShroudTile
                  key={src}
                  src={src}
                  section={section.title}
                  onOpen={open}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default ShroudGallery;
