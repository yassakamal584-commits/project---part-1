"use client";

import { useCart } from "@/features/cart/hooks/useCart";
import type { AddToCartInput } from "@/features/cart/types/cart.types";

type AddToCartButtonProps = AddToCartInput & {
  children?: React.ReactNode;
};

export function AddToCartButton({
  children = "Add to cart",
  ...props
}: AddToCartButtonProps) {
  const { addItem } = useCart();

  return (
    <button
      type="button"
      className="flex h-12 min-w-0 flex-1 items-center justify-center rounded bg-[#1a1a1a] px-4 text-[11px] font-semibold tracking-[0.08em] uppercase whitespace-nowrap text-white"
      onClick={() => addItem(props)}
    >
      {children}
    </button>
  );
}
