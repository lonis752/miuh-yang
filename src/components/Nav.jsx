import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const galleries = [
  { to: "/korean-war", label: "3,227,082 Stitches" },
  { to: "/shroud", label: "The Shroud" },
  { to: "/textile", label: "Floral & Textile" },
];
const pages = [
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
        scrolled || open
          ? "bg-linen/85 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 sm:px-10">
        <Link to="/" className="group flex flex-col leading-none">
          <span className="font-display text-xl tracking-tight text-ink sm:text-2xl">
            Miuh Yang
          </span>
          <span className="text-[10px] uppercase tracking-eyebrow text-muted">
            Textile Artist
          </span>
        </Link>

        {/* desktop */}
        <div className="hidden items-center gap-8 lg:flex">
          {galleries.map((g) => (
            <NavLink key={g.to} to={g.to}>
              {g.label}
            </NavLink>
          ))}
          <span className="h-4 w-px bg-line" />
          {pages.map((p) => (
            <NavLink key={p.to} to={p.to}>
              {p.label}
            </NavLink>
          ))}
        </div>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className="flex flex-col gap-[5px] p-2 lg:hidden"
        >
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-8 pt-2">
              {[...galleries, ...pages].map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <Link
                    to={item.to}
                    className="block border-b border-line py-3 font-display text-2xl text-ink"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* eslint-disable-next-line react/prop-types */
function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="group relative text-sm text-ink/80 transition-colors hover:text-ink"
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-px w-0 bg-madder transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}
