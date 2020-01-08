'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 用户相关接口
  router.post('/api/user/createUser', controller.user.createUser);
  router.get('/api/user/update', controller.user.updateUser);
  router.get('/api/user/getInfo', controller.user.getInfo);
  // 公司相关接口
  router.post('/api/company/add', controller.company.addCompany);
  router.get('/api/company/detail', controller.company.getDetail);
  router.post('/api/company/vote', controller.company.postVote);
};
