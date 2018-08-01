'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/uid', controller.home.uid);
};

// https://eggjs.org/zh-cn/basics/router.html
// 下面是一些路由定义的方式
// // app/router.js
// module.exports = app => {
//   const { router, controller } = app;
//   router.get('/home', controller.home);
//   router.get('/user/:id', controller.user.page);
//   router.post('/admin', isAdmin, controller.admin);
//   router.post('/user', isLoginUser, hasAdminPermission, controller.user.create);
//   router.post('/api/v1/comments', controller.v1.comments.create); // app/controller/v1/comments.js
// };
