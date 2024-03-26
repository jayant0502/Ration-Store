"use client";
import React, { useEffect, useState } from "react";
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
import GlobalApi from "../_utils/GlobalApi";

const Header = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCategoryData = async () => {
    try {
      const response = await GlobalApi.getCategory();
      setCategoryList(response.data.data);
     
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-2 shadow-sm flex justify-between">
      <div className="flex items-center gap-8">
        <Image
          src="/logo.png"
          alt="logo"
          width={220}
          height={220}
          quality={50}
          priority="true"
        />

        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none " asChild>
            <h1 className="md:flex hidden gap-2 items-center  p-2 px-8 border rounded-full bg-slate-200 h-10 cursor-pointer">
              <LayoutGrid className="h-5 w-5" /> Categories
            </h1>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-52 md:flex hidden flex-col">
            <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {categoryList.map((category, index) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <DropdownMenuItem className="flex gap-3 items-center cursor-pointer">
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_BACKEND_BASEURL +
                      category?.attributes?.icon?.data[0]?.attributes?.url
                    }
                    alt="icon"
                    width={30}
                    height={30}
                  />
                  <h2 className="text-lg">{category?.attributes?.name}</h2>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="md:flex border rounded-full p-2 gap-3  px-5 hidden">
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
