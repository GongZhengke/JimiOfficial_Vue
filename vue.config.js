const {
  defineConfig
} = require('@vue/cli-service');
const url = require('url');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 3030, // 将端口设置为8081
    allowedHosts: [
      '.zjweu.com.cn',
    ],
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5050/', // 后台接口域名
        ws: true, //如果要代理 websockets，配置这个参数
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, //是否跨域
      },
    }
  }
});