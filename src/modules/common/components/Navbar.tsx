"use client";

import { Icons } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { NAVBAR_ITEMS } from "@/mock";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <header className="flex justify-between w-full  z-50 top-0 items-center px-4 md:px-12 py-3  bg-transparent ">
        <Link href="/">
          <Image
            width={140}
            height={39}
            quality={100}
            className="object-contain"
            alt="logo"
            placeholder="blur"
            blurDataURL="logourl"
            src="/assets/logo-white.png"
          />{" "}
        </Link>
        <div className="flex  gap-6  items-center ">
          <div className="xl:flex hidden  gap-14  items-center ">
            {NAVBAR_ITEMS?.map(el => (
              <Link
                key={el}
                href="/"
                className="text-white-100 relative font-satoshi text-lg font-bold"
              >
                {el}
                {el !== "Creon Pass" && (
                  <span className="text-purple-100 rounded-lg bg-black-100 px-1 absolute uppercase -top-2 -right-10 font-satoshi text-[10px] font-bold ">
                    Soon
                  </span>
                )}
              </Link>
            ))}
          </div>
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "outline" }), "block")}
          >
            Connect
          </Link>

          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base flex flex-end hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 xl:hidden"
            >
              <Icons.Menu className="h-6 w-6 text-white-100" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
        </div>
      </header>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 lg:hidden" />
      )}

      <SheetContent
        side="right"
        className="pl-1 pr-0 bg-black-100 flex flex-col justify-between  w-1/2"
      >
        <ScrollArea className="my-4   pb-10 pl-6">
          <div>
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                Connect
              </Link>
              <SheetClose>
                <div>
                  <Icons.Close size={40} className="text-white-100 pr-3" />
                </div>
              </SheetClose>
            </div>
            <ul className="pl-1 flex flex-col space-y-6 justify-start mt-10 pr-7">
              {NAVBAR_ITEMS?.map(el => (
                <li key={el}>
                  <Link
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    href="/"
                    className="text-white-100 border-b relative pb-4 border-gray-100 font-satoshi text-lg font-bold"
                  >
                    {el}
                    {el !== "Creon Pass" && (
                      <span className="text-purple-100 absolute uppercase -top-2 -right-8 font-satoshi text-[10px] font-bold ">
                        Soon
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </ScrollArea>
        <div className="flex items-center px-6 gap-3">
          <Button variant="ghost" className="px-0">
            {" "}
            <Icons.Telegram />{" "}
          </Button>

          <Button variant="ghost" className="px-0">
            {" "}
            <Icons.Discord />{" "}
          </Button>
          <Button variant="ghost" className="px-0">
            {" "}
            <Icons.Twitter />{" "}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
