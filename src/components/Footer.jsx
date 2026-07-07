import { Link } from "react-router-dom";

const galleries = [
  { to: "/korean-war", label: "3,227,082 Stitches" },
  { to: "/shroud", label: "The Shroud" },
  { to: "/textile", label: "Floral & Textile" },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-shade">
      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl text-ink">Miuh Yang</p>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted">
              A Korean-Canadian textile artist working in Vancouver — weaving
              memory, loss, and the quiet poetics of everyday life.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-eyebrow text-muted">The Work</p>
            {galleries.map((g) => (
              <Link
                key={g.to}
                to={g.to}
                className="text-sm text-ink/80 transition-colors hover:text-madder"
              >
                {g.label}
              </Link>
            ))}
          </nav>

          <nav className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-eyebrow text-muted">Studio</p>
            <Link to="/about" className="text-sm text-ink/80 transition-colors hover:text-madder">
              About
            </Link>
            <Link to="/contact" className="text-sm text-ink/80 transition-colors hover:text-madder">
              Contact
            </Link>
            <Link to="/privacy-policy" className="text-sm text-ink/80 transition-colors hover:text-madder">
              Privacy Policy
            </Link>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Miuh Yang. All rights reserved.</p>
          <p className="uppercase tracking-eyebrow">Vancouver, Canada</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
