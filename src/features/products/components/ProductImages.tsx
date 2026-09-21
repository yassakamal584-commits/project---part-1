"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils/cn";
import type { Product } from "@/features/products/types/product.types";

type ProductImagesProps = {
  product: Product;
};

/** US-04: product image gallery. */
export function ProductImages({ product }: ProductImagesProps) {
  const images = product.images.length > 0 ? product.images.slice(0, 3) : [];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  if (!activeImage) {
    return (
      <div className="flex h-[420px] items-center justify-center rounded-lg bg-[#ebe6de] text-[#605a54] lg:h-[560px]">
        No product images yet
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-[#ebe6de] sm:aspect-square lg:aspect-[4/5]">
        <Image
          src={activeImage}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 42vw, 100vw"
          priority
        />
      </div>
      {images.length > 1 ? (
        <div className="grid grid-cols-3 gap-3">
          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              aria-label={`Show image ${index + 1}`}
              aria-pressed={index === activeIndex}
              className={cn(
                "relative aspect-[4/3] overflow-hidden rounded-md",
                index === activeIndex
                  ? "ring-1 ring-[#1a1a1a] ring-offset-2 ring-offset-[#faf8f5]"
                  : "ring-1 ring-transparent",
              )}
              onClick={() => setActiveIndex(index)}
            >
              <Image
                src={image}
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 13vw, 30vw"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
