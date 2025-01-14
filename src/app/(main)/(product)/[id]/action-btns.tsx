import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
};

export default function ActionBtns({ className }: Props) {
  return (
    <div
      className={cn(
        "flex max-sm:flex-col items-center flex-row gap-2",
        className
      )}
    >
      <button className="p-2 px-3 hover:shadow-md transition-[shadow,color] rounded-md text-sm font-light border border-primary hover:bg-primary hover:text-primary-foreground">
        Add to cart
      </button>
      <button className="p-2 px-3 hover:shadow-md transition-shadow rounded-md text-sm font-light bg-primary text-primary-foreground">
        Buy now
      </button>
    </div>
  );
}
