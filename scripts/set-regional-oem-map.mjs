/**
 * Replace the Network section map with your own PNG (no AI generation).
 *
 *   npm run images:regional-oem-map -- /path/to/your-regional-oem-map.png
 */
import { copyFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const out = join(root, "public/images/regional-oem-locations.png");

const src = process.argv[2];
if (!src) {
  console.error("Usage: npm run images:regional-oem-map -- <path-to-your-png>");
  process.exit(1);
}

if (!existsSync(src)) {
  console.error("File not found:", src);
  process.exit(1);
}

copyFileSync(src, out);
console.log("Updated", out, "from", src);
console.log("Next: git add public/images/regional-oem-locations.png && git commit && git push");
