import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface themeImageProps {
  lightImage: string;
  darkImage: string;
}

export function useThemeImage({ darkImage, lightImage }: themeImageProps) {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  const imageSrc = mounted
    ? `/${theme === "light" ? darkImage : lightImage}`
    : lightImage;

    return imageSrc
}
