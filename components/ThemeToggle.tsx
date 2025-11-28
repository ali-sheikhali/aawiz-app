"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import sunIcon from "../public/sun.svg";
import moonIcon from "../public/dark.svg";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
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
    </div>
  );
}
