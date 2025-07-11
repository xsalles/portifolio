"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="default" >
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-foreground text-background ">
          <DropdownMenuItem className="hover:bg-background transition-colors duration-300 ease-in-out" onClick={() => setTheme("light")}>
            Modo claro
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-background transition-colors duration-300 ease-in-out" onClick={() => setTheme("dark")}>
            Modo escuro
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
  );
}
