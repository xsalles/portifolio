import Link from "next/link";

interface CardSocialMediaProps {
  href: string;
  children: React.ReactNode;
}

export default function CardSocialMedia({
  href,
  children,
}: CardSocialMediaProps) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center w-14 h-14 rounded-sm bg-background hover:bg-foreground text-foreground hover:text-background transition-colors duration-300 ease-in-out border border-foreground"
    >
      {children}
    </Link>
  );
}
