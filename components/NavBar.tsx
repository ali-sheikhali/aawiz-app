import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  return (
    <div className="w-full  text-primary py-4 border-b border-stroke-primary">
      <div className="w-10/12 mx-auto flex items-center justify-between">
        <Link className="font-bold text-xl" href="/">
          Aawiz
        </Link>

        <ThemeToggle />
      </div>
    </div>
  );
}
