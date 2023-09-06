"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search } from "react-feather";

import Logo from "@/components/ui/logo";

function NavBar() {
  return (
    <nav className="flex shadow-md items-center h-12">
      <div className="p-3">
        <Link href="/" style={{ width: "89px" }}>
          <Logo />
        </Link>
      </div>
      <div className="flex flex-grow items-center justify-end">
        <div className="flex items-center justify-center h-12 w-12">
          <Search size={24} strokeWidth={1} />
        </div>
        <div>
          <Avatar className="">
            <AvatarImage src="https://github.com/shadcn." />
            <AvatarFallback className="bg-slate-300 text-xs text-slate-700">
              WM
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
