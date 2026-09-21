import { cn } from "@/lib/utils/cn";

type ProductGiftWrapProps = {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
};

export function ProductGiftWrap({ enabled, onChange }: ProductGiftWrapProps) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg bg-[#f3efe8] px-4 py-4 sm:px-5">
      <div className="min-w-0">
        <p className="text-[13px] font-semibold text-[#1a1a1a]">
          Complimentary Signature Gift Wrapping
        </p>
        <p className="mt-1 text-[12px] font-normal text-[#605a54]">
          Encased in linen paper box with custom wax seal stamp
        </p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        aria-label="Complimentary signature gift wrapping"
        className={cn(
          "relative h-6 w-11 shrink-0 rounded-full transition-colors",
          enabled ? "bg-[#c5a880]" : "bg-[#d9d3cb]",
        )}
        onClick={() => onChange(!enabled)}
      >
        <span
          className={cn(
            "absolute top-0.5 size-5 rounded-full bg-white transition-[left]",
            enabled ? "left-[22px]" : "left-0.5",
          )}
        />
      </button>
    </div>
  );
}
