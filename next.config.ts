import type { NextConfig } from 'next';
import path from 'path';

// Check if Turbopack is being used via environment variable
// Set TURBOPACK=1 when using --turbopack flag to disable webpack config
const isTurbopack = process.env.TURBOPACK === '1';

const nextConfig: NextConfig = {
  // output: 'export', // Commented out to allow middleware
  images: {
    unoptimized: true,
  },
  experimental: {
    swcPlugins: [['@lingui/swc-plugin', {}]],
  },
  // Only use webpack config when NOT using Turbopack
  // Turbopack doesn't support webpack configuration
  // Note: This is only for the CSS alias. The actual CSS stripping is handled
  // by the postinstall script (strip-platformscode-css.mjs)
  ...(!isTurbopack && {
    webpack: (config: unknown) => {
      // Type assertion needed because webpack config types aren't fully compatible
      const webpackConfig = config as {
        resolve?: { alias?: Record<string, string> };
      };
      webpackConfig.resolve = webpackConfig.resolve || {};
      webpackConfig.resolve.alias = {
        ...(webpackConfig.resolve.alias || {}),
        '@platformscode/core/dist/core/core.css': path.resolve(
          process.cwd(),
          'app/empty.css'
        ),
      };
      return webpackConfig;
    },
  }),
};

export default nextConfig;
