const STACK = [
  "React",
  "Tailwind",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Vite",
  "Git",
  "C",
  "C++",
  "DSA",
];
const StackTicker = () => {
  const items = [...STACK, ...STACK];

  return (
    <div className="py-6 border-y border-white/7 overflow-hidden whitespace-nowrap">
      <div style={{ animation: "ticker 22s linear infinite" }}>
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex mx-7 text-[clamp(28px,4vw,44px)] font-bold italic text-white/7 tracking-[-0.02em] transition-colors duration-200 hover:text-[rgba(232,213,163,0.6)] cursor-default"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            {item}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default StackTicker;
