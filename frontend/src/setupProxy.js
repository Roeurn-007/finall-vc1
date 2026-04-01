const { createProxyMiddleware } = require('http-proxy-middleware');

const API_PROXY_TARGET = process.env.API_PROXY_TARGET || 'http://32.195.66.128';

module.exports = function setupProxy(app) {
  app.use(
    ['/api', '/uploads'],
    createProxyMiddleware({
      target: API_PROXY_TARGET,
      changeOrigin: true
    })
  );
};
