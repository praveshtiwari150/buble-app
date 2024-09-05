"use client"

import React from 'react';
import { TiThMenu } from "react-icons/ti";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { sidebarLinks } from "@/constants";


const MobileNav = () => {
    const pathName = usePathname();
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <TiThMenu className="text-3xl text-blue-500  cursor-pointer sm:hidden" />
        </SheetTrigger>
        <SheetContent side={"left"} className="border-4 bg-smoke-100 min-w-[335px]">
          <Link href={"/"} className="flex justify-start items-center gap-2">
            <Image
              src={"/bubble-logo.svg"}
              width={48}
              height={48}
              alt="Brand Logo"
            />
            <div className="text-2xl font-bold text-smoke-950">Bubble</div>
          </Link>
          <div className=" flex flex-1 flex-col justify-between pt-16 gap-6">
            {sidebarLinks.map((item) => {
                const isActive = pathName === item.url || pathName.startsWith(`${item.url}/`);
              return (
                <SheetClose key={item.label} asChild>
                  <Link
                    href={item.url}
                    className={`${
                      isActive && "bg-white rounded-lg"
                    } w-full max-w-60 flex gap-4 items-center p-3 justify-start`}
                  >
                    <Image src={item.icon} alt="" width={24} height={24} />
                    <div className={"text-blue-500 text-lg font-semibold"}>
                      {item.label}
                    </div>
                  </Link>
                </SheetClose>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNav
