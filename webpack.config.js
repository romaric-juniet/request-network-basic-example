const path = require('path');

module.exports = {
  entry: './web.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'web-built.js'
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  }
};
