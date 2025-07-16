import Image from "next/image";
import { ReactNode } from "react";

interface CardSkillProps {
  imageSrc: ReactNode;
  nameSkill: string;
}

export default function CardSkill({imageSrc, nameSkill}: CardSkillProps) {
  return (
    <article className="flex w-40 h-40 md:w-46 md:h-46 flex-col items-center justify-center p-6 gap-8 bg-background hover:bg-foreground text-foreground hover:text-background transition-colors duration-300 ease-in-out border-2 border-foreground rounded-sm">
      {imageSrc}
      <h5 className="text-center text-heading-h5 font-bold">{nameSkill}</h5>
    </article>
  );
}
