import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Logo from "@/components/ui/logo";
import Search from "./Search";

function NavBar() {
  return (
    <nav className="flex shadow-md items-center h-12">
      <div className="p-3">
        <Link href="/" style={{ width: "89px" }}>
          <Logo />
        </Link>
      </div>
      <div className="flex flex-grow items-center justify-end">
        <Search />
        <div>
          <Avatar className="">
            <AvatarFallback>WM</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
