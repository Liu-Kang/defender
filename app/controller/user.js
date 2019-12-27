'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async createUser() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      message: '注册成功',
    }
  }
}

module.exports = HomeController;
