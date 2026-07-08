import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];
const EMAIL = "lonk752@gmail.com";

function Contact() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-[900px] flex-col items-center justify-center px-6 py-40 text-center sm:px-10">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE }}
        className="text-xs uppercase tracking-eyebrow text-madder"
      >
        Contact
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.08, ease: EASE }}
        className="mt-6 max-w-2xl font-display text-4xl font-light leading-[1.08] text-ink sm:text-5xl md:text-6xl"
      >
        Every thread carries a story worth keeping.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: EASE }}
        className="mt-8 text-[15px] leading-[1.9] text-muted"
      >
        For any inquiries, please get in touch.
      </motion.p>
      <motion.a
        href={`mailto:${EMAIL}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: EASE }}
        className="group mt-6 inline-block font-display text-2xl text-ink sm:text-3xl"
      >
        <span className="relative">
          {EMAIL}
          <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-ink/30 transition-transform duration-500 group-hover:scale-x-0" />
          <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-madder transition-transform duration-500 group-hover:scale-x-100" />
        </span>
      </motion.a>
    </section>
  );
}

export default Contact;
