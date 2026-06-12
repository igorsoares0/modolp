import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a self-contained server bundle (.next/standalone) for Docker/Coolify.
  output: "standalone",
};

export default nextConfig;
