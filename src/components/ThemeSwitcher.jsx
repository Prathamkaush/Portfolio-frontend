import React from "react";
import { useTheme } from "./ThemeContext";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "sci-fi" ? "chaos" : "sci-fi";
    setTheme(newTheme);

    // ✅ Wait a tick, then refresh
    setTimeout(() => {
      window.location.reload();
    }, 150); // tiny delay feels smoother
  };

  return (
    <button onClick={toggleTheme} className="switch-theme p-2 rounded-md font-semibold">
  {theme === "sci-fi" ? "☄️ Sci-Fi" : "🎨 Chaos"}
</button>
  );
}
