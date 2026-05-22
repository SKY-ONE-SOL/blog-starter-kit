/**
 * Import the Southeast U.S. Automotive Corridor map for the Network section.
 *
 * Usage:
 *   node scripts/import-corridor-map.mjs <local-image-path>
 *   node scripts/import-corridor-map.mjs <chatgpt-public-content-url>
 *   node scripts/import-corridor-map.mjs "<private-estuary-content-url>"
 *
 * Private ChatGPT links (estuary/content?...sig=...) cannot be downloaded on the server.
 * Open the link in a browser while signed in, save the image, then import the file.
 */
import { copyFileSync, existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outPng = join(root, "public/images/automotive-corridor-map.png");
const outJpg = join(root, "public/images/automotive-corridor-map.jpg");
const sourceDefault = join(root, "public/images/automotive-corridor-map-source.png");

const PRIVATE_URL_HELP = `
ChatGPT 비공개 링크는 서버에서 직접 받을 수 없습니다.

브라우저에서 (ChatGPT 로그인 상태):
  1. 링크를 연다
  2. 지도 이미지 우클릭 → "이미지를 다른 이름으로 저장"
  3. 저장 위치: public/images/automotive-corridor-map-source.png
  4. 실행: npm run images:corridor-map -- public/images/automotive-corridor-map-source.png
`;

const src = process.argv[2];
if (!src) {
  console.error(
    "Usage: node scripts/import-corridor-map.mjs <local-image-path-or-url>",
  );
  process.exit(1);
}

if (src.startsWith("http") && src.includes("/estuary/content?")) {
  console.error(PRIVATE_URL_HELP);
  process.exit(1);
}

let input;
let fromPath;

if (src.startsWith("http")) {
  try {
    input = execFileSync(
      "curl",
      ["-sL", "-A", "Mozilla/5.0", "-o", "-", src],
      { maxBuffer: 25 * 1024 * 1024 },
    );
  } catch {
    console.error("Download failed:", src);
    process.exit(1);
  }
} else {
  fromPath = join(process.cwd(), src);
  if (!existsSync(fromPath)) {
    console.error("File not found:", fromPath);
    process.exit(1);
  }
  input = readFileSync(fromPath);
}

const meta = await sharp(input).metadata();

if (fromPath && fromPath.endsWith(".png")) {
  copyFileSync(fromPath, outPng);
} else {
  await sharp(input).png({ compressionLevel: 6 }).toFile(outPng);
}

await sharp(input).jpeg({ quality: 93, mozjpeg: true }).toFile(outJpg);

console.log("Wrote", outPng, `(${meta.width}x${meta.height})`);
console.log("Wrote", outJpg);
