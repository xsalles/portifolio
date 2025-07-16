import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function HeroSection() {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  const logoSrc = mounted
    ? `/${theme === "light" ? "logo-black.svg" : "logo-white.svg"}`
    : "logo-white.svg";

  return (
    <section>
      <div>
        <h1>
          Olá, eu sou <span>Pedro Sales</span> <br />
          <span>Frontend</span> <span>Developer</span> <br />
          Moro no <span>Brasil.</span>
        </h1>
        <p>
          Eu me chamo Pedro Sales, tenho 17 anos, Front-End Developer e moro no
          Brasil. Tenho conhecimentos em back-end (Node.Js) e atualmente estou
          cursando Técnico em Desenvolvimento de Sistemas no Senai Suíço
          Brasileiro.
        </p>
        <div></div>
      </div>
      <Image src="/" alt="" />
    </section>
  );
}
