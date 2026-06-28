"use client";
import { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "system",
  resolvedTheme: "light",
  setTheme: () => {},
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

// Update <meta name="theme-color"> in real time
function updateThemeColor(dark: boolean) {
  const color = dark ? "#0f172a" : "#ffffff";
  let meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "theme-color";
    document.head.appendChild(meta);
  }
  meta.content = color;
}

// Apply dark class + update meta
function applyTheme(dark: boolean) {
  if (dark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  updateThemeColor(dark);
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  // Resolve actual dark/light from theme + system preference
  const resolve = useCallback((t: Theme): "light" | "dark" => {
    if (t === "dark") return "dark";
    if (t === "light") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }, []);

  // On mount: read saved preference or detect system
  useEffect(() => {
    const saved = localStorage.getItem("mike-theme") as Theme | null;
    const initial: Theme = saved ?? "system";
    const resolved = resolve(initial);
    setThemeState(initial);
    setResolvedTheme(resolved);
    applyTheme(resolved === "dark");
  }, [resolve]);

  // Listen for OS theme changes (only active when theme === "system")
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (theme === "system") {
        const resolved = mq.matches ? "dark" : "light";
        setResolvedTheme(resolved);
        applyTheme(resolved === "dark");
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [theme]);

  const setTheme = useCallback((t: Theme) => {
    const resolved = resolve(t);
    setThemeState(t);
    setResolvedTheme(resolved);
    applyTheme(resolved === "dark");
    if (t === "system") {
      localStorage.removeItem("mike-theme");
    } else {
      localStorage.setItem("mike-theme", t);
    }
  }, [resolve]);

  const toggleTheme = useCallback(() => {
    const next = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(next);
  }, [resolvedTheme, setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
