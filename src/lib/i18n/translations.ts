export type Locale = "en" | "ko";

export const LOCALES: Locale[] = ["en", "ko"];

const en = {
  meta: {
    htmlLang: "en",
  },
  common: {
    companyName: "SKY ONE SOLUTION",
    wordmarkSubline: "TOTAL SOLUTION",
    domain: "sky1usa.com",
    email: "info@sky1usa.com",
    rights: "All rights reserved.",
  },
  nav: {
    business: "Business",
    network: "Network",
    innovation: "Innovation",
    about: "About",
    contact: "Contact",
    cta: "Contact Us",
  },
  hero: {
    hook: "From expectation to execution",
    lines: ["AUTOMOTIVE", "INDUSTRY", "TOTAL", "SOLUTION"],
    provider: "PROVIDER",
    intro:
      "The future SKY ONE SOLUTION leads is a world that grows more connected — and your value grows with it.",
    scroll: "Scroll",
    tagline: "Automotive Industry Total Solution",
    description:
      "We deliver precision warehouse control, inbound/outbound logistics, pre-shipment inspection, automotive parts assembly, and third-party quality services for OEMs and tier suppliers across the U.S. automotive corridor.",
    specialties: [
      "Parts Logistics",
      "Quality Inspection",
      "Warehouse Control",
      "3rd Party QC",
    ],
    ctaServices: "Business Area",
    ctaAbout: "Our Facility",
    stats: [
      { value: "15", unit: "Acres", label: "Facility Area" },
      { value: "34,588", unit: "sq.ft", label: "Warehouse Space" },
      { value: "24/7", unit: "", label: "Ready to Serve" },
    ],
  },
  news: {
    label: "SKY ONE NOW",
    items: [
      { title: "Strategic hub at the network center of the U.S. automotive industry" },
      { title: "Integrated QC & inspection for automotive tier suppliers" },
      { title: "Expanding warehouse zones for OEM partner growth" },
      { title: "Precision automotive parts assembly for OEM production programs" },
    ],
  },
  businessArea: {
    label: "Business Area",
    cards: [
      {
        id: "logistics",
        title: "LOGISTICS",
        description:
          "We provide total logistics services including transportation, warehousing, inbound/outbound control, packaging, and customer delivery management for the automotive industry.",
        href: "#network",
      },
      {
        id: "inspection",
        title: "QC, INSPECTION & REWORK",
        description:
          "Professional 3rd party inspection, pre-shipment and port inspection, yard/field/inline QC with automotive-experienced staff — plus rework, sorting, parts regrouping, product replacement, and value-add services for OEM and tier suppliers.",
        href: "#innovation",
      },
      {
        id: "warehouse",
        title: "WAREHOUSE",
        description:
          "Systematic warehouse operations from receiving and put-away to picking, packing, and shipping — with FIFO management and real-time system control.",
        href: "#innovation",
      },
      {
        id: "assembly",
        title: "ASSEMBLY",
        description:
          "Precision automotive parts assembly and sub-assembly for OEM programs — line-side integration, module build, and on-time delivery aligned with your production schedule.",
        href: "#innovation",
      },
    ],
  },
  networkSection: {
    label: "Global Network",
    title: "For More Meaningful Connections",
    subtitle: "Strategically positioned in the U.S. automotive manufacturing corridor.",
    regionalOemMap: {
      alt: "Regional OEM Locations — SKY ONE SOLUTION Montgomery hub and nine OEM assembly plants in AL, GA, and TN",
    },
  },
  innovationSection: {
    label: "Innovation",
    title: "Logistics, warehouse & assembly operations",
    subtitle:
      "From dock-to-stock and pick-to-ship to line-side assembly — we run disciplined warehouse and logistics operations built for OEM programs, with a clear path to customer portal and WMS visibility.",
    cta: "Explore our operations",
    warehouseTitle: "Warehouse Operations",
    warehouseItems: [
      "Receiving, put-away, and location-based storage control",
      "FIFO inventory management and cycle counting",
      "Label scan, part traceability, and system-backed transactions",
      "Dock, yard, and shipping-staging coordination",
      "Expansion-ready zones aligned with production growth",
      "Foundation for real-time inventory (portal / WMS roadmap)",
    ],
    assemblyTitle: "Assembly & Logistics",
    assemblyItems: [
      "Automotive parts assembly and sub-assembly",
      "Line-side kitting, sequencing, and module build",
      "Pre-shipment consolidation, packaging, and labeling",
      "Inbound/outbound scheduling with corridor OEM plants",
      "Milk-run and cross-dock style coordination",
      "Quality checkpoints integrated at key handoff points",
    ],
    inboundLabel: "Inbound",
    inboundSteps: [
      "Customer shipment / ASN",
      "Arrival & dock check-in",
      "Unload & quantity verification",
      "Put-away & WMS scan",
      "Staging for assembly or outbound",
    ],
    outboundLabel: "Outbound",
    outboundSteps: [
      "Pick & pack to OEM specification",
      "Assembly completion & final check",
      "Load planning & carrier staging",
      "Ship confirm & plant delivery",
    ],
    highlights: ["Dock to Stock", "Pick to Ship", "Line-Side Assembly", "OEM Corridor"],
  },
  marquee: {
    text: "Automotive Parts Logistics & Quality Solution Provider",
  },
  about: {
    label: "Company Profile",
    title: "Center of the U.S. automotive manufacturing belt",
    subtitle:
      "A logistics hub in Montgomery, Alabama — a strategic hub at the network center of the automotive industry.",
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
    title: "Distance to OEM Assembly Plants",
    subtitle: "Strategically positioned near major automotive plants and the Mobile Port.",
    table: {
      customer: "OEM Plant",
      location: "Location",
      distance: "Distance",
      time: "Travel Time",
      remark: "Remark",
    },
    rows: [
      { customer: "HMMA", location: "Montgomery, Alabama", distance: "5 miles", time: "7 mins", remark: "—" },
      { customer: "KaGA", location: "West Point, Georgia", distance: "88 miles", time: "1 hr 30 mins", remark: "Time zone (CT/ET)" },
      { customer: "Mercedes-Benz", location: "Vance, Alabama", distance: "100 miles", time: "1 hr 45 mins", remark: "—" },
      { customer: "Honda", location: "Lincoln, Alabama", distance: "127 miles", time: "2 hrs", remark: "—" },
      {
        customer: "Mazda Toyota Manufacturing",
        location: "Huntsville, Alabama",
        distance: "191 miles",
        time: "2 hr 49 mins",
        remark: "—",
      },
      { customer: "Volkswagen", location: "Chattanooga, Tennessee", distance: "234 miles", time: "3 hr 24 mins", remark: "Time zone (CT/ET)" },
      { customer: "Nissan", location: "Smyrna, Tennessee", distance: "287 miles", time: "4 hr 27 mins", remark: "Time zone (CT/ET)" },
      { customer: "General Motors", location: "Spring Hill, Tennessee", distance: "298 miles", time: "5 hr 10 mins", remark: "Time zone (CT/ET)" },
      { customer: "HMGMA", location: "Savannah, Georgia", distance: "313 miles", time: "5 hr 5 mins", remark: "—" },
    ],
  },
  services: {
    label: "Service Description",
    title: "Integrated Logistics & Inspection Services",
    subtitle:
      "End-to-end support for automotive parts — from warehouse operations and packaging to pre-shipment and port inspection.",
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
      "We look forward to partnering with you. Reach out to discuss how SKY ONE SOLUTION can support your operations.",
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
    companyName: "SKY ONE SOLUTION",
    wordmarkSubline: "TOTAL SOLUTION",
    domain: "sky1usa.com",
    email: "info@sky1usa.com",
    rights: "All rights reserved.",
  },
  nav: {
    business: "사업영역",
    network: "네트워크",
    innovation: "혁신",
    about: "회사소개",
    contact: "문의",
    cta: "문의하기",
  },
  hero: {
    hook: "기대를 결과로",
    lines: ["AUTOMOTIVE", "INDUSTRY", "TOTAL", "SOLUTION"],
    provider: "PROVIDER",
    intro:
      "스카이 원 솔루션이 이끄는 미래의 세계는 더욱 연결되고, 고객의 가치는 더욱 커질 것입니다.",
    scroll: "Scroll",
    tagline: "자동차 산업 토탈 솔루션",
    description:
      "완성차·부품 OEM 및 협력사를 대상으로 창고관리, 입출고 물류, 출하검사, 부품 조립, 3자 품질검사 및 리워크 서비스를 제공하는 자동차 산업 전문 파트너입니다.",
    specialties: ["부품 물류", "품질검사", "창고관리", "3자 QC"],
    ctaServices: "사업영역",
    ctaAbout: "시설 소개",
    stats: [
      { value: "15", unit: "Acres", label: "시설 면적" },
      { value: "34,588", unit: "sq.ft", label: "창고 면적" },
      { value: "24/7", unit: "", label: "상시 대응" },
    ],
  },
  news: {
    label: "SKY ONE NOW",
    items: [
      { title: "미국 자동차 산업의 네트워크 중심 전략적 거점" },
      { title: "자동차 부품 협력사 대상 통합 QC·검사 서비스" },
      { title: "OEM 파트너 성장을 위한 창고 Zone 확장" },
      { title: "OEM 생산 프로그램을 위한 정밀 자동차 부품 조립" },
    ],
  },
  businessArea: {
    label: "Business Area",
    cards: [
      {
        id: "logistics",
        title: "LOGISTICS",
        description:
          "운송, 창고, 입출고 관리, 포장, 국제물류, 고객 납품 관리 등 자동차 산업을 위한 토탈 물류 서비스를 제공합니다.",
        href: "#network",
      },
      {
        id: "inspection",
        title: "QC·검사 & 리워크",
        description:
          "완성차·부품 3자 검사, 출하·항만검사, 야드/필드/인라인 QC를 자동차 품질 전문 인력이 수행하며, 리워크·선별·부품 재그룹핑·제품 교체 등 부가 서비스를 OEM·협력사 프로그램에 맞춰 제공합니다.",
        href: "#innovation",
      },
      {
        id: "warehouse",
        title: "WAREHOUSE",
        description:
          "입고·적치부터 피킹, 포장, 출고까지 선입선출 기반의 체계적 창고 운영과 시스템 연동을 제공합니다.",
        href: "#innovation",
      },
      {
        id: "assembly",
        title: "ASSEMBLY",
        description:
          "OEM 생산 프로그램을 위한 정밀 부품 조립·서브어셈블리 — 라인사이드 연동, 모듈 조립, 생산 일정에 맞춘 납품을 지원합니다.",
        href: "#innovation",
      },
    ],
  },
  networkSection: {
    label: "Global Network",
    title: "더 의미 있는 연결을 위해",
    subtitle: "미국 자동차 제조 벨트 중심의 전략적 입지",
    regionalOemMap: {
      alt: "Regional OEM Locations — SKY ONE SOLUTION 몽고메리 허브와 AL·GA·TN 9개 완성차 공장",
    },
  },
  innovationSection: {
    label: "Innovation",
    title: "물류 · 창고 · 어셈블리 운영",
    subtitle:
      "입고부터 보관·피킹·출고, 라인사이드 조립까지 — 완성차 프로그램에 맞춘 창고·물류 운영을 수행하며, 고객 포털·WMS 기반 재고 가시화로 확장할 수 있는 구조를 갖추고 있습니다.",
    cta: "운영 역량 보기",
    warehouseTitle: "창고 운영",
    warehouseItems: [
      "입고·적치·로케이션 기반 보관 관리",
      "FIFO 재고 관리 및 사이클 카운트",
      "라벨 스캔, 부품 추적, 시스템 연동 트랜잭션",
      "도크·야드·출고 스테이징 연계",
      "생산 증대에 대응하는 Zone 확장 부지",
      "실시간 재고 조회(포털·WMS) 확장 기반",
    ],
    assemblyTitle: "어셈블리 & 물류",
    assemblyItems: [
      "자동차 부품 조립 및 서브어셈블리",
      "라인사이드 키팅·시퀀싱·모듈 조립",
      "출하 전 통합·포장·라벨링",
      "벨트 내 완성차 공장 입·출고 스케줄 연동",
      "크로스독·밀크런 형태 물류 조율",
      "핵심 핸드오프 구간 품질 체크포인트",
    ],
    inboundLabel: "입고",
    inboundSteps: [
      "고객 출하 / ASN",
      "도착 및 도크 체크인",
      "하역 및 수량 검증",
      "적치 및 WMS 스캔",
      "조립·출고 스테이징",
    ],
    outboundLabel: "출고",
    outboundSteps: [
      "OEM 사양 피킹·패킹",
      "조립 완료 및 최종 확인",
      "상차 계획·캐리어 스테이징",
      "출고 확정·공장 납품",
    ],
    highlights: ["Dock to Stock", "Pick to Ship", "Line-Side Assembly", "OEM Corridor"],
  },
  marquee: {
    text: "Automotive Parts Logistics & Quality Solution Provider",
  },
  about: {
    label: "회사소개",
    title: "미국 자동차 제조 벨트의 중심",
    subtitle:
      "자동차 산업의 네트워크 중심 전략적 거점인 앨라바마주 몽고메리에 위치한 물류 거점입니다.",
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
    title: "완성차 공장과의 거리",
    subtitle: "주요 완성차 공장 및 모빌 항만과 인접한 최적의 입지를 갖추고 있습니다.",
    table: {
      customer: "완성차 공장",
      location: "위치",
      distance: "거리",
      time: "소요시간",
      remark: "비고",
    },
    rows: [
      { customer: "HMMA", location: "Montgomery, Alabama", distance: "5 miles", time: "7분", remark: "—" },
      { customer: "KaGA", location: "West Point, Georgia", distance: "88 miles", time: "1시간 30분", remark: "시간대 (CT/ET)" },
      { customer: "Mercedes-Benz", location: "Vance, Alabama", distance: "100 miles", time: "1시간 45분", remark: "—" },
      { customer: "Honda", location: "Lincoln, Alabama", distance: "127 miles", time: "2시간", remark: "—" },
      {
        customer: "Mazda Toyota Manufacturing",
        location: "Huntsville, Alabama",
        distance: "191 miles",
        time: "2시간 49분",
        remark: "—",
      },
      { customer: "Volkswagen", location: "Chattanooga, Tennessee", distance: "234 miles", time: "3시간 24분", remark: "시간대 (CT/ET)" },
      { customer: "Nissan", location: "Smyrna, Tennessee", distance: "287 miles", time: "4시간 27분", remark: "시간대 (CT/ET)" },
      { customer: "General Motors", location: "Spring Hill, Tennessee", distance: "298 miles", time: "5시간 10분", remark: "시간대 (CT/ET)" },
      { customer: "HMGMA", location: "Savannah, Georgia", distance: "313 miles", time: "5시간 5분", remark: "—" },
    ],
  },
  services: {
    label: "서비스",
    title: "통합 물류 · 검사 서비스",
    subtitle:
      "창고 운영부터 포장, 출하검사, 항만검사까지 자동차 부품 물류·품질 전 과정을 책임집니다.",
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
    subtitle: "함께 성장할 파트너가 되겠습니다. SKY ONE SOLUTION에 문의해 주세요.",
  },
  footer: {
    location: "위치",
    contact: "연락처",
  },
};

export const translations: Record<Locale, Translations> = { en, ko };

export const navItems = [
  { href: "#business", key: "business" as const },
  { href: "#network", key: "network" as const },
  { href: "#innovation", key: "innovation" as const },
  { href: "#about", key: "about" as const },
  { href: "#contact", key: "contact" as const },
];
