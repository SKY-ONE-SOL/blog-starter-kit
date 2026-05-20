export const siteConfig = {
  name: "SKY ONE Solution",
  domain: "sky1usa.com",
  tagline: "Total Solution for the Automobile Industry",
  taglineKo: "자동차 산업을 위한 토탈 솔루션",
  email: "info@sky1usa.com",
  location: {
    address: "Montgomery, Alabama, USA",
    area: "15 Acres (18,362 평)",
    warehouse: "34,588 sq.ft (972 평)",
    zones: [
      { id: "A", label: "Zone A", description: "Main building + shipping yard", descriptionKo: "메인동 + 출고장" },
      { id: "B", label: "Zone B", description: "Factory expansion site (5 acres)", descriptionKo: "공장 증축 부지 (5 acres)" },
      { id: "C", label: "Zone C", description: "Factory expansion site (4 acres)", descriptionKo: "공장 증축 부지 (4 acres)" },
    ],
  },
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#location", label: "Location" },
  { href: "#services", label: "Services" },
  { href: "#careers", label: "Capabilities" },
  { href: "#quality", label: "Quality" },
  { href: "#contact", label: "Contact" },
];

export const customerLocations = [
  { customer: "HMMA", location: "Montgomery, Alabama", distance: "5 miles", time: "7 mins", remark: "—" },
  { customer: "KaGA", location: "West Point, Georgia", distance: "88 miles", time: "1 hr 30 mins", remark: "Time zone (CT/ET)" },
  { customer: "HMGMA", location: "Savannah, Georgia", distance: "313 miles", time: "5 hr 5 mins", remark: "—" },
  { customer: "Mobile Port", location: "Mobile, Alabama", distance: "166 miles", time: "2 hr 18 mins", remark: "—" },
];

export const services = [
  { title: "Warehouse Control", icon: "warehouse" },
  { title: "Logistic / Packaging", icon: "package" },
  { title: "Pre-shipment Inspection", icon: "inspect" },
  { title: "Professional 3rd Party Rework", icon: "rework" },
  { title: "3rd Party Inspection", icon: "check" },
  { title: "Internship", icon: "intern" },
  { title: "Port Inspection", icon: "port" },
  { title: "And More", icon: "more" },
];

export const mottoItems = [
  { en: "Anywhere", ko: "어디서든" },
  { en: "Anyway", ko: "어떻게든" },
  { en: "Anytime", ko: "언제든지" },
  { en: "Anything", ko: "무엇이든" },
];

export const careerAreas = [
  {
    title: "Professional 3rd Party Rework",
    items: ["Finished vehicle 3rd party inspection", "Parts 3rd party inspection", "Rework operations", "Efficient inspection staffing"],
    itemsKo: ["완성차 3자 검사", "부품 3자검사", "리워크 작업", "효율적인 검사 인원운영"],
  },
  {
    title: "Contract Logistics",
    items: ["Warehouse / logistics center operations", "FIFO inbound/outbound management", "Sales product logistics", "After-sales logistics management"],
    itemsKo: ["창고 / 물류센터 운영", "선입선출 입출고 관리", "판매 제품 물류 관리", "After-sales 물류 관리"],
  },
  {
    title: "Supply Chain Optimization",
    items: ["Logistics optimization consulting", "Sourcing & procurement", "Assembly & packaging", "Customer delivery management"],
    itemsKo: ["물류 최적화 컨설팅", "소싱 및 조달", "조립 작업 및 포장", "고객사 납품 관리"],
  },
  {
    title: "Road Transport",
    items: ["Transport flow management", "Per-vendor outbound management"],
    itemsKo: ["운송 흐름 관리", "업체별 출고 관리"],
  },
];

export const warehouseFlow = {
  inbound: [
    "Shipping from Customer",
    "Arrival at Warehouse",
    "Unloading",
    "Unpacking & Actual Counting",
    "Re-Grouping by Part Number",
    "Scan Label (System Input)",
    "Storage (Put Away)",
  ],
  outbound: [
    "Packing & Picking",
    "Check Out & Shipping",
  ],
};

export const qualityItems = {
  control: [
    "US warehousing inspection service",
    "Defective product cause investigation & reporting",
    "Daily communication: Supplier ↔ SKY ONE",
    "Professional auto part quality staff",
    "Q-Point method for recurrence prevention",
    "Defect data management",
  ],
  assurance: [
    "Customer ↔ SKY ONE ↔ Supplier communication",
    "Direct response service",
    "Professional inspection staff (yard / field / inline)",
    "Product replacement & repair for problem vehicles",
  ],
};

export const advantages = [
  { title: "Quick Response", titleKo: "신속대응", description: "Ready 24/7 to respond to customer needs" },
  { title: "Expert Knowledge", titleKo: "전문지식과 전문인력", description: "Automobile industry experienced employees" },
  { title: "Experience & Know-How", titleKo: "경험과 노하우", description: "Making best performance every time" },
  { title: "Network", titleKo: "네트워크", description: "Connected with customers & 3rd parties to cover everywhere" },
];
