const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const LogFilesizeWebpackPlugin = require('@jsany/log-filesize-webpack-plugin')

module.exports = {
  publicPath: "./", 
  outputDir: "./esri-loader-build",
  productionSourceMap: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production'){
      config.plugins.push(new LogFilesizeWebpackPlugin())
      config.plugins.push(new BundleAnalyzerPlugin())
    }
  }
}