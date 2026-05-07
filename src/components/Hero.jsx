import { useEffect, useState } from "react";

const WORDS = [
  "interfaces",
  "experiences",
  "dashboards",
  "interactions",
  "things",
];
const Hero = () => {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = WORDS[wordIdx];
    let timeout;

    if (!deleting) {
      if (displayed.length < word.length) {
        timeout = setTimeout(
          () => setDisplayed(word.slice(0, displayed.length + 1)),
          90,
        );
      } else {
        timeout = setTimeout(() => setDeleting(true), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      } else {
        setDeleting(false);
        setWordIdx((wordIdx + 1) % WORDS.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [deleting, wordIdx, displayed]);

  return (
    <section className="min-h-[70vh] md:min-h-[88vh] flex flex-col justify-between px-6 md:px-13 pt-4 pb-6 md:pt-10 md:pb-20">
      <div className="flex flex-col items-center justify-center text-center flex-1 py-8">
        <p className="uppercase mb-8 tracking-[0.18em] text-[11px] text-[rgba(232,213,163,0.45)]">
          Frontend Developer · 2026
        </p>

        <h1
          className="text-[clamp(72px,12vw,140px)] font-bold leading-[0.92] tracking-[-0.04em] "
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          <span className="block text-paper">I build</span>
          <span className="block font-light italic text-gold">
            {displayed}
            <span className="animate-pulse opacity-80">|</span>
          </span>
        </h1>

        <p className="text-[15px] text-white/40 leading-[1.8] mt-6 md:mt-10 font-light max-w-105 ">
          Clean code. Thoughtful UX. The kind of frontend work that makes users
          stop and think —{" "}
          <span className="text-gold">"this just feels right."</span>
        </p>
      </div>

      <div className="flex justify-between items-end pt-6 md:pt-10 border-t border-white/[0.07]">
        <span className="text-[12px] tracking-[0.08em] uppercase text-white/30 hidden md:block">
          Haryana · India
        </span>

        <div className="flex items-center gap-3 text-white/30 text-[12px] tracking-[0.06em]">
          <span className="w-12 h-px bg-linear-to-r from-[rgba(232,213,163,0.5)] to-transparent " />
          Scroll down
        </div>

        <span
          className="text-[12px] italic text-white/30"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          3 projects
        </span>
      </div>
    </section>
  );
};

export default Hero;
