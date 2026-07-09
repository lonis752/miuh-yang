/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Reveal } from "../motion/Reveal";
import ScrollWords from "../motion/ScrollWords";
import StitchedUnderline from "../motion/StitchedUnderline";
import ChapterImage from "./ChapterImage";
import Counter from "./Counter";
import { ik } from "../../lib/imagekit";

const EASE = [0.16, 1, 0.3, 1];

export function ChapterLink({ to, children }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-3 text-sm uppercase tracking-eyebrow text-ink"
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-ink/30 transition-transform duration-500 group-hover:scale-x-0" />
        <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-madder transition-transform duration-500 group-hover:scale-x-100" />
      </span>
      <span className="transition-transform duration-500 group-hover:translate-x-1">
        &rarr;
      </span>
    </Link>
  );
}

function Title({ chapter }) {
  if (chapter.count) {
    return (
      <>
        <Counter to={chapter.count} className="tabular-nums" />{" "}
        <span>{chapter.countLabel}</span>
      </>
    );
  }
  return chapter.title;
}

// Faded feature: a modestly-sized image beside the text whose edges dissolve into the linen
// on all sides. Kept small so low-resolution sources stay sharp.
const EDGE_FADE =
  "radial-gradient(ellipse 82% 84% at 50% 50%, #000 44%, rgba(0,0,0,0) 100%)";

function FeatureChapter({ chapter, num }) {
  return (
    <section className="w-full overflow-hidden">
      <div className="mx-auto grid min-h-[62vh] max-w-[1400px] items-center gap-10 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-xl">
          <Reveal>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-2xl text-madder">{num || chapter.num}</span>
              <span className="text-xs uppercase tracking-eyebrow text-muted">
                {chapter.kicker}
              </span>
            </div>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] text-ink sm:text-5xl md:text-6xl">
              {chapter.title}
            </h2>
            {chapter.scrollWords ? (
              <ScrollWords
                text={chapter.story}
                className="mt-6 max-w-md text-[15px] leading-[1.9]"
              />
            ) : (
              <p className="mt-6 max-w-md text-[15px] leading-[1.9] text-muted">{chapter.story}</p>
            )}
            <div className="mt-9">
              <ChapterLink to={chapter.to}>Enter the collection</ChapterLink>
            </div>
          </Reveal>
        </div>

        <motion.div
          className="justify-self-center lg:justify-self-end"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1.3, ease: EASE }}
        >
          <img
            src={ik(chapter.image, { w: 800 })}
            alt={chapter.title}
            loading="lazy"
            decoding="async"
            className="w-full max-w-[600px] object-contain"
            style={{ maskImage: EDGE_FADE, WebkitMaskImage: EDGE_FADE }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default function Chapter({ chapter, flip, num }) {
  if (chapter.layout === "feature") return <FeatureChapter chapter={chapter} num={num} />;
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className={flip ? "lg:order-2" : ""}>
          <ChapterImage
            src={chapter.image}
            title={chapter.title}
            subtitle={chapter.kicker}
            effect={chapter.effect}
            fit={chapter.fit}
            shadow={chapter.shadow}
            rotate={chapter.rotate}
            radiusClass={chapter.radiusClass}
            linkTo={chapter.to}
            className="aspect-[4/5] w-full"
          />
        </div>

        <div className={flip ? "lg:order-1" : ""}>
          <Reveal>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-2xl text-madder">
                {num || chapter.num}
              </span>
              <span className="text-xs uppercase tracking-eyebrow text-muted">
                {chapter.kicker}
              </span>
            </div>

            <h2 className="mt-5 font-display text-4xl leading-[1.05] text-ink sm:text-5xl md:text-6xl">
              <Title chapter={chapter} />
            </h2>
            {chapter.stitchUnderline && (
              <div className="mt-4 w-48 sm:w-64">
                <StitchedUnderline />
              </div>
            )}

            {chapter.scrollWords ? (
              <ScrollWords
                text={chapter.story}
                className="mt-6 max-w-prose text-[15px] leading-[1.9]"
              />
            ) : (
              <p className="mt-6 max-w-prose text-[15px] leading-[1.9] text-muted">
                {chapter.story}
              </p>
            )}

            <div className="mt-9">
              <ChapterLink to={chapter.to}>Enter the collection</ChapterLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
