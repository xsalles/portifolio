import CardSkill from "@/components/CardSkill";
import HeroSection from "./sections/HeroSection";
import { IoLogoJavascript } from "react-icons/io5";
import SkillsSection from "./sections/SkillsSection";

export default function LandingPage() {
  return (
    <main className=" h-full flex flex-col gap-15">
      <HeroSection />
      <SkillsSection />
    </main>
  );
}
