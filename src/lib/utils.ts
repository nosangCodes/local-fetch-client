import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatToCurrency(price: number) {
  // Check if the conversion was successful
  if (isNaN(price)) {
    return 0;
  }

  // Format the number as currency
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(price);
}
