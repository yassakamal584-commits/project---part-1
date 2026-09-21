import type { Product } from "@/features/products/types/product.types";

type ProductScentAnatomyProps = {
  product: Product;
};

const NOTE_ROWS = [
  ["topNotes", "Top notes"],
  ["heartNotes", "Heart notes"],
  ["baseNotes", "Base notes"],
] as const;

export function ProductScentAnatomy({ product }: ProductScentAnatomyProps) {
  const anatomy = product.scentAnatomy;

  return (
    <section className="flex flex-col gap-4 border-t border-solid border-[#ebe6de] pt-8">
      <h2 className="font-[family-name:var(--font-instrument-serif)] text-[28px] leading-tight text-[#1a1a1a] sm:text-[32px]">
        Scent Anatomy
      </h2>
      <p className="text-[14px] leading-relaxed font-normal text-[#605a54]">
        {anatomy.description}
      </p>
      <dl className="flex flex-col">
        {NOTE_ROWS.map(([key, label], index) => (
          <div
            key={key}
            className={
              index === 0
                ? "flex items-start justify-between gap-4 py-3"
                : "flex items-start justify-between gap-4 border-t border-solid border-[#ebe6de] py-3"
            }
          >
            <dt className="text-[11px] font-bold tracking-[0.06em] uppercase text-[#1a1a1a]">
              {label}
            </dt>
            <dd className="text-right text-[13px] font-normal text-[#605a54]">
              {anatomy[key]}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
