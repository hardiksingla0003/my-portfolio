import { useEffect, useState } from "react";

const Loader = ({ onComplete }) => {
  const [phase, setPhase] = useState("enter");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const t1 = setTimeout(() => setPhase("visible"), 100);
    const t2 = setTimeout(() => setPhase("exit"), 2000);
    const t3 = setTimeout(() => {
      onComplete();
      document.body.style.overflow = "";
    }, 2600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-bg"
      style={{
        opacity: phase === "exit" ? 0 : 1,
        transition: phase === "exit" ? "opacity 0.6s ease" : "none",
        pointerEvents: phase === "exit" ? "none" : "all",
      }}
    >
      <h1
        className="text-[clamp(36px,6vw,72px)] font-bold tracking-[-0.04em] text-paper"
        style={{
          fontFamily: "'Fraunces', serif",
          opacity: phase === "enter" ? 0 : 1,
          transform: phase === "enter" ? "translateY(20px)" : "translateY(0)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        Hardik <em className="text-gold font-light">Singla</em>
      </h1>

      <p
        className="text-[11px] tracking-[0.2em] uppercase text-white/30 mt-4"
        style={{
          opacity: phase === "enter" ? 0 : 1,
          transform: phase === "enter" ? "translateY(10px)" : "translateY(0)",
          transition: "opacity 0.6s 0.15s ease, transform 0.6s 0.15s ease",
        }}
      >
        Frontend Developer
      </p>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-px bg-white/10">
        <div
          className="h-full bg-gold"
          style={{
            width: phase === "visible" || phase === "exit" ? "100%" : "0%",
            transition: "width 1.6s ease",
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
