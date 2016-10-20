var path = require('path')
var config = require('../config')
// var utils = require('./utils')
var webpack = require("webpack");

var projectRoot = path.resolve(__dirname, '../')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

//webpack插件
var plugins = [
  //提公用js到common.js文件中
  // new webpack.optimize.CommonsChunkPlugin('common.js'),
  //将样式统一发布到style.css中
  new ExtractTextPlugin("style.css", {
    allChunks: true,
    disable: false
  })
];

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    // require时省略的扩展名，如：require('module') 不需要module.js
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          "style-loader", 'css-loader?sourceMap!sass-loader!cssnext-loader')
      },
      {
        test: /\.css$/,
        loader: 'css-loader!autoprefixer-loader?browsers=last 2 versions'
      }
    ]
  },
  // vue: {
  //   loaders: utils.cssLoaders()
  //   // postcss: [
  //   //   require('autoprefixer')({
  //   //     browsers: ['last 2 versions']
  //   //   })
  //   // ]
  // },
  plugins: plugins
}
