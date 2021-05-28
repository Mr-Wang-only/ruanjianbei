module.exports = {
  devServer: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://lzzzs.top:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      },
    },
    disableHostCheck: true, // 这是由于新版的webpack-dev-server出于安全考虑，默认检查hostname，如果hostname 不是配置内的，将中断访问。
  },
}