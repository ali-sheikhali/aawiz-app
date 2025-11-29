import NavBar from "@/components/NavBar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-h-screen overflow-hidden">
        <NavBar />
        <div className="">{children}</div>
    </div>
  );
}
