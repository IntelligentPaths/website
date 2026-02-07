"use client";

import { usePathname } from "next/navigation";
import NavBar from "./NavBar";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      {!isHome && <NavBar />}
      {children}
    </>
  );
}
