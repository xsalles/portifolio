import GridCardSkills from "@/components/GridCardSkills";

export default function SkillsSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center md:px-0">
      <div className="flex flex-col gap-4 items-center">
        <h3 className="text-heading-h2 md:text-5xl">
          Minhas <span className="font-extrabold ">Habilidades</span>
        </h3>
        <p className="hidden md:block md:text-body-md">
          Essas são algumas das minhas habilidades e tecnologias que domino.
        </p>
      </div>

      <GridCardSkills />
      
    </section>
  );
}
