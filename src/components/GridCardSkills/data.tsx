import { DiPostgresql } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { FaDocker } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import {
  RiNextjsFill,
  RiReactjsFill,
  RiTailwindCssFill,
  RiTailwindCssLine,
} from "react-icons/ri";
import {
  SiJest,
  SiNestjs,
  SiRedux,
  SiStyledcomponents,
  SiTypescript,
  SiZod,
} from "react-icons/si";

interface SkillsCardProps {
  imageSrc: React.ReactNode;
  nameSkill: string;
}

export const skillsCard: SkillsCardProps[] = [
  {
    imageSrc: <IoLogoJavascript size={56} />,
    nameSkill: "Javascript",
  },
  {
    imageSrc: <SiTypescript size={56} />,
    nameSkill: "Typescript",
  },
  {
    imageSrc: <RiReactjsFill size={56} />,
    nameSkill: "React.js",
  },
  {
    imageSrc: <SiStyledcomponents size={56} />,
    nameSkill: "Styled Components",
  },
  {
    imageSrc: <RiTailwindCssLine size={56} />,
    nameSkill: "Tailwind CSS",
  },
  {
    imageSrc: <RiNextjsFill size={56} />,
    nameSkill: "Next.js",
  },
  {
    imageSrc: <SiRedux size={56} />,
    nameSkill: "Redux",
  },
  {
    imageSrc: <SiZod size={56} />,
    nameSkill: "Zod",
  },
  {
    imageSrc: <SiJest size={56} width={56} height={56} />,
    nameSkill: "Jest",
  },
  {
    imageSrc: <FaNodeJs size={56} />,
    nameSkill: "Node.js",
  },
  {
    imageSrc: <SiNestjs size={56} />,
    nameSkill: "Nest.js",
  },
  {
    imageSrc: <FaDocker size={56} />,
    nameSkill: "Docker",
  },
  {
    imageSrc: <DiPostgresql size={56} />,
    nameSkill: "PostgreSQL",
  },
];
