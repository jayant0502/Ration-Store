import React from "react";
import Image from "next/image";
import { LayoutGrid, Search, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <div className="p-2 shadow-sm flex justify-between">
      <div className="flex items-center gap-8">
        <Image
          src="/logo.png"
          alt="logo"
          width={220}
          height={220}
          quality={100}
        />

        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
           
            <h1 className="md:flex hidden gap-2 items-center  p-2 px-8 border rounded-full bg-slate-200 h-10">
              <LayoutGrid className="h-5 w-5" /> Categories
            </h1>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-52">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="md:flex border rounded-full p-2 gap-3 mx-12 px-5 hidden">
          <Search />
          <input
            type="text"
            placeholder="Search here"
            className="outline-none"
          ></input>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <h2 className="flex p-2 items-center">
          
          <ShoppingBag />0
        </h2>
        <Button>Login In</Button>
      </div>
    </div>
  );
};

export default Header;
