const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

let baseUrl = '';

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  basePath: baseUrl,
  env: {
    baseUrl: baseUrl,
  },
  future: {
    webpack5: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['https:/placeimg.com/640/480/animals/grayscale'],
  },
});
