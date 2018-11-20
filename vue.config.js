module.exports = {
  devServer: {
    proxy: {
      '/service': {
        target: 'http://192.168.88.60:8080/bdc',
        ws: true,
        changeOrigin: true
      }
    }
  }
};
