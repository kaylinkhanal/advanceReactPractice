const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const SentryWebpackPlugin = require("@sentry/webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
    plugins: [
        new SentryWebpackPlugin({
          org: "test",
          project: "javascript-react",
          slug: "test-pyo",
    
          // Specify the directory containing build artifacts
          include: "./build/static/js",
    
          // Auth tokens can be obtained from https://sentry.io/settings/account/api/auth-tokens/
          // and needs the `project:releases` and `org:read` scopes
          authToken: 'c98965230adf46688e09eecd47e2857333be58a907964f699b5d80d09ab1a31b',
    
          // Optionally uncomment the line below to override automatic release name detection
         // release: "my-example-release-1"
        }),
      ],
  },

});