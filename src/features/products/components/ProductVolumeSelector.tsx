import { cn } from "@/lib/utils/cn";
import type { ProductVolume } from "@/features/products/types/product.types";
import { formatWholePrice } from "@/features/products/utils/product.utils";

type ProductVolumeSelectorProps = {
  volumes: ProductVolume[];
  selectedVolumeId: string;
  onChange: (volumeId: string) => void;
};

export function ProductVolumeSelector({
  volumes,
  selectedVolumeId,
  onChange,
}: ProductVolumeSelectorProps) {
  return (
    <fieldset className="flex w-full flex-col gap-3 border-0 p-0">
      <legend className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#1a1a1a]">
        Select volume
      </legend>
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {volumes.map((volume) => {
          const selected = volume.id === selectedVolumeId;

          return (
            <button
              key={volume.id}
              type="button"
              aria-pressed={selected}
              className={cn(
                "flex flex-col items-center justify-center rounded border border-solid px-2 py-3 sm:py-4",
                selected
                  ? "border-[#1a1a1a] bg-white"
                  : "border-[#ebe6de] bg-[#faf8f5]",
              )}
              onClick={() => onChange(volume.id)}
            >
              <span className="text-[14px] font-medium text-[#1a1a1a]">
                {volume.label}
              </span>
              <span className="text-[12px] font-normal text-[#605a54]">
                {formatWholePrice(volume.price)}
              </span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
