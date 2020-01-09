'use strict';

/**
 * 公司相关接口
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/api/company/add', controller.company.addCompany);
  router.get('/api/company/detail', controller.company.getDetail);
  router.post('/api/company/vote', controller.company.postVote);
};
