/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { EVERYDAY } from "../../data/everydayStitches";

// A word rendered as running stitches generated from the Fraunces font, sewn in one stitch at
// a time along the letter curves. Behaves like inline text: sizes to the surrounding font-size,
// transparent background, infinitely scalable. Default word is "Everyday".
//
// Props: data (viewBox+strokeW+stitches), label (a11y text), color (thread), duration (seconds),
// strokeWidth (override), heightEm / baselineEm (fine-tune fit against surrounding text).
export default function StitchInText({
  data = EVERYDAY,
  label = "Everyday",
  color = "#8A3B2E",
  duration = 2.6,
  strokeWidth,
  heightEm = 1.1,
  baselineEm = -0.28,
  className = "",
}) {
  const [, , vw, vh] = data.viewBox;
  const widthEm = (vw / vh) * heightEm;
  const sw = strokeWidth || data.strokeW;
  const per = duration / Math.max(data.stitches.length, 1);

  return (
    <span
      className={`inline-block ${className}`}
      style={{ height: `${heightEm}em`, width: `${widthEm}em`, verticalAlign: `${baselineEm}em` }}
    >
      <svg
        viewBox={data.viewBox.join(" ")}
        className="h-full w-full overflow-visible"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <motion.g
          fill="none"
          stroke={color}
          strokeWidth={sw}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={{ show: { transition: { staggerChildren: per } } }}
        >
          {data.stitches.map((s, i) => (
            <motion.line
              key={i}
              x1={s[0]}
              y1={s[1]}
              x2={s[2]}
              y2={s[3]}
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { duration: 0.14 } },
              }}
            />
          ))}
        </motion.g>
      </svg>
      <span className="sr-only">{label}</span>
    </span>
  );
}
