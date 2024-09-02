import { Menu } from "lucide-react";
import React from "react";
import { SideBar } from "@/components/sidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const MobileSideBar = () => {
  return (
    <Sheet >
      <SheetTrigger>
        <Menu className="text-black" />
      </SheetTrigger>
      <SheetContent className="p-0 z-[100]" side="left">
        <SideBar className="bg-transparent" />
      </SheetContent>
    </Sheet>
  );
};
