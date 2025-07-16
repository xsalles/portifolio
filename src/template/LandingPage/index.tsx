import CardSkill from "@/components/CardSkill";
import HeroSection from "./sections/HeroSection";
import { IoLogoJavascript } from "react-icons/io5";


export default function LandingPage() {
  return (
    <main className=" h-full">
        <HeroSection />
        <CardSkill imageSrc={<IoLogoJavascript size={56}/>} nameSkil="Javascript"/>
    </main>
  )
}
