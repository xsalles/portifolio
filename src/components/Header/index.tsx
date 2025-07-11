"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { ModeToggle } from "../ModeToggle";
import { useTheme } from "next-themes";
import { linkUnderlineAnimation } from "./data";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false)
  
     useEffect(() => {
      setMounted(true)
     })
  
     const logoSrc = mounted ? `/${theme === "light" ? "logo-black.svg" : "logo-white.svg"}` : "logo-white.svg";

  return (
    <header className="bg-background py-6 px-20 justify-between flex items-center fixed top-0 left-0 right-0 z-50 border-b border-border">
      <Image
        src={`${logoSrc}`}
        width={32}
        height={32}
        alt="Logo criada para o Portifólio do Pedro Sales onde contém uma letra X e uma letra S uma em baixo da outra em diagonal"
      />
      <nav className="flex justify-between gap-8 text-foreground text-heading font-semibold">
        <div className="relative">
          <Link href="" className={`${linkUnderlineAnimation}`}>
            Sobre mim
          </Link>
        </div>
        <div className="relative">
          <Link href="" className={`${linkUnderlineAnimation}`}>
            Habilidades
          </Link>
        </div>
        <div className="relative">
          <Link href="" className={`${linkUnderlineAnimation}`}>
            Projetos
          </Link>
        </div>
        <div className="relative">
          <Link href="" className={`${linkUnderlineAnimation}`}>
            Contato
          </Link>
        </div>
      </nav>
      <div className="flex items-center gap-4">
        <Button asChild className="relative">
          <Link href={"/assets/curriculo.pdf"} className="text-button-2 font-semibold" download>
            Currículo
            <Download width={20} height={20} />
          </Link>
        </Button>

        <ModeToggle />
      </div>
    </header>
  );
}
