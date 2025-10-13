import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // No need for experimental.appDir in Next 15
  outputFileTracingRoot: path.resolve(), // ensure correct workspace root
};

export default nextConfig;
