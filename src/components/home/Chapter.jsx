/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Reveal } from "../motion/Reveal";
import ChapterImage from "./ChapterImage";
import Counter from "./Counter";

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

export default function Chapter({ chapter, flip }) {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className={flip ? "lg:order-2" : ""}>
          <ChapterImage
            src={chapter.image}
            title={chapter.title}
            subtitle={chapter.kicker}
            effect={chapter.effect}
            className="aspect-[4/5] w-full"
          />
        </div>

        <div className={flip ? "lg:order-1" : ""}>
          <Reveal>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-2xl text-madder">{chapter.num}</span>
              <span className="text-xs uppercase tracking-eyebrow text-muted">
                {chapter.kicker}
              </span>
            </div>

            <h2 className="mt-5 font-display text-4xl leading-[1.05] text-ink sm:text-5xl md:text-6xl">
              {chapter.count ? (
                <>
                  <Counter to={chapter.count} className="tabular-nums" />{" "}
                  <span>{chapter.countLabel}</span>
                </>
              ) : (
                chapter.title
              )}
            </h2>

            <p className="mt-6 max-w-prose text-[15px] leading-[1.9] text-muted">
              {chapter.story}
            </p>
            <div className="mt-9">
              <ChapterLink to={chapter.to}>Enter the collection</ChapterLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
