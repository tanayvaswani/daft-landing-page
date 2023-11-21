"use client";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MenuContent } from "./menu-content";

const font = Poppins({
  weight: "600",
  subsets: ["latin"],
});

const navElements = [
  "Get Started",
  "Documentation",
  "GitHub",
  "Blog",
  "Community",
];

const Navbar = () => {
  return (
    <div className="fixed w-full z-50 py-2 md:py-4 px-4 flex items-center justify-between border-b border-violet-200 backdrop-blur-sm shadow-sm shadow-violet-300">
      <div className="flex items-center justify-between">
        <Link href="/">
          <h1
            className={cn(
              "hover:text-violet-800 text-xl md:text-3xl font-bold text-primary",
              font.className
            )}
          >
            daft
          </h1>
        </Link>
      </div>
      <div className="hidden md:flex  items-center gap-x-3">
        {navElements.map((elm, idx) => {
          return (
            <h1 key={idx}>
              <Button
                variant="link"
                className="hover:text-violet-500 hover:font-bold"
              >
                {elm}
              </Button>
            </h1>
          );
        })}
      </div>
      <div className="block md:hidden">
        <MenuContent />
      </div>
    </div>
  );
};

export default Navbar;
