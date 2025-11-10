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
    <div className="flex items-center justify-between xl:justify-center 2xl:gap-120   h-20 p-2 px-6 border-b border-zinc-200">
      <Link href="/" className="flex items-center hover:rotate-360 transition-[500px]">
        <Image src="/N.png" alt="Logo" width={90} height={30} />
      </Link>
      <div className="flex xl:gap-80">
        <NavigationMenu >
          <NavigationMenuList className="hidden md:flex items-center gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink asChild className="text-zinc-800 font-bold">
                <a href="/contact">Project</a>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className="text-zinc-800 font-bold w-35 ">
                <a href="/contact">About & Contact</a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center xl:gap-10">
          <a
            href="mailto:Saneeshn6@gmail.com"
            className="hidden xl:block text-md font-medium text-zinc-800 hover:underline"
          >
            <span className="text-zinc-600">Email : </span> Saneeshn6@gmail.com
          </a>
          <button
            className="bg-zinc-700 p-3 w-45 rounded-full text-zinc-50 "
          >
            contact me
          </button>
        </div>
      </div>

    </div>
  );
}
