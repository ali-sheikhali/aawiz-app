"use client";

import Image from "next/image";
import hamburgerIcon from "../../public/hamburger.svg";
import hamburgerDarkIcon from "../../public/hamburgerdarkmode.svg";
import closeIcon from "../../public/close.svg";
import closeDarkIcon from "../../public/closedarkmode.svg";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function HamburgerMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const {theme} = useTheme()  
  const handleOpenMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [openMenu]);

  return (
    <div>
      {/* Hamburger button */}
      <div onClick={handleOpenMenu} className="cursor-pointer">
        <Image src={theme=== "light" ? hamburgerIcon : hamburgerDarkIcon} alt="HamburgerMenu" width={24} height={24} />
      </div>

      {/* Slide menu */}
      <div
        className={`
          ${openMenu ? "translate-x-0" : "translate-x-full"}
          w-40 h-screen right-0 top-0 fixed bg-brand-primary dark:bg-fill-primary text-fill-primary dark:text-brand-primary
          transition-transform duration-300 p-4
        `}
      >
        <div className="flex flex-col items-start p-2 gap-4">
          <div onClick={handleOpenMenu} className="cursor-pointer mb-4">
            <Image src={theme === "light" ? closeDarkIcon  : closeIcon } alt="closeIcon" width={24} height={24} />
          </div>
          <Link onClick={handleOpenMenu} href="/login">
            login
          </Link>
          <Link onClick={handleOpenMenu} href="/dashboard">
            user dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
