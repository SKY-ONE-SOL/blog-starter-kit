/** Site imagery. Replace files in `public/images/` with company photos when available. */
export const siteImages = {
  hero: {
    src: "/images/hero.jpg",
    alt: "Automotive logistics warehouse operations",
  },
  facility: {
    src: "/images/facility.jpg",
    alt: "Warehouse and distribution facility",
  },
  network: {
    src: "/images/network.jpg",
    alt: "Global logistics and transportation network",
  },
  qualityLab: {
    src: "/images/quality-lab.jpg",
    alt: "Quality inspection and manufacturing",
  },
  business: {
    logistics: { src: "/images/logistics.jpg", alt: "Truck logistics and transportation" },
    inspection: {
      src: "/images/inspection.jpg",
      alt: "Engineer performing automotive quality inspection",
    },
    warehouse: { src: "/images/warehouse.jpg", alt: "Warehouse storage and operations" },
    rework: {
      src: "/images/automotive-parts.jpg",
      alt: "Automotive engine rework and mechanical service",
    },
  },
  news: [
    {
      src: "/images/news-facility.jpg",
      alt: "Trucks at logistics distribution hub",
    },
    {
      src: "/images/news-quality.jpg",
      alt: "Automotive manufacturing quality control",
    },
    {
      src: "/images/news-expansion.jpg",
      alt: "Forklift operating in expanded warehouse zone",
    },
  ],
} as const;

export type BusinessImageKey = keyof typeof siteImages.business;

export const businessImageByCardId: Record<string, BusinessImageKey> = {
  logistics: "logistics",
  inspection: "inspection",
  warehouse: "warehouse",
  rework: "rework",
};
