import { Application } from 'egg';

/**
 * 公司相关接口
 */
export default (app:Application) => {
  const { router, controller } = app;
  router.post('/api/company/add', controller.company.addCompany);
  router.get('/api/company/detail', controller.company.getDetail);
  router.post('/api/company/vote', controller.company.postVote);
  router.get('/api/company/comments', controller.company.getComments);
};
