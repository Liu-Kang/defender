'use strict';

const userRouter = require('./routers/user');
const companyRouter = require('./routers/company');
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  userRouter(app);
  companyRouter(app);
};
