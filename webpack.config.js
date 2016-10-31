var webpack = require('webpack');

var PROD = JSON.parse("1" || '0');

module.exports = {
  entry: './app/app.jsx',
  devtool: 'source-map',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Layout: 'app/Layout.jsx',
      TimerBlock: 'app/components/TimerBlock.jsx',
      ActionBlock: 'app/components/ActionBlock.jsx',
      LeftBlock: 'app/components/LeftBlock.jsx',
      LapBlock: 'app/components/LapBlock.jsx',
      LapList: 'app/components/LapList.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
   plugins: PROD ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ] : []
};
