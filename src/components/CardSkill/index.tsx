import Image from "next/image";
import { ReactNode } from "react";

interface CardSkillProps {
  imageSrc: ReactNode;
  nameSkil: string;
}

export default function CardSkill({imageSrc, nameSkil}: CardSkillProps) {
  return (
    <article className="flex w-46 h-46 flex-col items-center justify-center p-6 gap-8 bg-background hover:bg-foreground text-foreground hover:text-background transition-colors duration-300 ease-in-out border-2 border-foreground rounded-sm">
      {imageSrc}
      <h5 className="text-heading-h5 font-bold">{nameSkil}</h5>
    </article>
  );
}
