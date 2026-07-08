import { useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];
const EMAIL = "k0529ca@gmail.com";
const FORM_ENDPOINT = "https://api.web3forms.com/submit";

// Web3Forms delivers submissions to the email tied to its public access token, with built-in
// spam filtering. Create a free token at https://web3forms.com using k0529ca@gmail.com, then set
// it as the env var VITE_WEB3FORMS_KEY (in Vercel project settings). It is a public client value
// by design. Until it is set, the form falls back to opening the visitor's email client.
const formId = import.meta.env.VITE_WEB3FORMS_KEY || "";
const formReady = formId.length > 0;

const field =
  "w-full border-b border-line bg-transparent py-3 text-ink placeholder:text-muted/70 focus:border-madder focus:outline-none transition-colors";

function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users leave this empty. Accept silently so bots are not tipped off.
    if (data.get("website")) {
      setStatus("success");
      form.reset();
      return;
    }

    if (!formReady) {
      const body = `From: ${data.get("name")} (${data.get("email")})\n\n${data.get("message")}`;
      window.location.href = `mailto:${EMAIL}?subject=Message from miuhyang.com&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    data.append("access_key", formId);
    data.append("subject", "New message from miuhyang.com");
    try {
      const res = await fetch(FORM_ENDPOINT, { method: "POST", body: data });
      const json = await res.json();
      setStatus(json.success ? "success" : "error");
      if (json.success) form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="mx-auto grid min-h-[80vh] max-w-[1200px] items-center gap-16 px-6 pb-24 pt-40 sm:px-10 lg:grid-cols-2">
      <div>
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
          className="mt-6 font-display text-4xl font-light leading-[1.08] text-ink sm:text-5xl md:text-6xl"
        >
          Every thread carries a story worth keeping.
        </motion.h1>
        <p className="mt-8 max-w-prose text-[15px] leading-[1.9] text-muted">
          For commissions, exhibitions, or a note about the work, please reach out.
        </p>
        <a
          href={`mailto:${EMAIL}`}
          className="group mt-4 inline-block font-display text-xl text-ink sm:text-2xl"
        >
          <span className="relative">
            {EMAIL}
            <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-ink/30 transition-transform duration-500 group-hover:scale-x-0" />
            <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-madder transition-transform duration-500 group-hover:scale-x-100" />
          </span>
        </a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: EASE }}
        className="rounded-2xl border border-line bg-paper p-8 sm:p-10"
      >
        {status === "success" ? (
          <div className="flex min-h-[18rem] flex-col items-center justify-center text-center">
            <p className="font-display text-3xl text-ink">Thank you.</p>
            <p className="mt-3 text-[15px] text-muted">
              Your message has been sent. Miuh will be in touch.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* honeypot */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />
            <label className="block">
              <span className="text-xs uppercase tracking-eyebrow text-muted">Name</span>
              <input name="name" type="text" required className={`mt-2 ${field}`} placeholder="Your name" />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-eyebrow text-muted">Email</span>
              <input name="email" type="email" required className={`mt-2 ${field}`} placeholder="you@example.com" />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-eyebrow text-muted">Message</span>
              <textarea name="message" required rows={4} className={`mt-2 resize-none ${field}`} placeholder="Your message" />
            </label>
            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 self-start rounded-full bg-ink px-8 py-3 text-xs uppercase tracking-eyebrow text-linen transition-colors hover:bg-madder disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>
            {status === "error" && (
              <p className="text-sm text-madder">
                Something went wrong. Please email {EMAIL} directly.
              </p>
            )}
          </form>
        )}
      </motion.div>
    </section>
  );
}

export default Contact;
