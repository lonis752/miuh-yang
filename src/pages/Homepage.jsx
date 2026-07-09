import { motion } from "framer-motion";
import { Reveal, RevealGroup, RevealItem } from "../components/motion/Reveal";
import Chapter, { ChapterLink } from "../components/home/Chapter";
import ChapterImage from "../components/home/ChapterImage";
import { homeChapters, homeImages } from "../data/homeChapters";
import { ik } from "../lib/imagekit";
import { usePageMeta } from "../lib/usePageMeta";

const EASE = [0.16, 1, 0.3, 1];

function Homepage() {
  usePageMeta(
    "Miuh Yang, Textile Artist",
    "The textile work of Korean-Canadian artist Miuh Yang. Memory, loss, and the quiet poetics of everyday life."
  );
  return (
    <div className="overflow-hidden">
      {/* HERO: a memorial garment turned on its side, feathered into the linen behind the text */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        <motion.img
          src={ik(homeImages.hero, { w: 1600 })}
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: EASE }}
          className="pointer-events-none absolute right-[-14%] top-[18%] w-[74%] max-w-[820px] -translate-y-1/2 rotate-90 object-contain [mask-image:radial-gradient(58%_58%_at_50%_50%,#000_50%,transparent_100%)] lg:right-[-4%]"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pt-28 sm:px-10">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE }}
              className="text-xs uppercase tracking-eyebrow text-madder"
            >
              Korean-Canadian Textile Artist
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.08, ease: EASE }}
              className="mt-6 font-display text-5xl font-light leading-[1.02] text-ink sm:text-6xl md:text-7xl lg:text-[5.4rem]"
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
              transition={{ duration: 1, delay: 0.24, ease: EASE }}
              className="mt-8 max-w-prose text-[15px] leading-[1.9] text-muted"
            >
              The textile work of Miuh Yang. From a memorial sewn one stitch at a time
              for the fallen of the Korean War, to a shroud for her father, to the
              small, luminous grammar of flowers.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.36, ease: EASE }}
              className="mt-10"
            >
              <ChapterLink to="/galleries">Enter the galleries</ChapterLink>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 01 · THE ARTIST */}
      <section className="mx-auto max-w-[1400px] border-t border-line px-6 py-24 sm:px-10 sm:py-32">
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
                makes art that bridges the personal and the universal. Beauty,
                fragility, and the passage of time, all explored through the slow,
                meditative act of stitching.
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

      {/* 02-04 · THE WORK */}
      <div className="border-t border-line">
        {homeChapters.map((chapter, i) => (
          <div key={chapter.to} className={i > 0 ? "border-t border-line" : ""}>
            <Chapter chapter={chapter} flip={i % 2 === 1} />
          </div>
        ))}
      </div>

      {/* 05 · CONTACT */}
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
