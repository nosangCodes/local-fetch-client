"use client";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import React, { useState, useTransition } from "react";

type Props = {
  images: string[];
};

export default function ImageSelect({ images }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPending, startTransition] = useTransition();
  return (
    <div className="flex items-center gap-4 col-span-2">
      <div className="image-selection w-fit flex flex-col gap-y-2">
        {images.map((img, index) => (
          <Image
            onClick={() => {
              startTransition(() => {
                setSelectedIndex(index);
              });
            }}
            className={cn(
              "border max-h-[80px] rounded-sm hover:shadow-md cursor-pointer shadow-sm transition-shadow object-cover ",
              selectedIndex === index && "border-neutral-700/60 border-[2px]"
            )}
            alt="product image"
            height={80}
            width={60}
            src={img}
            key={index}
          />
        ))}
      </div>
      <div className="relative flex justify-center items-center h-[30rem] w-full">
        {isPending ? (
          <Loader2 className="animate-spin mx-auto" />
        ) : (
          <Image
            priority={true}
            className="object-cover rounded-md"
            src={images[selectedIndex]}
            fill
            alt=" product image"
            sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 40vw"
          />
        )}
      </div>
    </div>
  );
}
