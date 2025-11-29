import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import HamburgerMenu from "./common/HamburgerMenu";

export default function NavBar() {
  return (
    <div className="w-full  text-primary py-4 border-b border-stroke-primary">
      <div className="w-10/12 mx-auto flex items-center justify-between">
        <Link className="font-bold text-xl" href="/">
          Aawiz
        </Link>

        <div className="items-center font-semibold gap-6 hidden md:flex ">
          <Link href="/login">login</Link>
          <Link href="/dashboard">dashboard</Link>
        </div>

        <ThemeToggle />

        <div className="md:hidden">
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
}
