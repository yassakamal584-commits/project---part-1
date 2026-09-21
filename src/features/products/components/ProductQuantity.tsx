type ProductQuantityProps = {
  value: number;
  onChange: (value: number) => void;
};

export function ProductQuantity({ value, onChange }: ProductQuantityProps) {
  return (
    <div className="flex h-12 w-[108px] shrink-0 items-center justify-between rounded border border-solid border-[#ebe6de] bg-white px-3 text-[#1a1a1a]">
      <button
        type="button"
        aria-label="Decrease quantity"
        className="px-1 text-[16px] leading-none text-[#605a54]"
        onClick={() => onChange(Math.max(1, value - 1))}
      >
        -
      </button>
      <span className="min-w-4 text-center text-[14px] font-medium">{value}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        className="px-1 text-[16px] leading-none text-[#605a54]"
        onClick={() => onChange(value + 1)}
      >
        +
      </button>
    </div>
  );
}
