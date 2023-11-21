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
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup>
          <DropdownMenuRadioItem value="">
            <a href="" className="hover:text-violet-500">
              Get Started
            </a>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="">
            <a href="" className="hover:text-violet-500">
              Documentation
            </a>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="">
            <a href="" className="hover:text-violet-500">
              GitHub
            </a>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="">
            <a href="" className="hover:text-violet-500">
              Blog
            </a>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="">
            <a href="" className="hover:text-violet-500">
              Community
            </a>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
