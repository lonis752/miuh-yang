import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Reveal, RevealGroup, RevealItem } from "../components/motion/Reveal";
import ChapterImage from "../components/home/ChapterImage";
import Counter from "../components/home/Counter";
import { homeChapters, homeImages } from "../data/homeChapters";
import { ik } from "../lib/imagekit";

function ChapterLink({ to, children }) {
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
      <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
    </Link>
  );
}

/* eslint-disable-next-line react/prop-types */
function Chapter({ chapter, flip }) {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className={flip ? "lg:order-2" : ""}>
          <ChapterImage
            src={chapter.image}
            title={chapter.title}
            subtitle={chapter.kicker}
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
              {chapter.title}
            </h2>

            {chapter.count && (
              <p className="mt-6 font-display text-3xl text-ink/85 sm:text-4xl">
                <Counter to={chapter.count} className="tabular-nums" />
                <span className="ml-2 text-base uppercase tracking-eyebrow text-muted">
                  stitches
                </span>
              </p>
            )}

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

function Homepage() {
  return (
    <div className="overflow-hidden">
      {/* ── HERO ─────────────────────────────── */}
      <section className="relative">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(120% 90% at 15% 0%, rgba(138,59,46,0.06) 0%, rgba(138,59,46,0) 45%)",
          }}
        />
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 pb-16 pt-36 sm:px-10 sm:pt-44 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:pb-24 lg:pt-52">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs uppercase tracking-eyebrow text-madder"
            >
              Korean-Canadian Textile Artist
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 font-display text-5xl font-light leading-[1.02] text-ink sm:text-6xl md:text-7xl lg:text-[5.2rem]"
            >
              Woven from memory,
              <br />
              loss, and the quiet
              <br />
              <span className="italic text-madder">poetics</span> of the everyday.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-prose text-[15px] leading-[1.9] text-muted"
            >
              The textile work of Miuh Yang — from a memorial sewn one stitch at a
              time for the fallen of the Korean War, to a shroud for her father, to
              the small, luminous grammar of flowers.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] overflow-hidden rounded-[3px] bg-shade lg:aspect-[3/4]"
          >
            <img
              src={ik(homeImages.hero, { w: 1200 })}
              alt="A textile work by Miuh Yang"
              className="h-full w-full animate-kenburns object-cover"
            />
          </motion.div>
        </div>

        <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
          <div className="flex items-center gap-4 border-t border-line py-6 text-xs uppercase tracking-eyebrow text-muted">
            <span>Scroll to enter</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              ↓
            </motion.span>
          </div>
        </div>
      </section>

      {/* ── 01 · THE ARTIST ──────────────────── */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <RevealGroup className="flex flex-col justify-center">
            <RevealItem>
              <div className="flex items-baseline gap-4">
                <span className="font-display text-2xl text-madder">01</span>
                <span className="text-xs uppercase tracking-eyebrow text-muted">
                  The Artist
                </span>
              </div>
            </RevealItem>
            <RevealItem as="h2">
              <span className="mt-5 block font-display text-4xl leading-[1.05] text-ink sm:text-5xl">
                From feeling to form.
              </span>
            </RevealItem>
            <RevealItem as="p">
              <span className="mt-6 block max-w-prose text-[15px] leading-[1.9] text-muted">
                Miuh Yang is a Korean-Canadian artist whose work explores memory,
                connection, and the human condition. Drawing from the everyday, she
                makes art that bridges the personal and the universal — beauty,
                fragility, and the passage of time — through the slow, meditative act
                of stitching.
              </span>
            </RevealItem>
            <RevealItem>
              <div className="mt-9">
                <ChapterLink to="/about">Read her story</ChapterLink>
              </div>
            </RevealItem>
          </RevealGroup>

          <div className="grid grid-cols-2 gap-5">
            <ChapterImage
              src={homeImages.artist}
              title="Miuh Yang"
              subtitle="The Artist"
              className="mt-10 aspect-[3/4]"
            />
            <ChapterImage
              src={homeImages.artistDetail}
              title="Detail of a textile work"
              subtitle="In the studio"
              className="aspect-[3/4]"
            />
          </div>
        </div>
      </section>

      {/* ── 02–04 · THE WORK ─────────────────── */}
      <div className="border-t border-line">
        {homeChapters.map((chapter, i) => (
          <div key={chapter.to} className={i > 0 ? "border-t border-line" : ""}>
            <Chapter chapter={chapter} flip={i % 2 === 1} />
          </div>
        ))}
      </div>

      {/* ── 05 · CONTACT ─────────────────────── */}
      <section className="border-t border-line bg-shade">
        <div className="mx-auto max-w-[1400px] px-6 py-28 text-center sm:px-10 sm:py-36">
          <Reveal>
            <div className="flex items-center justify-center gap-4">
              <span className="font-display text-2xl text-madder">05</span>
              <span className="text-xs uppercase tracking-eyebrow text-muted">
                Contact
              </span>
            </div>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-[1.08] text-ink sm:text-5xl md:text-6xl">
              Every thread carries a story worth keeping.
            </h2>
            <div className="mt-10 flex justify-center">
              <ChapterLink to="/contact">Get in touch</ChapterLink>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
