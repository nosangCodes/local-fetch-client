import { cn } from "@/lib/utils";
import React from "react";
import ProductCard from "./product-card";

type Props = {
  className?: string;
};

const saleProducts: Array<Product> = [
  {
    id: 101,
    name: "Organic Avocados",
    category: "Groceries",
    price: 3.99,
    salePrice: 2.99,
    discountPercentage: 25.06, // Pre-calculated
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
    salePrice: 24.99,
    discountPercentage: 16.67, // Pre-calculated
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
    salePrice: 10.99,
    discountPercentage: 12.01, // Pre-calculated
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
    salePrice: 49.99,
    discountPercentage: 16.67, // Pre-calculated
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
    salePrice: 19.99,
    discountPercentage: 20.01, // Pre-calculated
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
    salePrice: 7.99,
    discountPercentage: 20.02, // Pre-calculated
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
    salePrice: 12.99,
    discountPercentage: 13.34, // Pre-calculated
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
    salePrice: 34.99,
    discountPercentage: 12.5, // Pre-calculated
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
    salePrice: 15.99,
    discountPercentage: 15.8, // Pre-calculated
    imageUrl:
      "https://images.pexels.com/photos/4465828/pexels-photo-4465828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.9,
    reviews: 95,
  },
];

export default function TodaysDeals({ className }: Props) {
  return (
    <div className={cn("grid gap-4 max-md:mx-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5", className)}>
      {saleProducts.map((saleProduct) => (
        <ProductCard className="w-full" product={saleProduct} key={saleProduct.id} />
      ))}
    </div>
  );
}
