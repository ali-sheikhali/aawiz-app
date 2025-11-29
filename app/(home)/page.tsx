import Image from "next/image";
import heroHeader from "../../public/cg-banner.jpg";

export default function Home() {
  return (
    <div className="overflow-hidden relative">
      {/* overlay for hero header */}
      <div className="absolute inset-0 bg-black/90 z-10"></div>
      <div className="w-screen h-screen relative">
        <Image
          src={heroHeader}
          alt="heroHeader"
          fill
          className="object-cover"
          loading="eager"
        />
        <div className="absolute mt-20 md:mt-0 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2  z-20 text-white max-w-xl mx-auto">
          <div className="flex flex-col gap-6 items-center text-center">
            <h1 className="text-2xl lg:text-4xl font-bold">
              Transforming HR: Where Employee Wellness Meets Innovation!
            </h1>
            <p className="text-xs lg:text-lg">
              Aawiz is an innovative HR platform dedicated to enhancing employee
              well-being and engagement. We empower organizations to create a
              supportive workplace culture through real-time mood tracking,
              customizable surveys, and data-driven insights. With Aawiz, you
              can launch faster and scale smarter, transforming your HR
              processes and fostering a thriving workforce.
            </p>
            <p className="text-bold text-red md:hidden">
              To visit the site, click on the hamburger menu.
            </p>
            <p className="text-bold text-red hidden md:block">
              To visit the site, click on the login or user name in navbar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
