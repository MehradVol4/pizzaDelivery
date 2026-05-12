import { useEffect } from "react";
import useLocalStorageState from "../utils/useLocalStorageState";

function ThemeToggle() {
  const [isDark, setIsDark] = useLocalStorageState("fp_theme_dark", false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", Boolean(isDark));
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={() => setIsDark((d) => !d)}
      className="chip"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light theme" : "Dark theme"}
    >
      <span className="text-sm leading-none">{isDark ? "☾" : "☀"}</span>
      <span className="hidden sm:inline">{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}

export default ThemeToggle;
