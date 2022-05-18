const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const packageName = require('./package.json');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 9003,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': '*',
      'Cache-Control': 'no-cache',
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: `${packageName}-[name]`,
      libraryTarget: 'umd',
      chunkLoadingGlobal: `webpackJsonp_${packageName}`,
    },
  },
});
