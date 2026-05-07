import { useEffect, useRef, useState } from "react";

const SKILLS = [
  { name: "React & Component Design", pct: 70 },
  { name: "Tailwind & CSS", pct: 75 },
  { name: "JavaScript (ES6+)", pct: 73 },
  { name: "UI / UX Thinking", pct: 68 },
  { name: "Git & Version Control", pct: 70 },
  { name: "C / C++", pct: 82 },
  { name: "Data Structures & Algorithms", pct: 75 },
];

const STATS = [
  { num: "3+", label: "Projects shipped" },
  { num: "8", label: "Core technologies" },
  { num: "100%", label: "Frontend focused" },
  { num: "∞", label: "Pixel perfectionism" },
];

const SkillBar = ({ name, pct }) => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          obs.unobserve(ref.current);
        }
      },
      { threshold: 0.4 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="py-4 border-b border-white/5">
      <div className="flex justify-between items-baseline mb-2.5">
        <span className="text-[13px] text-white/55">{name}</span>
        <span
          className="text-[13px] italic text-gold/60"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          {pct}%
        </span>
      </div>
      <div className="w-full h-px bg-white/7 ">
        <div
          className="h-full transition-all duration-1200 ease-out"
          style={{
            width: active ? `${pct}%` : "0%",
            background:
              "linear-gradient(90deg, rgba(232,213,163,0.4), #e8d5a3)",
          }}
        />
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="border-y border-white/7">
      <div className="px-6 md:px-13 py-16 md:py-20 border-b border-white/7">
        <div className="flex items-start gap-4 mb-8">
          <span className="w-8 h-px bg-gold/30 mt-2.5 shrink-0" />

          <span
            className="text-[11px] tracking-[0.15em] uppercase text-gold/50 mt-1"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            About me
          </span>
        </div>

        <p
          className="text-[clamp(22px,3.5vw,42px)] font-light italic leading-[1.4] text-white/80 tracking-[-0.02em] max-w-4xl"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          I believe the best interfaces are the ones users{" "}
          <strong className="font-bold not-italic text-paper">
            never have to think about.
          </strong>{" "}
          Fast, clear, and built to last —{" "}
          <em className="text-gold not-italic">
            that's the standard I hold my work to.
          </em>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr]">
        <div className="px-6 md:px-13 py-12 md:py-16 border-b md:border-b-0 md:border-r border-white/7">
          <div className="grid grid-cols-2 md:grid-cols-1">
            {STATS.map(({ num, label }, i) => (
              <div
                key={label}
                className={`py-5 md:py-6 border-b border-white/5 ${i % 2 === 0 ? "pr-6 border-r md:border-r-0" : "pl-6"} md:pl-0 md:pr-0`}
              >
                <div
                  className="text-[clamp(28px,5vw,52px)] font-bold leading-none tracking-[-0.04em] text-gold"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {num}
                </div>

                <div className="text-[11px] uppercase tracking-widest text-white/30 mt-2">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 md:px-13 py-12 md:py-16 flex flex-col justify-center">
          <p className="text-[11px] tracking-[0.12em] uppercase text-white/30 mb-6">
            Proficiency
          </p>

          {SKILLS.map((s) => (
            <SkillBar key={s.name} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
