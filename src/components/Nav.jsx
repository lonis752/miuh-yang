import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const menu = [
  { to: "/galleries", label: "Galleries" },
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
        <Link to="/" className="group flex items-center gap-3">
          <img
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/favicon-removebg-preview.png?tr=w-96,f-auto"
            alt=""
            width={40}
            height={40}
            className="h-9 w-9 object-contain sm:h-10 sm:w-10"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl tracking-tight text-ink sm:text-2xl">
              Miuh Yang
            </span>
            <span className="text-[10px] uppercase tracking-eyebrow text-muted">
              Textile Artist
            </span>
          </span>
        </Link>

        {/* desktop */}
        <div className="hidden items-center gap-9 md:flex">
          {menu.map((m) => (
            <NavLink key={m.to} to={m.to} active={pathname === m.to}>
              {m.label}
            </NavLink>
          ))}
        </div>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className="flex flex-col gap-[5px] p-2 md:hidden"
        >
          <span className={`h-px w-6 bg-ink transition-transform duration-300 ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-ink transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-ink transition-transform duration-300 ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-8 pt-2">
              {menu.map((item, i) => (
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
function NavLink({ to, children, active }) {
  return (
    <Link
      to={to}
      className="group relative text-sm text-ink/80 transition-colors hover:text-ink"
    >
      {children}
      <span
        className={`absolute -bottom-1 left-0 h-px bg-madder transition-all duration-300 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}
