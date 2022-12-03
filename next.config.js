/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    additionalData: `
    @use './config/variables' as var;
    @use './config/mixins' as mixins;
    `,
  },
  images: {
    domains: ['ganrakuji-file.sumomo.ne.jp'],
  },
  // むしろ悪くなる。
  // https://zenn.dev/catnose99/articles/bb943c3dc99d89
  // https://zenn.dev/miyaoka/scraps/76037a34cd0fed
  // optimizeFonts: true,
};

module.exports = nextConfig;

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    additionalData: `
    @use './config/variables' as var;
    @use './config/mixins' as mixins;
    `,
  },
});
