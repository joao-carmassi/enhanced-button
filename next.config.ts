import getBasePath from '@/lib/get-base-path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  basePath: getBasePath(),
  assetPrefix: getBasePath(),
  output: 'export',
};

export default nextConfig;
