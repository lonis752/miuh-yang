/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

// Counts up to `to` once it scrolls into view. Used for the 3,227,082 stitch total.
export default function Counter({ to, duration = 2.4, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString("en-US")}
    </span>
  );
}
