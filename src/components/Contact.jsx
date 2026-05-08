import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
const LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/hardiksingla0003",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/hardiksingla0003",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Resume",
    href: "/resume.pdf",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:hardiksingla1999@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
];

const isExternal = (href) =>
  !href.startsWith("mailto:") && !href.startsWith("/");

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText("hardiksingla1999@gmail.com");
    setCopied(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="border-t border-white/7">
      <div className="relative px-6 md:px-13 py-24 md:py-36 flex flex-col items-center text-center overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125"
          style={{
            background:
              "radial-gradient(circle, rgba(232,213,163,0.08) 0%, transparent 65%)",
          }}
        />
        <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-8 relative z-10">
          Get in touch
        </p>

        <h2
          className="text-[clamp(52px,10vw,110px)] font-bold leading-[0.92] tracking-[-0.03em] mb-12 z-10 relative"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Let's build
          <em className="block font-light text-gold">together.</em>
        </h2>

        <div className="flex items-center gap-3 mb-12 relative z-10">
          <span className="text-[13px] text-white/30">
            hardiksingla1999@gmail.com
          </span>
          <button
            onClick={handleCopy}
            className={`text-[10px] tracking-widest uppercase transition-all duration-200 px-3 py-1.5 rounded-sm border border-[rgba(232,213,163,0.2)] ${copied ? "text-[#7ecba1] bg-[rgba(126,203,161,0.08)]" : "text-[rgba(232,213,163,0.5)] bg-transparent"} hover:border-gold/40`}
          >
            {copied ? "✓ Copied!" : "Copy"}
          </button>
        </div>

        <a
          href="mailto:hardiksingla1999@gmail.com"
          className="inline-flex items-center bg-transparent justify-center text-gold text-[11px] border-[1.5px] border-gold/30 hover:border-gold/60 rounded-xs tracking-[0.12em] uppercase px-14 py-5 font-medium transition-all duration-300 hover:bg-gold/10 relative z-10 mb-12"
        >
          Send an email <ArrowUpRight size={15} />
        </a>

        <div className="flex w-full z-10 relative max-w-2xl mt-12 border border-[rgba(255,255,255,0.07)]">
          {LINKS.map(({ label, href, icon }, i) => (
            <a
              key={label}
              href={href}
              target={isExternal(href) ? "_blank" : "_self"}
              rel={isExternal(href) ? "noopener noreferrer" : undefined}
              className="flex-1 flex flex-col justify-center items-center py-7 gap-2.5 transition-all duration-200 hover:bg-white/3 group border-r border-[rgba(255,255,255,0.07)]"
            >
              <span className="text-white/25 group-hover:text-gold/70 transition-colors duration-200">
                {icon}
              </span>
              <span className="text-[11px] tracking-[0.12em] uppercase text-white/35 group-hover:text-gold/80 transition-colors duration-200">
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="px-6 md:px-13 py-5 border-t border-white/7 flex justify-between items-center">
        <span
          className="text-[13px] font-light italic text-white/20"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Hardik Singla
        </span>
        <span className="text-[10px] tracking-widest uppercase text-white/15 ">
          © {new Date().getFullYear()} · Haryana, India
        </span>
      </div>
    </section>
  );
};

export default Contact;
