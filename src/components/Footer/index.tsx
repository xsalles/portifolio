'use client';

import { useTheme } from "next-themes";
import Image from "next/image";

export default function Footer() {
   const {theme} = useTheme()
    
  return (
    <footer className="flex w-full items-center justify-between bg-background px-10 py-6 text-sm border-t border-border">
      <Image src={`/${theme === "light" ? "logo-black.svg" : "logo-white.svg"}`} alt="" width={32} height={32}/>
      <p>Feito por Pedro Sales</p>
    </footer>
  );
}
