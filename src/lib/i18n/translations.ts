export type Locale = "en" | "ko";

export const LOCALES: Locale[] = ["en", "ko"];

const en = {
  meta: {
    htmlLang: "en",
  },
  common: {
    companyName: "SKY ONE Solution",
    domain: "sky1usa.com",
    email: "info@sky1usa.com",
    rights: "All rights reserved.",
  },
  nav: {
    about: "About",
    location: "Location",
    services: "Services",
    careers: "Capabilities",
    quality: "Quality",
    contact: "Contact",
    cta: "Get in Touch",
  },
  hero: {
    badge: "Montgomery, Alabama · Automotive Logistics Hub",
    tagline: "Total Solution for the Automobile Industry",
    description:
      "SKY ONE Solution provides total solution services based on the automobile industry. Our team brings deep expertise from the automotive sector to deliver results that meet your expectations.",
    ctaServices: "Our Services",
    ctaAbout: "Company Profile",
    stats: [
      { value: "15", unit: "Acres", label: "Facility Area" },
      { value: "34,588", unit: "sq.ft", label: "Warehouse Space" },
      { value: "24/7", unit: "", label: "Ready to Serve" },
    ],
  },
  about: {
    label: "Company Profile",
    title: "Strategic Facility in Alabama",
    subtitle:
      "Located in Montgomery, Alabama — at the heart of the U.S. automotive manufacturing corridor.",
    facilityTitle: "Facility Overview",
    fields: {
      location: "Location",
      area: "Total Area",
      warehouse: "Warehouse",
    },
    location: {
      address: "Montgomery, Alabama, USA",
      area: "15 Acres (18,362 평)",
      warehouse: "34,588 sq.ft (972 평)",
      zones: [
        { id: "A", label: "Zone A", description: "Main building + shipping yard" },
        { id: "B", label: "Zone B", description: "Factory expansion site (5 acres)" },
        { id: "C", label: "Zone C", description: "Factory expansion site (4 acres)" },
      ],
    },
  },
  location: {
    label: "Location",
    title: "Proximity to Key Customers",
    subtitle: "Strategically positioned near major automotive plants and the Mobile Port.",
    table: {
      customer: "Customer",
      location: "Location",
      distance: "Distance",
      time: "Travel Time",
      remark: "Remark",
    },
    rows: [
      { customer: "HMMA", location: "Montgomery, Alabama", distance: "5 miles", time: "7 mins", remark: "—" },
      { customer: "KaGA", location: "West Point, Georgia", distance: "88 miles", time: "1 hr 30 mins", remark: "Time zone (CT/ET)" },
      { customer: "HMGMA", location: "Savannah, Georgia", distance: "313 miles", time: "5 hr 5 mins", remark: "—" },
      { customer: "Mobile Port", location: "Mobile, Alabama", distance: "166 miles", time: "2 hr 18 mins", remark: "—" },
    ],
  },
  services: {
    label: "Service Description",
    title: "Comprehensive Automotive Services",
    subtitle:
      "We provide staffing, rework, sorting, internship, shipping inspection, packaging, port inspection, and all services you need.",
    items: [
      { title: "Warehouse Control", icon: "warehouse" },
      { title: "Logistic / Packaging", icon: "package" },
      { title: "Pre-shipment Inspection", icon: "inspect" },
      { title: "Professional 3rd Party Rework", icon: "rework" },
      { title: "3rd Party Inspection", icon: "check" },
      { title: "Internship", icon: "intern" },
      { title: "Port Inspection", icon: "port" },
      { title: "And More", icon: "more" },
    ],
  },
  motto: {
    label: "Motto",
    title: "Our Commitment to You",
    subtitle:
      "We strive to deliver results that match your expectations — from your perspective.",
    items: ["Anywhere", "Anyway", "Anytime", "Anything"],
  },
  careers: {
    label: "Capabilities",
    title: "Core Business Areas",
    subtitle:
      "From 3rd party rework to supply chain optimization — end-to-end automotive logistics expertise.",
    areas: [
      {
        title: "Professional 3rd Party Rework",
        items: [
          "Finished vehicle 3rd party inspection",
          "Parts 3rd party inspection",
          "Rework operations",
          "Efficient inspection staffing",
        ],
      },
      {
        title: "Contract Logistics",
        items: [
          "Warehouse / logistics center operations",
          "FIFO inbound/outbound management",
          "Sales product logistics",
          "After-sales logistics management",
        ],
      },
      {
        title: "Supply Chain Optimization",
        items: [
          "Logistics optimization consulting",
          "Sourcing & procurement",
          "Assembly & packaging",
          "Customer delivery management",
        ],
      },
      {
        title: "Road Transport",
        items: ["Transport flow management", "Per-vendor outbound management"],
      },
    ],
  },
  warehouse: {
    label: "Warehouse Control",
    title: "Inbound & Outbound Process",
    subtitle: "Systematic warehouse operations from receiving to shipping.",
    inbound: "Inbound",
    outbound: "Outbound",
    inboundSteps: [
      "Shipping from Customer",
      "Arrival at Warehouse",
      "Unloading",
      "Unpacking & Actual Counting",
      "Re-Grouping by Part Number",
      "Scan Label (System Input)",
      "Storage (Put Away)",
    ],
    outboundSteps: ["Packing & Picking", "Check Out & Shipping"],
  },
  quality: {
    label: "Quality",
    title: "Quality Control & Assurance",
    subtitle:
      "Professional quality management across warehousing, yard, field, and inline operations.",
    controlTitle: "Quality Control",
    assuranceTitle: "Quality Assurance",
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
  },
  advantages: {
    label: "Advantages",
    title: "Why Choose SKY ONE",
    items: [
      { title: "Quick Response", description: "Ready 24/7 to respond to customer needs" },
      { title: "Expert Knowledge", description: "Automobile industry experienced employees" },
      { title: "Experience & Know-How", description: "Making best performance every time" },
      {
        title: "Network",
        description: "Connected with customers & 3rd parties to cover everywhere",
      },
    ],
  },
  contact: {
    label: "Contact",
    title: "Thank You",
    subtitle:
      "We look forward to partnering with you. Reach out to discuss how SKY ONE Solution can support your operations.",
  },
  footer: {
    location: "Location",
    contact: "Contact",
  },
};

export type Translations = typeof en;

const ko: Translations = {
  meta: {
    htmlLang: "ko",
  },
  common: {
    companyName: "SKY ONE Solution",
    domain: "sky1usa.com",
    email: "info@sky1usa.com",
    rights: "All rights reserved.",
  },
  nav: {
    about: "회사소개",
    location: "위치",
    services: "서비스",
    careers: "사업영역",
    quality: "품질",
    contact: "문의",
    cta: "문의하기",
  },
  hero: {
    badge: "앨라바마 몽고메리 · 자동차 물류 허브",
    tagline: "자동차 산업을 위한 토탈 솔루션",
    description:
      "스카이 원 솔루션은 자동차 산업 관련 필요하신 모든 서비스를 제공합니다. 자동차 분야 출신의 직원들로 이 분야에 높은 이해도를 갖추고 있으며, 고객이 기대하는 결과를 실현하기 위해 최선을 다합니다.",
    ctaServices: "서비스 보기",
    ctaAbout: "회사소개",
    stats: [
      { value: "15", unit: "Acres", label: "시설 면적" },
      { value: "34,588", unit: "sq.ft", label: "창고 면적" },
      { value: "24/7", unit: "", label: "상시 대응" },
    ],
  },
  about: {
    label: "회사소개",
    title: "앨라바마 전략 거점",
    subtitle: "미국 자동차 제조 벨트의 중심, 앨라바마주 몽고메리에 위치한 물류 거점입니다.",
    facilityTitle: "시설 개요",
    fields: {
      location: "위치",
      area: "면적",
      warehouse: "창고면적",
    },
    location: {
      address: "Montgomery, Alabama, USA",
      area: "15 Acres (18,362 평)",
      warehouse: "34,588 sq.ft (972 평)",
      zones: [
        { id: "A", label: "Zone A", description: "메인동 + 출고장" },
        { id: "B", label: "Zone B", description: "공장 증축 부지 (5 acres)" },
        { id: "C", label: "Zone C", description: "공장 증축 부지 (4 acres)" },
      ],
    },
  },
  location: {
    label: "위치",
    title: "주요 고객사와의 거리",
    subtitle: "주요 완성차 공장 및 모빌 항만과 인접한 최적의 입지를 갖추고 있습니다.",
    table: {
      customer: "고객사",
      location: "위치",
      distance: "거리",
      time: "소요시간",
      remark: "비고",
    },
    rows: [
      { customer: "HMMA", location: "Montgomery, Alabama", distance: "5 miles", time: "7분", remark: "—" },
      { customer: "KaGA", location: "West Point, Georgia", distance: "88 miles", time: "1시간 30분", remark: "시간대 (CT/ET)" },
      { customer: "HMGMA", location: "Savannah, Georgia", distance: "313 miles", time: "5시간 5분", remark: "—" },
      { customer: "Mobile Port", location: "Mobile, Alabama", distance: "166 miles", time: "2시간 18분", remark: "—" },
    ],
  },
  services: {
    label: "서비스",
    title: "자동차 산업 종합 서비스",
    subtitle:
      "작업인원 배치, 리워크, 선별, 인턴쉽, 출하검사, 포장, 항만검사 등 필요하신 모든 서비스를 제공합니다.",
    items: [
      { title: "창고 관리", icon: "warehouse" },
      { title: "물류 / 포장", icon: "package" },
      { title: "출하 전 검사", icon: "inspect" },
      { title: "전문 3자 리워크", icon: "rework" },
      { title: "3자 검사", icon: "check" },
      { title: "인턴쉽", icon: "intern" },
      { title: "항만 검사", icon: "port" },
      { title: "기타", icon: "more" },
    ],
  },
  motto: {
    label: "모토",
    title: "고객에 대한 약속",
    subtitle: "고객의 입장에서 기대한 퍼포먼스가 실제 결과물이 되도록 노력하겠습니다.",
    items: ["어디서든", "어떻게든", "언제든지", "무엇이든"],
  },
  careers: {
    label: "사업영역",
    title: "핵심 사업 분야",
    subtitle: "3자 리워크부터 공급망 최적화까지, 자동차 물류 전 과정을 지원합니다.",
    areas: [
      {
        title: "전문 3자 리워크",
        items: ["완성차 3자 검사", "부품 3자검사", "리워크 작업", "효율적인 검사 인원운영"],
      },
      {
        title: "계약 물류",
        items: [
          "창고 / 물류센터 운영",
          "선입선출 입출고 관리",
          "판매 제품 물류 관리",
          "After-sales 물류 관리",
        ],
      },
      {
        title: "공급망 최적화",
        items: ["물류 최적화 컨설팅", "소싱 및 조달", "조립 작업 및 포장", "고객사 납품 관리"],
      },
      {
        title: "도로 운송",
        items: ["운송 흐름 관리", "업체별 출고 관리"],
      },
    ],
  },
  warehouse: {
    label: "창고 관리",
    title: "입고 · 출고 프로세스",
    subtitle: "입고부터 출고까지 체계적인 창고 운영 프로세스입니다.",
    inbound: "입고",
    outbound: "출고",
    inboundSteps: [
      "고객사 발송",
      "창고 도착",
      "하역",
      "개봉 및 실물 수량 확인",
      "부품번호별 재그룹핑",
      "라벨 스캔 (시스템 입력)",
      "보관 (Put Away)",
    ],
    outboundSteps: ["포장 및 피킹", "출고 검수 및 배송"],
  },
  quality: {
    label: "품질",
    title: "품질 관리 및 품질 보증",
    subtitle: "창고, 야드, 필드, 인라인 전 영역의 전문 품질 관리 서비스입니다.",
    controlTitle: "품질 관리 (QC)",
    assuranceTitle: "품질 보증 (QA)",
    control: [
      "미국 창고 검사 서비스",
      "불량 원인 조사 및 보고",
      "공급사 ↔ SKY ONE 일일 커뮤니케이션",
      "자동차 부품 품질 전문 인력",
      "Q-Point 방식 재발 방지",
      "불량 데이터 관리",
    ],
    assurance: [
      "고객 ↔ SKY ONE ↔ 공급사 커뮤니케이션",
      "직접 대응 서비스",
      "야드 / 필드 / 인라인 전문 검사 인력",
      "문제 차량 제품 교체 및 수리 서비스",
    ],
  },
  advantages: {
    label: "강점",
    title: "SKY ONE을 선택하는 이유",
    items: [
      { title: "신속대응", description: "24시간 고객 요구에 즉각 대응" },
      { title: "전문지식과 전문인력", description: "자동차 산업 경험을 갖춘 전문 인력" },
      { title: "경험과 노하우", description: "최고의 퍼포먼스를 실현" },
      { title: "네트워크", description: "고객 및 3자와의 연계로 전국 커버" },
    ],
  },
  contact: {
    label: "문의",
    title: "감사합니다",
    subtitle: "함께 성장할 파트너가 되겠습니다. SKY ONE Solution에 문의해 주세요.",
  },
  footer: {
    location: "위치",
    contact: "연락처",
  },
};

export const translations: Record<Locale, Translations> = { en, ko };

export const navItems = [
  { href: "#about", key: "about" as const },
  { href: "#location", key: "location" as const },
  { href: "#services", key: "services" as const },
  { href: "#careers", key: "careers" as const },
  { href: "#quality", key: "quality" as const },
  { href: "#contact", key: "contact" as const },
];
