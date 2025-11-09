import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "sci-fi");

  useEffect(() => {
  let chaosLink = document.getElementById("chaos-theme");

  if (theme === "chaos") {
    if (!chaosLink) {
      chaosLink = document.createElement("link");
      chaosLink.id = "chaos-theme";
      chaosLink.rel = "stylesheet";
      chaosLink.href = `/styles/chaos.css?v=${Date.now()}`; // ✅ no caching
      document.head.appendChild(chaosLink);
    } else {
      chaosLink.href = `/styles/chaos.css?v=${Date.now()}`;
    }
  } else {
    if (chaosLink) chaosLink.remove();
  }

  localStorage.setItem("theme", theme);
}, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
