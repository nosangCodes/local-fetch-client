import { cn, formatToCurrency } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { forwardRef, Ref } from "react";

interface Props {
  product: Product;
  className?: string;
}

const ProductCard = forwardRef<HTMLDivElement, Props>(
  ({ product, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col shrink-0 w-[230px] rounded overflow-hidden shadow-lg border border-gray-200",
          className
        )}
      >
        <Link className="hover:cursor-pointer" href={`/${product.id}`}>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={200}
            height={100}
            className="w-fit mx-auto h-[8rem] object-contain"
            priority={true}
          />
        </Link>
        <div className="pt-4 pb-1 px-2 flex flex-col gap-0">
          <Link className="hover:cursor-pointer" href={`/${product.id}`}>
            <h2 className="font-bold text-sm">{product.name}</h2>
          </Link>
          <p className="text-gray-700 text-sm">{product.category}</p>

          <div className="flex items-center gap-2">
            {product.salePrice && (
              <p className="text-green-600 text-sm font-semibold">
                {formatToCurrency(product.salePrice)}
              </p>
            )}
            <p
              className={cn(
                "text-green-600 text-sm font-semibold",
                product.salePrice &&
                  "line-through text-neutral-700/60 font-medium"
              )}
            >
              {formatToCurrency(product.price)}
            </p>
            {product.discountPercentage && (
              <p className="text-xs text-neutral-700/90">
                ({product.discountPercentage}% off)
              </p>
            )}
          </div>
          <div>
            <span className="text-yellow-500">
              {"★".repeat(Math.floor(product.rating))}
            </span>
            <span className="text-xs text-gray-600">
              ({product.reviews} reviews)
            </span>
          </div>
        </div>
        <div className="pr-1 pb-2 mt-auto ml-auto">
          <button
            title="Add to cart"
            className="bg-primary text-xs ml-auto hover:bg-primary/90 text-white font-bold py-2 px-3 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
);

export default ProductCard;
