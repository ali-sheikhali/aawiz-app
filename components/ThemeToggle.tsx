"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useState, useEffect } from "react";
import sunIcon from "../public/sun.svg";
import moonIcon from "../public/dark.svg";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setIsMounted(true);
    });
  }, []);

  if (!isMounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2"
    >
      <Image
        src={theme === "light" ? moonIcon : sunIcon}
        alt="theme toggle"
        width={24}
        height={24}
      />
    </button>
  );
}
