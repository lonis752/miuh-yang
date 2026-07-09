import { motion } from "framer-motion";
import { Reveal } from "../components/motion/Reveal";
import ChapterImage from "../components/home/ChapterImage";
import { ChapterLink } from "../components/home/Chapter";
import { ik } from "../lib/imagekit";
import { usePageMeta } from "../lib/usePageMeta";

const IK = "https://ik.imagekit.io/lonisk96/Miuh%20Yang";
const EASE = [0.16, 1, 0.3, 1];

const statement = [
  "Miuh Yang is an artist whose work delves into themes of memory, connection, and the human condition. Drawing inspiration from the everyday, Miuh creates art that bridges the personal and the universal, exploring concepts such as beauty, fragility, and the passage of time. Her practice centers on the meditative process of crafting, celebrating the poetics of life and the intricate relationships that bind us together.",
  "Flowers often serve as a recurring motif in her early work, representing the paradox of being both ordinary and extraordinary. Through small, fragmented, and hand-sewn floral compositions arranged in quilt-like grids, Miuh Yang crafts surfaces that try to capture harmony and balance. For the artist, the act of stitching is not just a creative expression but a way of appreciating the subtleties of daily life.",
  "In her installation “3,227,082 Stitches,” Miuh Yang reflects on collective memory and gratitude, honouring the sacrifices of the 3,227,082 military personnel from 23 nations who aided South Korea during the Korean War. By incorporating traditional fabrics and garments from each country, the work weaves personal and cultural narratives into a profound homage to peace and resilience.",
  "Another aspect of her practice is her exploration of mortality and the rituals of departure, culminating in a reflective piece on creating a burial shroud for her father. This deeply personal work transforms grief into an expression of love and transcendence, framing death as a passage to eternal connection.",
  "Whether through floral studies, burial garments, or meditations on mortality, Miuh Yang’s work invites viewers to contemplate the interconnected threads of life, history, and human experience. Her art stands as a testament to healing, gratitude, and the enduring wish for peace and understanding in a fragile yet beautiful world.",
];

const bio =
  "Miuh Yang is a Korean-Canadian artist living and working in Vancouver, Canada. She graduated from Hong Ik University in Korea (BFA in Fabric Arts) in 1992. Since immigrating to Canada in 2005, she has been producing paintings and quilts that reflect both Eastern and Western cultural influences and philosophy. Her first solo show was held at Gana Art Centre, Korea in 2004.";

const exhibitions = [
  ["2019", "The 3rd Exhibition at Duru Artspace in Korea"],
  ["2018-2019", "Park Art Salon participant"],
  ["2015-2016", "Moduart Selective Joined Art Fair Vancouver"],
  ["2015", "Four Artist Art Exhibition at Potter Gallery"],
  ["2012", "3rd Solo Exhibition at Joe’s Galley in Vancouver"],
  ["2007", "2nd Solo Exhibition at Covan Art in Vancouver"],
  ["2006", "Duet Art Exhibition at Art Beatus Gallery"],
  ["2005-2015", "Annual Group Exhibition of the Korean Art Association"],
  ["2005", "Winter Group Exhibition at Art Beatus Gallery"],
  ["2005", "Solo Exhibition at Covan Art Gallery"],
  ["2004", "1st Solo Exhibition at Gana Art Centre"],
  ["1993-2000", "My Decorating Space, Designer / Owner"],
  ["1993", "FIDM, Diploma in Fashion Design"],
  ["1992", "Hong Ik University, Bachelor’s degree in Fabric Arts"],
];

function About() {
  usePageMeta(
    "About | Miuh Yang",
    "About Miuh Yang, a Korean-Canadian textile artist working in Vancouver, Canada."
  );
  return (
    <div className="overflow-hidden">
      {/* header + portrait */}
      <section className="mx-auto grid max-w-[1400px] gap-12 px-6 pb-16 pt-36 sm:px-10 sm:pt-48 lg:grid-cols-[1fr_0.8fr] lg:items-end">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="text-xs uppercase tracking-eyebrow text-madder"
          >
            The Artist
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.08, ease: EASE }}
            className="mt-6 font-display text-5xl font-light leading-[1.02] text-ink sm:text-6xl md:text-7xl"
          >
            Miuh Yang
          </motion.h1>
          <p className="mt-6 max-w-prose text-[15px] leading-[1.9] text-muted">{bio}</p>
        </div>
        <div className="lg:justify-self-end">
          <ChapterImage
            src={`${IK}/artist.jpg?updatedAt=1737663368820`}
            title="Miuh Yang"
            subtitle="Portrait"
            radiusClass="rounded-t-[8rem] rounded-b-2xl"
            className="aspect-[3/4] w-full max-w-sm"
          />
        </div>
      </section>

      {/* statement */}
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <h2 className="font-display text-3xl leading-[1.1] text-ink sm:text-4xl">
              Artist Statement
            </h2>
          </Reveal>
          <div className="space-y-6">
            {statement.map((p, i) => (
              <Reveal key={i} as="p" className="text-[15px] leading-[1.9] text-muted">
                {p}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* two artworks */}
      <section className="mx-auto max-w-[1400px] px-6 pb-24 sm:px-10">
        <div className="mx-auto grid max-w-[820px] gap-6 sm:grid-cols-2">
          <ChapterImage
            src={`${IK}/about1.jpg`}
            title="Shroud work"
            subtitle="From the studio"
            className="aspect-[4/3]"
          />
          <ChapterImage
            src={`${IK}/about2.jpeg`}
            title="Textile detail"
            subtitle="From the studio"
            className="aspect-[4/3]"
          />
        </div>
      </section>

      {/* exhibitions */}
      <section className="border-t border-line bg-shade">
        <div className="mx-auto max-w-[1000px] px-6 py-24 sm:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-eyebrow text-madder">Curriculum</p>
            <h2 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
              Selected Exhibitions
            </h2>
          </Reveal>
          <dl className="mt-12 border-l border-line pl-6 sm:pl-10">
            {exhibitions.map(([year, desc], i) => (
              <Reveal key={i}>
                <div className="group relative grid grid-cols-[4.5rem_1fr] gap-5 py-5 transition-transform duration-300 ease-out hover:-translate-y-1 sm:grid-cols-[7rem_1fr]">
                  <span className="absolute -left-[1.6rem] top-7 h-2 w-2 rounded-full bg-line transition-colors duration-300 group-hover:bg-madder sm:-left-[2.6rem]" />
                  <dt className="font-display text-lg text-madder">{year}</dt>
                  <dd className="text-[15px] leading-relaxed text-ink/80 transition-colors duration-300 group-hover:font-medium group-hover:text-ink">
                    {desc}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA to contact */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-[1400px] px-6 py-24 text-center sm:px-10 sm:py-28">
          <Reveal>
            <h2 className="mx-auto max-w-2xl font-display text-3xl leading-[1.12] text-ink sm:text-4xl md:text-5xl">
              Interested in the work?
            </h2>
            <div className="mt-8 flex justify-center">
              <ChapterLink to="/contact">Get in touch</ChapterLink>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

export default About;
