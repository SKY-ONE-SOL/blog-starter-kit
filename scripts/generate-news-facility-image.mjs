import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const wikiPath = join(root, "public/images/world-map-base.svg");

/** Wikimedia Commons — World_map_-_low_resolution.svg (public domain) */
const wiki =
  readFileSync(wikiPath, "utf8").match(/<path[\s\S]*?\/>/g)?.join("\n    ") ?? "";

const paths = wiki
  .replace(/\s(?:inkscape|sodipodi):[a-zA-Z0-9_-]+="[^"]*"/g, "")
  .replace(/\sfill="[^"]*"/g, "")
  .replace(/\sstroke="[^"]*"/g, "")
  .replace(/<path/g, '<path fill="none" stroke="#67e8f9" stroke-width="0.55"');

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" role="img" aria-label="Global logistics network with Montgomery hub">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#050d18"/>
      <stop offset="100%" stop-color="#0a1a2e"/>
    </linearGradient>
    <radialGradient id="atmosphere" cx="50%" cy="42%" r="55%">
      <stop offset="0%" stop-color="#1e4a6e" stop-opacity="0.35"/>
      <stop offset="70%" stop-color="#0a1628" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="pillar" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#22d3ee" stop-opacity="0"/>
      <stop offset="55%" stop-color="#67e8f9" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="1"/>
    </linearGradient>
    <radialGradient id="hubPulse" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="1"/>
      <stop offset="40%" stop-color="#67e8f9" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#0ea5e9" stop-opacity="0"/>
    </radialGradient>
    <filter id="glow" x="-80%" y="-80%" width="260%" height="260%">
      <feGaussianBlur stdDeviation="2.5" result="b"/>
      <feMerge>
        <feMergeNode in="b"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="arcGlow">
      <feGaussianBlur stdDeviation="1.4" result="b"/>
      <feMerge>
        <feMergeNode in="b"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <rect width="1200" height="675" fill="url(#bg)"/>
  <ellipse cx="600" cy="310" rx="520" ry="250" fill="url(#atmosphere)"/>
  <rect width="1200" height="675" fill="radial-gradient(ellipse at 50% 42%, transparent 25%, rgba(0,0,0,0.55) 100%)"/>

  <g transform="translate(108 48) scale(1.08)" opacity="0.92" filter="url(#glow)">
    ${paths}
  </g>

  <g fill="none" stroke="#e0f7ff" stroke-width="1.2" filter="url(#arcGlow)" opacity="0.88">
    <path d="M318 218 C400 150 520 115 680 145"/>
    <path d="M318 218 C480 95 720 80 980 125"/>
    <path d="M318 218 C400 280 520 360 640 420"/>
    <path d="M318 218 C350 320 340 460 300 530"/>
    <path d="M318 218 C220 200 120 175 70 210"/>
    <path d="M318 218 C280 260 240 340 210 410"/>
    <path d="M318 218 C360 195 420 175 500 188"/>
    <path d="M318 218 C290 235 265 265 285 295"/>
    <path d="M680 145 C820 125 940 140 1040 175"/>
    <path d="M640 420 C780 400 920 410 1020 435"/>
    <path d="M500 188 C560 170 610 178 655 195"/>
    <path d="M120 175 C240 130 420 100 655 115"/>
  </g>

  <g stroke="#7dd3fc" stroke-width="0.7" opacity="0.4" fill="none">
    <path d="M980 125 C1050 150 1080 200 1060 250"/>
    <path d="M1020 435 C1080 460 1100 500 1070 540"/>
  </g>

  <g fill="#ffffff" filter="url(#glow)">
    <circle cx="680" cy="145" r="3.2" opacity="0.9"/>
    <circle cx="980" cy="125" r="3" opacity="0.85"/>
    <circle cx="655" cy="195" r="2.5" opacity="0.8"/>
    <circle cx="640" cy="420" r="3" opacity="0.8"/>
    <circle cx="1040" cy="175" r="2.5" opacity="0.7"/>
    <circle cx="1020" cy="435" r="2.5" opacity="0.65"/>
    <circle cx="300" cy="530" r="2.5" opacity="0.65"/>
    <circle cx="70" cy="210" r="2.5" opacity="0.75"/>
    <circle cx="500" cy="188" r="2" opacity="0.7"/>
    <circle cx="285" cy="295" r="2" opacity="0.7"/>
    <circle cx="420" cy="280" r="2" opacity="0.6"/>
    <circle cx="820" cy="320" r="2" opacity="0.55"/>
  </g>

  <g stroke="url(#pillar)" stroke-width="1.5" opacity="0.75" filter="url(#glow)">
    <line x1="680" y1="145" x2="680" y2="95"/>
    <line x1="980" y1="125" x2="980" y2="72"/>
    <line x1="640" y1="420" x2="640" y2="365"/>
    <line x1="1040" y1="175" x2="1040" y2="125"/>
    <line x1="420" y1="280" x2="420" y2="230"/>
    <line x1="820" y1="320" x2="820" y2="268"/>
  </g>
  <g fill="#ffffff" filter="url(#glow)">
    <circle cx="680" cy="92" r="2" opacity="0.95"/>
    <circle cx="980" cy="69" r="2" opacity="0.9"/>
    <circle cx="640" cy="362" r="2" opacity="0.85"/>
    <circle cx="1040" cy="122" r="1.8" opacity="0.8"/>
    <circle cx="420" cy="227" r="1.8" opacity="0.75"/>
    <circle cx="820" cy="265" r="1.8" opacity="0.75"/>
  </g>

  <g fill="none" stroke="#ffffff" stroke-width="0.7" opacity="0.3">
    <circle cx="980" cy="125" r="12"/>
    <circle cx="980" cy="125" r="18"/>
    <circle cx="640" cy="420" r="10"/>
    <circle cx="680" cy="145" r="9"/>
  </g>

  <circle cx="318" cy="218" r="58" fill="url(#hubPulse)" opacity="0.9"/>
  <circle cx="318" cy="218" r="20" fill="none" stroke="#ffffff" stroke-width="1.6" opacity="0.95"/>
  <circle cx="318" cy="218" r="30" fill="none" stroke="#ffffff" stroke-width="0.9" opacity="0.5"/>
  <circle cx="318" cy="218" r="42" fill="none" stroke="#67e8f9" stroke-width="0.7" opacity="0.35"/>
  <circle cx="318" cy="218" r="5.5" fill="#ffffff" filter="url(#glow)"/>
  <line x1="318" y1="218" x2="318" y2="158" stroke="url(#pillar)" stroke-width="2" opacity="0.9"/>
  <circle cx="318" cy="155" r="2.5" fill="#ffffff" filter="url(#glow)"/>
</svg>
`;

const svgOut = join(root, "public/images/news-facility-map.svg");
const jpgOut = join(root, "public/images/news-facility.jpg");

writeFileSync(svgOut, svg);
await sharp(Buffer.from(svg)).resize(1200, 675).jpeg({ quality: 90 }).toFile(jpgOut);

console.log("Wrote", svgOut);
console.log("Wrote", jpgOut);
