import Image from "next/image";

interface CardSkillProps {
  imageSrc: string;
  nameSkil: string;
}

export default function CardSkill({imageSrc, nameSkil}: CardSkillProps) {
  return (
    <article className="flex w-46 h-46 flex-col items-center justify-center p-6 gap-8 bg-background hover:bg-foreground text-foreground hover:text-background transition-colors duration-300 ease-in-out border-2 border-foreground rounded-sm">
      <Image src={imageSrc} alt={`Ícone da habilidade ${nameSkil}`} width={56} height={56}/>
      <h5 className="text-heading-h5 font-bold">{nameSkil}</h5>
    </article>
  );
}
