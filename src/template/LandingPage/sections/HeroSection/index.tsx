import { useThemeImage } from "@/hooks/useThemeImage";
import Image from "next/image";
import { socialMediaButtons } from "./data";
import CardSocialMedia from "@/components/CardSocialMedia";

export default function HeroSection() {
  const illustrationSrc = useThemeImage({
    lightImage: "illustrations/illustration-first-section-black.webp",
    darkImage: "illustrations/illustration-first-section-light.webp",
  });

  return (
    <section className="flex flex-col-reverse md:flex-row items-center h-auto justify-between mt-20 gap-10 py-[60px] px-4 md:px-20">
      <div className="flex flex-col  max-w-[600px]">
        <h1 className="text-5xl">
          Olá, eu sou <span className="font-extrabold">Pedro Sales</span> <br />
          <span className="font-extrabold">Fullstack</span>{" "}
          <span className="text-outlined font-extrabold">Developer</span> <br />
          Moro no <span className="font-extrabold">Brasil.</span>
        </h1>
        <p className="mt-8">
          Eu me chamo Pedro Sales, tenho 17 anos, Front-End Developer e moro no
          Brasil. Tenho conhecimentos em back-end (Node.Js) e atualmente estou
          cursando Técnico em Desenvolvimento de Sistemas no Senai Suíço
          Brasileiro.
        </p>

        <div className="flex items-center gap-4 mt-16">
          {socialMediaButtons.map((button, key) => (
            <CardSocialMedia {...button} key={key} />
          ))}
        </div>
      </div>

      <Image
        src={`${illustrationSrc}`}
        alt="Apenas uma simples ilustração de um boneco mexendo no computador"
        width={500}
        height={500}
        quality={100}
        className="block md:hidden lg:block"
      />
    </section>
  );
}
