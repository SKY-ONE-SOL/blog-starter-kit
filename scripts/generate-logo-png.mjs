import sharp from "sharp";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const svg = readFileSync(join(__dirname, "../public/logo.svg"));

await sharp(svg).resize(512, 512).png().toFile(join(__dirname, "../public/logo.png"));

console.log("Generated public/logo.png");
