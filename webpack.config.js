var webpack = require('webpack');  
module.exports = {  
  entry: [
    "./static/js/app.js"
  ],
  output: {
    path: __dirname + '/static',
    filename: "bundle.js"
  },
  devtool: 'source-map',
  debug: true,
  module: {
    noParse: /node_modules\/ajv\/dist\/ajv.bundle.js/,
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        exclude: /node_modules/
      },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  plugins: [
  ]
};
