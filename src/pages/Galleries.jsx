import { motion } from "framer-motion";
import Chapter from "../components/home/Chapter";
import { homeChapters } from "../data/homeChapters";

const EASE = [0.16, 1, 0.3, 1];

function Galleries() {
  return (
    <div className="overflow-hidden">
      <section className="mx-auto max-w-[1400px] px-6 pb-6 pt-36 sm:px-10 sm:pt-48">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="text-xs uppercase tracking-eyebrow text-madder"
        >
          The Work
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.08, ease: EASE }}
          className="mt-6 max-w-4xl font-display text-5xl font-light leading-[1.03] text-ink sm:text-6xl md:text-7xl"
        >
          Three bodies of work, one thread.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.24, ease: EASE }}
          className="mt-8 max-w-prose text-[15px] leading-[1.9] text-muted"
        >
          A memorial for the fallen of the Korean War, a shroud made for her father,
          and the quiet grammar of flowers. Each collection carries its own story,
          sewn one stitch at a time.
        </motion.p>
      </section>

      <div className="mt-8 border-t border-line">
        {homeChapters.map((chapter, i) => (
          <div key={chapter.to} className={i > 0 ? "border-t border-line" : ""}>
            <Chapter
              chapter={chapter}
              flip={i % 2 === 1}
              num={String(i + 1).padStart(2, "0")}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galleries;
