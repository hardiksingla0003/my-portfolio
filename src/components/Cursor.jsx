import { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const curRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const cur = curRef.current;
    const move = (e) => {
      cur.style.left = e.clientX + "px";
      cur.style.top = e.clientY + "px";
    };
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseenter", show);
    document.addEventListener("mouseleave", hide);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseenter", show);
      document.removeEventListener("mouseleave", hide);
    };
  }, []);

  return (
    <div
      ref={curRef}
      style={{
        position: "fixed",
        width: "8px",
        height: "8px",
        background: "#e8d5a3",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
        transition: "width .2s, height .2s, opacity .2s",
        top: 0,
        opacity: visible ? 1 : 0,
        left: 0,
      }}
    />
  );
};

export default Cursor;
