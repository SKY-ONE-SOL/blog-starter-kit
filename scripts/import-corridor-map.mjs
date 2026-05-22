/**
 * Import the Southeast U.S. Automotive Corridor map for the Network section.
 *
 * Usage:
 *   node scripts/import-corridor-map.mjs <file-path>
 *   node scripts/import-corridor-map.mjs <chatgpt-public-content-url>
 *
 * Private ChatGPT links (estuary/content?...sig=...) require login in a browser.
 * Example: file_00000000dac071f68ba017c6599b387f — save from ChatGPT, then:
 *   npm run images:corridor-map -- public/images/automotive-corridor-map-source.png
 */
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outPath = join(root, "public/images/automotive-corridor-map.jpg");

const src = process.argv[2];
if (!src) {
  console.error(
    "Usage: node scripts/import-corridor-map.mjs <local-image-path-or-public-chatgpt-url>",
  );
  process.exit(1);
}

let input;
if (src.startsWith("http")) {
  if (src.includes("/estuary/content?") && !src.includes("public_content")) {
    console.error(
      "This ChatGPT link is private (login required). In your browser:\n" +
        "  1. Open the link while signed in to ChatGPT\n" +
        "  2. Save the image as public/images/automotive-corridor-map-source.png\n" +
        "  3. Run: npm run images:corridor-map -- public/images/automotive-corridor-map-source.png",
    );
    process.exit(1);
  }
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
  const path = join(process.cwd(), src);
  if (!existsSync(path)) {
    console.error("File not found:", path);
    process.exit(1);
  }
  input = readFileSync(path);
}

const meta = await sharp(input).metadata();
await sharp(input).jpeg({ quality: 92, mozjpeg: true }).toFile(outPath);

console.log("Wrote", outPath, `(${meta.width}x${meta.height})`);
