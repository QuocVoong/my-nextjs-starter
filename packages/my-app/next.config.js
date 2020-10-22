const withPlugins        = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const withLess = require('@zeit/next-less');

const nextConfig = {
  // target: 'serverless',
  devIndicators: {
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
};

module.exports = withPlugins([[withLess({
  lessLoaderOptions: {
    javascriptEnabled: true
  }
}), withBundleAnalyzer]], nextConfig);