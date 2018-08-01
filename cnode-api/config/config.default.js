"use strict";

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1533120933123_6833";

  // add your config here
  config.middleware = [];
  // config.middleware = [ 'errorHandler' ];

  // https://eggjs.org/zh-cn/tutorials/restful.html
  // // 加载 errorHandler 中间件
  // middleware: [ 'errorHandler' ],
  // // 只对 /api 前缀的 url 路径生效
  // errorHandler: {
  //   match: '/api',
  // },

  return config;
};
// https://www.npmjs.com/package/egg-cors
exports.security = {
  domainWhiteList: ["http://localhost:4200"]
};
exports.cors = {
  // {string|Function} origin: '*',
  // {string|Array} allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
};
