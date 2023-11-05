"use client";

import { useScrollTop } from "@/hook/user-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  // TODO create function for get isAuthenticated from backend
  const { isAuthenticated, isLoading } = { isAuthenticated: false, isLoading: false };

  const scrolled = useScrollTop();

  return (
    <div className={cn(
      "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
      scrolled && "border-b show-sm"
    )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && (
          <p>Loading...</p>
        )}
        {!isAuthenticated && !isLoading && (
          <>
            {/* adding compoing for SignIn component */}
            <Button variant={"ghost"} size={"sm"}>login</Button>
            {/* closing component for SignIn component */}
            {/* adding compoing for SignIn component */}
            <Button variant={"ghost"} size={"sm"}>Get Notion Clone Free</Button>
            {/* closing component for SignIn component */}
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  )
};