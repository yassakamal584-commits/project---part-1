import type { Product } from "@/features/products/types/product.types";
import {
  formatMetaLabel,
  formatWholePrice,
} from "@/features/products/utils/product.utils";

type ProductDetailsProps = {
  product: Product;
  unitPrice: number;
};

/** US-04: product information. */
export function ProductDetails({ product, unitPrice }: ProductDetailsProps) {
  return (
    <div className="flex flex-col gap-4">
      <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-semibold tracking-[0.08em] uppercase text-[#605a54]">
        <span>
          Scent family{" "}
          <span className="text-[#1a1a1a]">
            {formatMetaLabel(product.scentFamily)}
          </span>
        </span>
        <span className="hidden h-3 w-px bg-[#ebe6de] sm:inline-block" />
        <span>
          Occasion{" "}
          <span className="text-[#1a1a1a]">
            {formatMetaLabel(product.occasion)}
          </span>
        </span>
      </p>
      <div className="flex flex-col gap-3">
        <h1 className="font-[family-name:var(--font-instrument-serif)] text-[36px] leading-tight text-[#1a1a1a] sm:text-[40px]">
          {product.name}
        </h1>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-[22px] font-semibold text-[#1a1a1a]">
            {formatWholePrice(unitPrice)}
          </p>
          {product.availableInAtelier ? (
            <p className="flex items-center gap-2 text-[12px] font-medium text-[#2f6b4f]">
              <span className="size-1.5 rounded-full bg-[#2f6b4f]" />
              Available in Atelier
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
