import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const PROJECTS = [
  {
    idx: "01",
    cat: "Developer Tools",
    title: "Interview Prep Board",
    desc: "Curated prep board covering DSA, system design, and behavioural rounds with progress tracking and topic filtering.",
    chips: ["React", "JavaScript", "CSS Modules"],
    live: "https://dev-interview-prep.vercel.app/dashboard",
    repo: "https://github.com/hardiksingla0003/dev-interview-prep",
  },
  {
    idx: "02",
    cat: "SaaS · Analytics",
    title: "SaaS Dashboard",
    desc: "Full analytics platform with real-time charts, KPI cards, and responsive user management. Built with a scalable component-driven architecture.",
    chips: ["React", "Tailwind", "Recharts", "Context API"],
    live: "https://saas-dashboard-ebon-five.vercel.app/",
    repo: "https://github.com/hardiksingla0003/saas-dashboard",
  },
  {
    idx: "03",
    cat: "Productivity",
    title: "Job Tracker",
    desc: "Kanban-style application tracker with status pipelines, notes, and deadline reminders. Persistent state with LocalStorage.",
    chips: ["React", "Tailwind", "LocalStorage"],
    live: "https://job-tracker-app-livid.vercel.app/",
    repo: "https://github.com/hardiksingla0003/job-tracker",
  },
  {
    idx: "04",
    cat: "Coming Soon",
    title: "Next Project",
    desc: "Something new is in the works. Building with React, JavaScript, and Framer Motion — focused on micro-interactions and animation.",
    chips: ["React", "JavaScript", "Framer Motion"],
    live: null,
    repo: null,
    coming: true,
  },
];
const ProjectRow = ({ p }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`grid grid-cols-[50px_1fr] md:grid-cols-[80px_1fr_auto] items-center gap-4 md:gap-8 py-10 border-b border-white/6 transition duration-300 
      ${p.coming ? "opacity-40 hover:opacity-60" : ""} 
      ${hovered ? "pl-4" : ""}`}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <span
        className="text-[28px] md:text-[42px] font-bold leading-none transition-colors duration-300 self-center"
        style={{
          fontFamily: "'Fraunces', serif",
          color: hovered ? "rgba(232,213,163,0.2)" : "rgba(240,236,228,0.07)",
        }}
      >
        {p.idx}
      </span>

      <div>
        <div className="flex items-center gap-3 mb-2.5">
          <div className="text-[10px] tracking-[0.14em] uppercase text-[rgba(232,213,163,0.5)]">
            {p.cat}
          </div>
          {p.coming && (
            <span className="text-[9px] tracking-widest uppercase px-2 py-0.5 rounded-sm border border-[rgba(232,213,163,0.2)] text-[rgba(232,213,163,0.4)] bg-[rgba(232,213,163,0.04)]">
              In progress
            </span>
          )}
        </div>

        <h3
          className={`text-[24px] md:text-[32px] font-bold leading-[1.1] tracking-[-0.02em] mb-3 transition-colors duration-300 ${hovered ? "text-gold" : "text-paper"}`}
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          {p.title}
        </h3>

        <p className="text-[13px] text-white/40 leading-[1.75] max-w-125 font-light mb-4">
          {p.desc}
        </p>

        <div className="flex gap-2 flex-wrap mb-4">
          {p.chips.map((c) => (
            <span
              key={c}
              className={`text-[10px] tracking-[0.08em] uppercase border px-2.5 py-1 rounded-sm transition-colors duration-300 
              ${hovered ? "border-[rgba(232,213,163,0.2)] text-[rgba(232,213,163,0.6)]" : "border-[rgba(240,236,228,0.1)] text-[rgba(240,236,228,0.35)]"}`}
            >
              {c}
            </span>
          ))}
        </div>

        {!p.coming ? (
          <div className="flex gap-4">
            <a
              href={p.live}
              rel="noopener noreferrer"
              target="_blank"
              className="text-[11px] tracking-[0.08em] uppercase text-gold border-b border-[rgba(232,213,163,0.4)] pb-0.5 hover:border-gold transition-colors flex"
            >
              Live demo <ArrowUpRight size={15} />
            </a>
            <a
              href={p.repo}
              rel="noopener noreferrer"
              target="_blank"
              className="text-[11px] tracking-[0.08em] uppercase text-white/30 border-b border-white/10 pb-0.5 hover:text-white/60 transition-colors flex"
            >
              GitHub <ArrowRight size={15} />
            </a>
          </div>
        ) : (
          <span
            className="text-[11px] tracking-[0.08em] uppercase text-white/20 italic"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Dropping soon...
          </span>
        )}
      </div>
      <span
        className={`hidden md:block text-[20px] transition-all duration-300 self-center 
        ${hovered ? "text-gold translate-x-1 -translate-y-1" : "text-[rgba(240,236,228,0.2)]"}`}
      >
        {p.coming ? "..." : "↗"}
      </span>
    </div>
  );
};
const Work = () => {
  return (
    <section id="work" className="px-6 md:px-13 pb-16 md:pb-24">
      <div className="flex justify-between items-baseline py-12 border-b border-white/7">
        <span
          className="text-[13px] italic font-light text-white/35"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Selected work
        </span>
        <span className="text-[11px] tracking-[0.12em] text-white/25">
          2024 - 2026
        </span>
      </div>

      {PROJECTS.map((p) => (
        <ProjectRow key={p.idx} p={p} />
      ))}
    </section>
  );
};

export default Work;
