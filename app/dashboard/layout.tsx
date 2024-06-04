import DashNavigation from "@/components/dashboard/DashNavigation";
import Navbar from "@/components/layout/Navbar";
import { Toaster } from "@/components/ui/toaster";

export default function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>
        <DashNavigation />
      </div>
      {children}
      <Toaster />
    </div>
  );
}
