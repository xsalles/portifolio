"use client";

import { useThemeImage } from "@/hooks/useThemeImage";
import Image from "next/image";

export default function Footer() {

  const logoSrc = useThemeImage({
    lightImage: "logo-white.svg",
    darkImage: "logo-black.svg",
  });

  return (
    <footer className="flex w-full items-center justify-between bg-background md:px-10 lg:px-20 px-4 py-6 text-sm border-t border-border">
      <Image src={`${logoSrc}`} alt="" width={32} height={32} />
      <p className="text-heading-h6 font-semibold">Feito por Pedro Sales</p>
    </footer>
  );
}
