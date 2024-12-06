"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

type ToggleOptionsType = "light" | "dark";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [selected, setSelected] = useState<ToggleOptionsType>("light");

  useEffect(() => {
    // Sync the initial theme from `next-themes`
    if (theme === "dark") setSelected("dark");
    else setSelected("light");
  }, [theme]);

  return (
    <div className="relative flex w-fit h-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "light" ? "text-white" : "text-slate-300"
        }`}
        onClick={() => {
          setSelected("light");
          setTheme("light");
        }}
      >
        <Sun className="relative z-10 text-lg md:text-sm" />
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "dark" ? "text-white" : "text-slate-800"
        }`}
        onClick={() => {
          setSelected("dark");
          setTheme("dark");
        }}
      >
        <Moon className="relative z-10 text-lg md:text-sm" />
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "dark" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-blue-800 via-blue-900 to-blue-700"
        />
      </div>
    </div>
  );
}

export default ModeToggle;