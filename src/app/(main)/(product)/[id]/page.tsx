import Image from "next/image";
import React from "react";
import ImageSelect from "./image-select";
import { cn, formatToCurrency } from "@/lib/utils";
import ActionBtns from "./action-btns";

type Props = {
  params: {
    id: string;
  };
};

const productDetails = {
  id: 105,
  name: "Yoga Mat",
  category: "Health & Wellness",
  price: 24.99,
  salePrice: 19.99,
  discountPercentage: 20.01, // Pre-calculated
  rating: 4.9,
  reviewsCount: 430,
  description:
    "Experience ultimate comfort and grip during your yoga sessions with our premium Yoga Mat. Designed for both beginners and professionals, it features a non-slip surface, eco-friendly material, and an ideal thickness for joint support.",
  features: [
    "Non-slip surface for better grip",
    "Eco-friendly and biodegradable material",
    "Lightweight and easy to carry",
    "Durable and easy to clean",
    "Available in multiple colors",
  ],
  images: [
    "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2820850/pexels-photo-2820850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2294351/pexels-photo-2294351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2820850/pexels-photo-2820850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2294351/pexels-photo-2294351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ],
  specifications: {
    material: "TPE (Thermoplastic Elastomer)",
    dimensions: "72 x 24 inches",
    thickness: "6mm",
    weight: "2.5 lbs",
  },
  colorOptions: ["Blue", "Purple", "Green", "Pink"],
  availableStock: 120,
  shippingInfo: {
    freeShipping: true,
    estimatedDelivery: "3-5 business days",
    returnPolicy: "30-day hassle-free returns",
  },
  reviews: [
    {
      username: "fitnessGuru",
      rating: 5,
      comment: "Absolutely love this mat! Great grip and very comfortable.",
      date: "2024-11-10",
    },
    {
      username: "yogaEnthusiast",
      rating: 4,
      comment: "Good mat, but it could be a bit thicker for my liking.",
      date: "2024-11-08",
    },
    {
      username: "wellnessSeeker",
      rating: 5,
      comment: "Eco-friendly and lightweight, perfect for daily use!",
      date: "2024-11-05",
    },
  ],
};

export default async function page({ params }: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-5 p-3 py-5">
      <ImageSelect  images={productDetails.images} />
      <div className="info-section col-span-2 md:col-span-3">
        <h2 className="text-2xl text-neutral-800 font-semibold">
          {productDetails.name}
        </h2>
        <p className="text-neutral-700 text-sm">{productDetails.description}</p>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <p className="text-sm">{productDetails.rating}</p>
            <span className="text-yellow-500">
              {"★".repeat(Math.floor(productDetails.rating))}
            </span>
          </div>
          <p className="text-xs text-neutral-700">
            ({productDetails.reviewsCount})
          </p>
        </div>
        <hr className="my-2" />
        <div>
          {productDetails?.salePrice && (
            <p className="text-lg md:text-xl font-medium">
              {formatToCurrency(productDetails?.salePrice)}
              <span className="text-red-800 ml-3 text-sm font-light">
                -{productDetails?.discountPercentage} %
              </span>
            </p>
          )}
          <p
            className={cn(
              "text-lg md:text-xl font-medium",
              productDetails?.salePrice &&
                "text-neutral-800/60 line-through text-sm md:text-lg font-normal"
            )}
          >
            {formatToCurrency(productDetails.price)}
          </p>
        </div>
        <hr className="my-2" />
        <div className="flex items-center *:border-r-2 last:border-r-0 *:px-2 flex-row overflow-x-auto">
          <p className="font-light">
            Esitimated delivery:{" "}
            <span className="text-sm font-semibold">
              {productDetails.shippingInfo.estimatedDelivery}
            </span>
          </p>
          <p
            className={cn(
              "text-sm font-semibold",
              productDetails.shippingInfo.freeShipping ? "block" : "hidden"
            )}
          >
            Free delivery
          </p>
          <p className="font-light border-none">
            <span className="text-sm font-semibold">
              {productDetails.shippingInfo.returnPolicy}
            </span>
          </p>
        </div>
        <hr className="my-2" />
        <div className="flex flex-col">
          {Object.entries(productDetails.specifications).map((spec, index) => (
            <p key={index} className="capitalize text-sm font-semibold">
              {spec[0]}: <span className="text-sm font-normal">{spec[1]}</span>
            </p>
          ))}
        </div>
        <hr className="my-2" />
        <ActionBtns className="" />
      </div>
    </div>
  );
}
