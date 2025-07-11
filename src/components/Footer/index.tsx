'use client';

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Footer() {
   const {theme} = useTheme()

   const [mounted, setMounted] = useState(false)

   useEffect(() => {
    setMounted(true)
   })

   const logoSrc = mounted ? `/${theme === "light" ? "logo-black.svg" : "logo-white.svg"}` : "logo-white.svg";
    
  return (
    <footer className="flex w-full items-center justify-between bg-background px-20 py-6 text-sm border-t border-border">
      <Image src={`${logoSrc}`} alt="" width={32} height={32}/>
      <p className="text-heading-h6 font-semibold">Feito por Pedro Sales</p>
    </footer>
  );
}
