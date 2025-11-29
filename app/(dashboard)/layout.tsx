import NavBar from "@/components/NavBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <NavBar />
        <div className="w-10/12 mx-auto my-10">{children}</div>
    </div>
  );
}
