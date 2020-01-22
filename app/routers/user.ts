import { Application } from 'egg';

/**
 * 用户相关接口
 */
export default (app: Application) => {
  const { router, controller } = app;
  router.post('/api/user/login', controller.user.login);
  // router.post('/api/user/createUser', controller.user.createUser);
  router.get('/api/user/update', controller.user.updateUser);
  router.get('/api/user/getInfo', controller.user.getInfo);
};
