const withPlugins        = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const withImages         = require('next-images');
const withLess           = require('@zeit/next-less');

const nextConfig = {
  devIndicators:        {
    autoPrerender: false,
  },
  analyzeServer:        ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser:       ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server:  {
      analyzerMode:   'static',
      reportFilename: '../bundles/server.html',
    },
    browser: {
      analyzerMode:   'static',
      reportFilename: '../bundles/client.html',
    },
  },
  webpack:              (config, options) => {
    // modify the `config` here
    return config;
  },
};

module.exports = withPlugins([
  [withLess({
    lessLoaderOptions: {
      javascriptEnabled: true
    }
  })],
  withImages,
  withBundleAnalyzer
], nextConfig);