import { ShoppingCart } from "lucide-react";
import React from "react";
import Categories from "./categories";
import Link from "next/link";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="flex flex-col gap-2 bg-primary text-secondary  px-4 py-2">
      <div className="flex flex-row justify-between gap-4 items-center">
        <h1 className="text-base md:text-lg font-sans font-semibold">
          LocalFetch
        </h1>
        <div className="w-3/5 justify-center hidden md:flex">
          <input
            placeholder="Search items"
            className="w-full mx-auto border px-2 py-1 rounded-sm focus:ring-1 focus-within:outline-none ring-indigo-500/40 text-black"
          />
        </div>
        <div className="flex items-center gap-0 shrink-0 md:gap-2">
          <button className="border px-1 md:px-2 py-1 rounded-sm text-xs md:text-sm font-semibold">
            Sign In
          </button>
          <button className="p-2 rounded-sm">
            <ShoppingCart className="max-md:size-4" />
          </button>
        </div>
      </div>
      <div className="w-full justify-center flex md:hidden">
        <input
          placeholder="Seaech items"
          className="w-full mx-auto border px-2 py-1 rounded-sm focus:ring-1 text-sm focus-within:outline-none ring-indigo-500/40 text-black"
        />
      </div>
      <hr />
      <Categories className="max-md:hidden" />
      <Link className="text-sm text-right md:hidden" href={"/"}>
        Shop by category
      </Link>
    </nav>
  );
}
