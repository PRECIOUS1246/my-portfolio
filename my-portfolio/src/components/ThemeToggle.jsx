import { useEffect, useState } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return (
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {}
    // debug log
    // eslint-disable-next-line no-console
    console.info("ThemeToggle effect -> isDark =", isDark);
  }, [isDark]);

  const handleClick = (e) => {
    // eslint-disable-next-line no-console
    console.log("ThemeToggle clicked — previous:", isDark);
    setIsDark((s) => !s);
  };

  return (
    <button
      onClick={handleClick}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        padding: "8px 12px",
        cursor: "pointer",
        borderRadius: 8,
        border: "1px solid rgba(0,0,0,0.08)",
        background: "var(--toggle-bg, #fff)",
        color: "var(--toggle-fg, #111)",
        zIndex: 9999
      }}
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}

export default ThemeToggle;