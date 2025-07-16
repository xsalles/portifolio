import { Github, Linkedin } from "lucide-react";

interface socialMediaButtonsProps {
    href: string;
    children: React.ReactNode;
}

export const socialMediaButtons: socialMediaButtonsProps[] = [
    {
        href: "https://github.com/xsalles",
        children: <Github width={20} height={20} />,
    },
    {
        href: "https://www.linkedin.com/in/pedro-sales/",
        children: <Linkedin width={20} height={20} />,
    }
]