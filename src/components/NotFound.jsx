import { useEffect, useState } from "react";

const NotFound = () => {
  const [displayed, setDisplayed] = useState("");
  const text = "404";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, ++i));
      if (i === text.length) clearInterval(interval);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(232,213,163,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="text-[clamp(120px,22vw,280px)] font-bold leading-none tracking-tighter text-gold/10 select-none mb-8">
        {displayed}
      </div>

      <h1
        className="text-[clamp(28px,4vw,48px)] font-bold tracking-[-0.03em] mb-4 relative z-10"
        style={{
          fontFamily: "'Fraunces', serif",
        }}
      >
        Page not found
      </h1>

      <p className="text-[14px] text-white/35 mb-12 leading-relaxed max-w-sm ">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <a
        href="/"
        className="text-gold text-[11px] tracking-[0.14em] uppercase px-12 py-4 font-medium transition-all duration-300 hover:bg-gold/10"
        style={{ border: "1px solid rgba(232,213,163,0.3)" }}
      >
        Back to home ←
      </a>
    </div>
  );
};

export default NotFound;
