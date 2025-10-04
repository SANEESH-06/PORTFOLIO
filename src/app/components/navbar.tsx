"use client";

import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
export default function Nav() {
  return (
    <div className="flex items-center justify-between h-20 p-2 px-6 border-b border-zinc-200">
      <Link href="/" className="flex items-center">
        <Image src="/N.png" alt="Logo" width={90} height={30} />
      </Link>

      <NavigationMenu>
        <NavigationMenuList className="hidden md:flex items-center gap-6">
          <NavigationMenuItem>
            <NavigationMenuLink asChild className="text-zinc-800 ">
              <a href="/contact">Project</a>
            </NavigationMenuLink>
          </NavigationMenuItem>  

          <NavigationMenuItem>
            <NavigationMenuLink asChild className="text-zinc-800 ">
              <a href="/contact">About & Contact</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <a
        href="mailto:Saneeshn6@gmail.com"
        className="hidden text-sm font-medium text-zinc-800 hover:underline"
      >
        Email: Saneeshn6@gmail.com
      </a>
    </div>
  );
}
