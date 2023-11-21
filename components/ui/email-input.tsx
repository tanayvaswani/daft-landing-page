"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function EmailInput() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-1 mt-8">
      <Input type="email" placeholder="Email" className="bg-[#0F1116] border-[1px] border-violet-500" />
      <Button type="submit" className="bg-violet-700 text-white hover:bg-violet-600">Subscribe</Button>
    </div>
  );
}
