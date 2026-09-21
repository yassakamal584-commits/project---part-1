import {
  formatPrice,
  getProductVolumes,
  parseProductListQuery,
} from "./product.utils";

describe("formatPrice", () => {
  it("formats a USD amount", () => {
    expect(formatPrice(12.5)).toBe("$12.50");
  });
});

describe("getProductVolumes", () => {
  it("derives 30ml and 50ml prices from the 100ml price", () => {
    expect(getProductVolumes(220)).toEqual([
      { id: "30ml", label: "30 ml", price: 140 },
      { id: "50ml", label: "50 ml", price: 180 },
      { id: "100ml", label: "100 ml", price: 220 },
    ]);
  });
});

describe("parseProductListQuery", () => {
  it("reads list query values from search params", () => {
    expect(
      parseProductListQuery({
        search: "mug",
        category: "home",
        sort: "price-asc",
        page: "2",
        pageSize: "4",
      }),
    ).toEqual({
      search: "mug",
      category: "home",
      sort: "price-asc",
      page: 2,
      pageSize: 4,
    });
  });
});
