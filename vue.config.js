const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const LogFilesizeWebpackPlugin = require('@jsany/log-filesize-webpack-plugin')

module.exports = {
  publicPath: "./", 
  outputDir: "./arcgis-core-build",
  productionSourceMap: false,
  configureWebpack: config => {
    config.plugins.push(new LogFilesizeWebpackPlugin())
    config.plugins.push(new BundleAnalyzerPlugin())
  }
}