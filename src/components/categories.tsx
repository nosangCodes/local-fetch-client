import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
};

const categories = [
  { id: 0, name: "All" },
  { id: 1, name: "Groceries" },
  { id: 2, name: "Home Essentials" },
  { id: 3, name: "Electronics" },
  { id: 4, name: "Fashion" },
  { id: 5, name: "Health & Wellness" },
  { id: 6, name: "Stationery" },
  { id: 7, name: "Toys & Baby Products" },
  { id: 8, name: "Pet Supplies" },
  { id: 9, name: "Local Specials" },
];

export default function Categories({ className }: Props) {
  return (
    <ul className={cn("flex flex-row gap-x-3 pb-2 items-center overflow-x-auto", className)}>
      {categories.map((category) => (
        <li
          key={category.id}
          className="cursor-pointer text-sm shrink-0 hover:text-white/70"
        >
          {category.name}
        </li>
      ))}
    </ul>
  );
}
