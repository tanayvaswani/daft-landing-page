"use client";
{
}

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

export function MenuContent() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <Menu className="block md:hidden" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-[#0F1116] border-violet-500">
        <DropdownMenuRadioGroup>
          <DropdownMenuRadioItem value="">
            <a href="" className="text-violet-500 hover:text-violet-200">
              Get Started
            </a>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="">
            <a href="" className="text-violet-500 hover:text-violet-200">
              Documentation
            </a>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="">
            <a href="" className="text-violet-500 hover:text-violet-200">
              GitHub
            </a>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="">
            <a href="" className="text-violet-500 hover:text-violet-200">
              Blog
            </a>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="">
            <a href="" className="text-violet-500 hover:text-violet-200">
              Community
            </a>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
