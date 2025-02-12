const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const CompressionPlugin = require("compression-webpack-plugin");

module.exports = withBundleAnalyzer({
  reactStrictMode: true, // Enforces best practices
  poweredByHeader: false, // Removes "X-Powered-By" header for security
  swcMinify: true, // Uses SWC compiler for better performance

  // Forces a fully static export (removes server-side dependencies)
  output: 'export',

  // Optimized image handling for static exports
  images: {
    unoptimized: true, // Ensures compatibility with `next export`
  },

  experimental: {
    optimizeCss: true, // Minifies CSS
    scrollRestoration: true, // Improves UX
  },

  webpack(config, { isServer }) {
    // Enables Gzip compression
    config.plugins.push(
      new CompressionPlugin({
        algorithm: "gzip",
        threshold: 8192, // Compress files larger than 8KB
        minRatio: 0.8, // Compression ratio
      })
    );

    if (!isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser'; // Prevents Next.js from bundling unnecessary server-side modules
    }

    return config;
  },
});
