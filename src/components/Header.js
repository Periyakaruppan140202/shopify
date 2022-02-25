import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/images/shopzone-logo-nobg.png";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";

import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import { selectItems, selectLength } from "../slices/cartSlice";
const Header = ({ search, setSearch }) => {
  const length = useSelector(selectLength);
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  let [searchkey, setSearchKey] = useState("");
  const handleChange = (e) => {
    setSearchKey(e.target.value);
  };
  const searchItem = () => {
    setSearch(searchkey);
  };
  if (typeof window === "object") {
    const input = document.getElementById("search");
    input.addEventListener("keyup", (event) => {
      if (event.key == "Enter") {
        event.preventDefault();
        searchItem();
      }
    });
  }
  return (
    <header>
      {/* Top Nav */}
      <div className="flex items-center bg-shopzone_blue flex-grow p-1">
        <div className="mt-2 flex-grow item-center flex sm:flex-grow-0">
          <Image
            src={logo}
            width={50}
            height={50}
            objectFit="contain"
            className="cursor-pointer"
            onClick={() => {
              setSearchKey("");
              setSearch ? setSearch("") : "";
              router.push("/");
            }}
          ></Image>
          <div
            className="hidden sm:flex flex-grow item-center p-2 pr-5 font-bold text-light_green cursor-pointer hover:text-normal_green"
            onClick={() => {
              setSearchKey("");
              setSearch ? setSearch("") : "";
              router.push("/");
            }}
          >
            <h1>Shopify</h1>
          </div>
        </div>
        {/* Search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-light_green hover:bg-normal_green">
          <input
            id="search"
            value={searchkey}
            type="text"
            placeholder="Search Products..."
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            onChange={handleChange}
          />
          <SearchIcon
            className="h-12 p-4"
            onClick={() => {
              searchItem();
            }}
          />
        </div>
        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick={!session ? signIn : signOut} className="link w-28">
            <p className="truncate">
              {session ? `Hello, ${session.user.name}` : "Sign In"}
            </p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm"> & Orders</p>
          </div>
          <div
            onClick={() => {
              router.push("/checkout");
            }}
            className="relative link flex items-center"
          >
            <span className="absolute top-0 right-0 md:right-7 h-4 w-4 text-center rounded-full text-black font-bold bg-light_green">
              {length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="font-extrabold md:text-sm hidden mt-2 md:inline">
              Cart
            </p>
          </div>
        </div>
      </div>
      {/* Bottom Nav */}
      {/* <div className="flex items-center space-x-3 p-2 pl-6 bg-shopzone_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
      </div> */}
    </header>
  );
};

export default Header;
