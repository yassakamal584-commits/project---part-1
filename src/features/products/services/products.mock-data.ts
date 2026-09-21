import type {
  Product,
  ScentAnatomy,
} from "@/features/products/types/product.types";

function gallery(path: string): string[] {
  return [path, path, path];
}

const santalAnatomy: ScentAnatomy = {
  description:
    "Santal Parchment wraps around the skin like vintage vellum paper. It opens with bright top notes, shifting to clean papyrus and warm, rich sandalwood that dry down into dry cardamom and amber.",
  topNotes: "Sicilian Bergamot, Pink Pepper",
  heartNotes: "Egyptian Jasmine Sambac, Papyrus",
  baseNotes: "West Indian Sandalwood, Cardamom, Amber",
};

export const mockProducts: Product[] = [
  {
    id: "fleur-de-lune",
    name: "Fleur de Lune",
    description: "A luminous floral composition of jasmine and white musk.",
    notes: "Floral / Jasmine & White Musk",
    price: 195,
    images: gallery("/images/products/fleur-de-lune.png"),
    category: "pure-extractions",
    scentFamily: "floral",
    occasion: "personal-use",
    availableInAtelier: true,
    scentAnatomy: {
      description:
        "A luminous floral composition that lifts jasmine against a veil of white musk, remaining airy from first spray to dry down.",
      topNotes: "Neroli, Pear Blossom",
      heartNotes: "Jasmine Sambac, Orange Flower",
      baseNotes: "White Musk, Soft Cedar",
    },
    options: [],
  },
  {
    id: "santal-parchment",
    name: "Santal Parchment",
    description: "Warm sandalwood layered with cardamom.",
    notes: "Woody / Sandalwood & Cardamom",
    price: 220,
    images: gallery("/images/products/santal-parchment.png"),
    category: "pure-extractions",
    scentFamily: "woody",
    occasion: "evening",
    availableInAtelier: true,
    scentAnatomy: santalAnatomy,
    options: [],
  },
  {
    id: "noir-cocoon",
    name: "Noir Cocoon",
    description: "An oriental blend of tobacco and amber.",
    notes: "Oriental / Tobacco & Amber",
    price: 240,
    images: gallery("/images/products/noir-cocoon.png"),
    category: "private-reserve",
    scentFamily: "oriental",
    occasion: "wedding",
    availableInAtelier: true,
    scentAnatomy: {
      description:
        "An enveloping oriental blend of tobacco leaf and amber, built for evenings that call for a slower, warmer trail.",
      topNotes: "Bergamot, Dried Fruit",
      heartNotes: "Tobacco Leaf, Labdanum",
      baseNotes: "Amber, Vanilla, Patchouli",
    },
    options: [],
  },
  {
    id: "sol-dor",
    name: "Sol d'Or",
    description: "A fresh coastal blend of bergamot and sea salt.",
    notes: "Fresh / Bergamot & Sea Salt",
    price: 185,
    images: gallery("/images/products/sol-dor.png"),
    category: "pure-extractions",
    scentFamily: "fresh",
    occasion: "personal-use",
    availableInAtelier: true,
    scentAnatomy: {
      description:
        "A coastal composition of bergamot and sea salt that stays bright and mineral, like sun on warm stone.",
      topNotes: "Bergamot, Sea Spray",
      heartNotes: "Neroli, Driftwood",
      baseNotes: "Sea Salt, White Musk",
    },
    options: [],
  },
  {
    id: "atelier-oud",
    name: "Atelier Oud",
    description: "Rich oud deepened with saffron.",
    notes: "Woody / Rich Oud & Saffron",
    price: 310,
    images: gallery("/images/products/atelier-oud.png"),
    category: "atelier-oils",
    scentFamily: "woody",
    occasion: "gift-sets",
    availableInAtelier: true,
    scentAnatomy: {
      description:
        "A private-reserve oud, deepened with saffron and burnished woods for a dense, lingering trail.",
      topNotes: "Saffron, Pink Pepper",
      heartNotes: "Rose Absolute, Incense",
      baseNotes: "Oud, Sandalwood, Amber",
    },
    options: [],
  },
  {
    id: "rose-absolute",
    name: "Rose Absolute",
    description: "Damask rose balanced with cedar.",
    notes: "Floral / Damask Rose & Cedar",
    price: 205,
    images: gallery("/images/products/rose-absolute.png"),
    category: "private-reserve",
    scentFamily: "floral",
    occasion: "birthday",
    availableInAtelier: true,
    scentAnatomy: {
      description:
        "Damask rose held in place by cedar, so the bloom stays precise rather than powdery.",
      topNotes: "Pink Pepper, Bergamot",
      heartNotes: "Damask Rose, Peony",
      baseNotes: "Cedar, Musk",
    },
    options: [],
  },
];
