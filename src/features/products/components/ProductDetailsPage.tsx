"use client";

import { useMemo, useState, type ReactNode } from "react";
import { ProductBreadcrumbs } from "@/features/products/components/ProductBreadcrumbs";
import { ProductDetails } from "@/features/products/components/ProductDetails";
import { ProductGiftWrap } from "@/features/products/components/ProductGiftWrap";
import { ProductImages } from "@/features/products/components/ProductImages";
import { ProductOptions } from "@/features/products/components/ProductOptions";
import { ProductQuantity } from "@/features/products/components/ProductQuantity";
import { ProductScentAnatomy } from "@/features/products/components/ProductScentAnatomy";
import { ProductVolumeSelector } from "@/features/products/components/ProductVolumeSelector";
import { useProduct } from "@/features/products/hooks/useProduct";
import type { Product } from "@/features/products/types/product.types";
import { getProductVolumes } from "@/features/products/utils/product.utils";

export type ProductDetailsActionsContext = {
  product: Product;
  selectedOptions: Record<string, string>;
  quantity: number;
  unitPrice: number;
};

type ProductDetailsPageProps = {
  productId: string;
  actions?: (context: ProductDetailsActionsContext) => ReactNode;
};

export function ProductDetailsPage({
  productId,
  actions,
}: ProductDetailsPageProps) {
  const productQuery = useProduct(productId);
  const product = productQuery.data;
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >({});
  const [selectedVolumeId, setSelectedVolumeId] = useState("100ml");
  const [giftWrap, setGiftWrap] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const volumes = useMemo(
    () => (product ? getProductVolumes(product.price) : []),
    [product],
  );
  const selectedVolume =
    volumes.find((volume) => volume.id === selectedVolumeId) ?? volumes.at(-1);

  const resolvedOptions = useMemo(() => {
    if (!product || !selectedVolume) {
      return selectedOptions;
    }

    const optionDefaults = Object.fromEntries(
      product.options.map((option) => [
        option.id,
        selectedOptions[option.id] ?? option.values[0],
      ]),
    );

    return {
      ...optionDefaults,
      volume: selectedVolume.label,
      giftWrap: giftWrap ? "Yes" : "No",
    };
  }, [giftWrap, product, selectedOptions, selectedVolume]);

  if (productQuery.isLoading) {
    return (
      <section className="overflow-x-hidden bg-[#faf8f5] px-4 py-10 text-sm text-[#605a54] sm:px-6 md:px-10 lg:px-20">
        Loading product...
      </section>
    );
  }

  if (!product || !selectedVolume) {
    return (
      <section className="overflow-x-hidden bg-[#faf8f5] px-4 py-10 text-sm text-[#605a54] sm:px-6 md:px-10 lg:px-20">
        Product not found.
      </section>
    );
  }

  return (
    <section className="overflow-x-hidden bg-[#faf8f5] text-[#1a1a1a]">
      <ProductBreadcrumbs productName={product.name} />
      <div className="flex flex-col items-stretch gap-8 px-4 pb-16 sm:px-6 md:px-10 lg:flex-row lg:items-start lg:gap-12 lg:px-20 lg:pb-[100px]">
        <div className="min-w-0 flex-1">
          <ProductImages product={product} />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-8">
          <ProductDetails product={product} unitPrice={selectedVolume.price} />
          <ProductVolumeSelector
            volumes={volumes}
            selectedVolumeId={selectedVolume.id}
            onChange={setSelectedVolumeId}
          />
          <ProductGiftWrap enabled={giftWrap} onChange={setGiftWrap} />
          <div className="flex items-center gap-3">
            <ProductQuantity value={quantity} onChange={setQuantity} />
            {actions?.({
              product,
              selectedOptions: resolvedOptions,
              quantity,
              unitPrice: selectedVolume.price,
            })}
          </div>
          <ProductOptions
            product={product}
            selectedOptions={resolvedOptions}
            onChange={(optionId, value) =>
              setSelectedOptions((current) => ({
                ...current,
                [optionId]: value,
              }))
            }
          />
          <ProductScentAnatomy product={product} />
        </div>
      </div>
    </section>
  );
}
