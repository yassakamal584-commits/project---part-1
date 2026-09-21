/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { productPaths } from "@/features/products/paths";

type Crumb = {
  href?: string;
  label: string;
};

type ProductBreadcrumbsProps = {
  productName?: string;
};

export function ProductBreadcrumbs({ productName }: ProductBreadcrumbsProps) {
  const crumbs: Crumb[] = productName
    ? [
        { href: productPaths.list, label: "Home" },
        { href: productPaths.list, label: "Shop" },
        { href: productPaths.list, label: "Fragrances" },
        { label: productName },
      ]
    : [
        { href: productPaths.list, label: "Home" },
        { href: productPaths.list, label: "Shop" },
        { label: "All Fragrances" },
      ];

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-2 px-4 py-4 sm:px-6 sm:py-6 md:px-10 lg:px-20"
    >
      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1;

        return (
          <span key={`${crumb.label}-${index}`} className="flex items-center gap-2">
            {crumb.href && !isLast ? (
              <Link
                href={crumb.href}
                className="text-[12px] font-normal whitespace-nowrap text-[#605a54]"
              >
                {crumb.label}
              </Link>
            ) : (
              <span className="text-[12px] font-semibold whitespace-nowrap text-[#1a1a1a]">
                {crumb.label}
              </span>
            )}
            {isLast ? null : (
              <img src="/icons/chevron-right.svg" alt="" width={10} height={10} />
            )}
          </span>
        );
      })}
    </nav>
  );
}
