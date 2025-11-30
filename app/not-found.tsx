'use client'
import Button from "@/components/base/Button";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";
import notFountImage from "../public/404.png";
import notFountDarkImage from "../public/404dark.png";
import { useTheme } from "next-themes";
export default function NotFoundPage() {

    const {theme} = useTheme()
  return (
    <div>
      <NavBar />

      <div className="min-h-screen flex flex-col -mt-20 gap-5 items-center justify-center text-center">
        <Image
          src={theme === "dark" ? notFountDarkImage  : notFountImage }
          alt="notFountImage"
          width={250}
          height={250}
          className="rounded-xl"
        />
        <div className="w-8/12 md:w-6/12 lg:w-3/12 flex justify-between gap-3 ">
          <Link href="/" className="w-full">
            <Button name="Home page" type="button" />
          </Link>
          <Link href="/login" className="w-full">
            <Button name="login" type="button" />
          </Link>
        </div>
      </div>
    </div>
  );
}
