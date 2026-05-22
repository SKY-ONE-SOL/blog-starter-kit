import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Ensures _posts and public assets resolve when Vercel sets a different cwd
  outputFileTracingRoot: projectRoot,
};

export default nextConfig;
