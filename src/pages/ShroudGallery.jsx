import { useArtworkViewer } from "../components/ArtworkViewer";
import { Reveal } from "../components/motion/Reveal";
import { ik, ikSrcSet } from "../lib/imagekit";
import { shroudTitle, shroudText, shroudSections } from "../data/shroudPieces";

/* eslint-disable-next-line react/prop-types */
function ShroudTile({ src, section, onOpen }) {
  return (
    <Reveal className="mb-5 break-inside-avoid">
      <button
        onClick={() => onOpen(src, section)}
        className="group block w-full overflow-hidden rounded-[3px] bg-shade"
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

        <div className="mt-14 max-w-prose space-y-8">
          {shroudText.map((p, i) => (
            <Reveal
              key={i}
              as="p"
              className="border-l-2 border-line pl-6 font-display text-lg italic leading-[1.9] text-ink/80"
            >
              {p}
            </Reveal>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-[1300px] px-6 pb-28 pt-24 sm:px-10">
        {shroudSections.map((section) => (
          <section key={section.title} className="mb-20">
            <Reveal className="mb-10 flex items-baseline gap-4">
              <span className="h-px w-10 bg-madder" />
              <h2 className="font-display text-2xl text-ink sm:text-3xl">
                {section.title}
              </h2>
            </Reveal>
            <div className="columns-2 gap-5 md:columns-3">
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
