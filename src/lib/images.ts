/** Site imagery. Replace files in `public/images/` with company photos when available. */
const globalNetworkMap = "/images/network.jpg" as const;
const globalNetworkMapAlt =
  "Digital world map with glowing global network connections" as const;

export const siteImages = {
  hero: {
    src: "/images/hero.jpg",
    alt: "Automotive logistics warehouse operations",
  },
  facility: {
    src: "/images/news-facility.jpg",
    alt: "Montgomery, Alabama logistics hub at the center of the U.S. automotive manufacturing network",
  },
  network: {
    src: globalNetworkMap,
    alt: globalNetworkMapAlt,
  },
  regionalOemMap: {
    src: "/images/regional-oem-locations.png",
    alt: "Regional OEM Locations map from SKY ONE SOLUTION Montgomery hub to Southeast automotive plants",
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
    assembly: {
      src: "/images/business-assembly.jpg",
      alt: "Automotive parts assembly on a production line",
    },
  },
  news: [
    {
      src: globalNetworkMap,
      alt: globalNetworkMapAlt,
    },
    {
      src: "/images/news-quality.jpg",
      alt: "Engineer inspecting automotive parts for quality control",
    },
    {
      src: "/images/news-expansion.jpg",
      alt: "Forklift operating in expanded warehouse zone",
    },
    {
      src: "/images/news-assembly.jpg",
      alt: "Automotive parts assembly on a production line",
    },
  ],
} as const;

export type BusinessImageKey = keyof typeof siteImages.business;

export const businessImageByCardId: Record<string, BusinessImageKey> = {
  logistics: "logistics",
  inspection: "inspection",
  warehouse: "warehouse",
  assembly: "assembly",
  rework: "rework",
};
