"use client";
import React, { useEffect, useRef, useState } from "react";
import ProductCard from "./product-card";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  className?: string;
};

const trendingProducts: Array<Product> = [
  {
    id: 101,
    name: "Organic Avocados",
    category: "Groceries",
    price: 3.99,
    imageUrl:
      "https://images.pexels.com/photos/4465828/pexels-photo-4465828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.8,
    reviews: 254,
  },
  {
    id: 102,
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 29.99,
    imageUrl:
      "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.5,
    reviews: 876,
  },
  {
    id: 103,
    name: "Eco-Friendly Laundry Detergent",
    category: "Home Essentials",
    price: 12.49,
    imageUrl:
      "https://images.pexels.com/photos/4465828/pexels-photo-4465828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.7,
    reviews: 310,
  },
  {
    id: 104,
    name: "Running Shoes",
    category: "Fashion",
    price: 59.99,
    imageUrl:
      "https://images.pexels.com/photos/4465828/pexels-photo-4465828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.6,
    reviews: 150,
  },
  {
    id: 105,
    name: "Yoga Mat",
    category: "Health & Wellness",
    price: 24.99,
    imageUrl:
      "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.9,
    reviews: 430,
  },
  {
    id: 106,
    name: "Colorful Gel Pens",
    category: "Stationery",
    price: 9.99,
    imageUrl:
      "https://images.pexels.com/photos/4465828/pexels-photo-4465828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.4,
    reviews: 210,
  },
  {
    id: 107,
    name: "Wooden Baby Blocks",
    category: "Toys & Baby Products",
    price: 14.99,
    imageUrl:
      "https://images.pexels.com/photos/4465828/pexels-photo-4465828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.8,
    reviews: 120,
  },
  {
    id: 108,
    name: "Premium Dog Food",
    category: "Pet Supplies",
    price: 39.99,
    imageUrl:
      "https://images.pexels.com/photos/4465828/pexels-photo-4465828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.7,
    reviews: 342,
  },
  {
    id: 109,
    name: "Handmade Ceramic Mug",
    category: "Local Specials",
    price: 18.99,
    imageUrl:
      "https://images.pexels.com/photos/4465828/pexels-photo-4465828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.9,
    reviews: 95,
  },
];

export default function Trending({ className }: Props) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  // Check if at start or end on scroll
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const isAtStart = container.scrollLeft === 0;
      const isAtEnd =
        Math.floor(container.scrollLeft + container.clientWidth) ===
        container.scrollWidth;

      setIsAtStart(isAtStart);
      setIsAtEnd(isAtEnd);
    }
  };

  const handleNextClick = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const sctollWidth = container.offsetWidth - 50;
      if (sctollWidth) {
        container.scrollLeft += sctollWidth;
        checkScrollPosition();
      }
    }
  };

  const handlePrevClick = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const sctollWidth = container.offsetWidth - 50;
      if (sctollWidth) {
        container.scrollLeft -= sctollWidth;
        checkScrollPosition();
      }
    }
  };

  // Attach scroll event listener to check scroll position
  useEffect(() => {
    const handleScroll = () => {
      checkScrollPosition();
    };
    const container = scrollContainerRef.current;
    container?.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={cn("", className)}>
      {!isAtStart && (
        <span
          onClick={handlePrevClick}
          className="absolute bg-primary-foreground top-[45%] md:top-[35%] shadow-md flex justify-center items-center -left-1 z-10 h-[30px] w-[25px] md:h-[55px] md:w-[40px] border border-primary rounded-sm cursor-pointer"
        >
          <ChevronLeft className="max-md:size-5" />
        </span>
      )}
      <div
        className="hide-scroll-bar flex flex-row snap-x snap-mandatory scroll-smooth gap-x-4 overflow-x-auto"
        ref={scrollContainerRef}
      >
        {trendingProducts.map((product) => (
          <ProductCard
            className="scroll-item snap-start"
            key={product.id}
            product={product}
          />
        ))}
      </div>
      {!isAtEnd && (
        <span
          onClick={handleNextClick}
          className="absolute top-[45%] md:top-[35%] bg-primary-foreground shadow-md flex justify-center items-center -right-1 z-10 h-[30px] w-[25px] md:h-[55px] md:w-[40px] border border-primary rounded-sm cursor-pointer"
        >
          <ChevronRight className="max-md:size-5" />
        </span>
      )}
    </div>
  );
}
