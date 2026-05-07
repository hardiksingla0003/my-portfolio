import { useEffect, useState } from "react";

const NAV_LINKS = [
  ["Work", "#work"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onscroll = () => {
      setScrolled(window.scrollY > 20);

      if (window.scrollY < 100) {
        setActive("");
        return;
      }
      const sections = ["work", "about", "contact"];
      let current = "";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const { top } = el.getBoundingClientRect();
        if (top <= window.innerHeight / 2) current = id;
      }
      setActive(current);
    };

    window.addEventListener("scroll", onscroll);
    return () => window.removeEventListener("scroll", onscroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-between px-6 md:px-13 py-7 border-b border-white/7 transition-all duration-300 ${scrolled ? "bg-bg/90 backdrop-blur-md" : "bg-transparent"}`}
    >
      <span
        className="text-gold text-[17px] font-light tracking-wide"
        style={{ fontFamily: "Fraunces" }}
      >
        Hardik Singla
      </span>

      <div className="hidden md:flex gap-9">
        {NAV_LINKS.map(([label, href]) => {
          const id = href.replace("#", "");
          const isActive = id === active;

          return (
            <a
              key={label}
              href={href}
              className={`text-[11px] tracking-widest uppercase transition-colors duration-200 ${isActive ? "text-gold" : "text-white/40 hover:text-gold"}`}
            >
              {label}
            </a>
          );
        })}
      </div>

      <div className="flex items-center gap-2 text-gold bg-[rgba(232,213,163,0.08)] border border-[rgba(232,213,163,0.2)] px-4 py-1.5 text-[11px] rounded-full tracking-[0.06em]">
        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
        Open to work
      </div>
    </nav>
  );
};

export default Navbar;
