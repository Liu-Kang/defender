'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const { ctx } = this;
    const createRule = {
      code: { type: 'string' },
    };
    ctx.validate(createRule);
    
  }
  async createUser() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      message: '注册成功',
    };
  }
  async updateUser() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      message: '注册成功',
    };
  }
  async getInfo() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      message: '注册成功',
    };
  }
}

module.exports = UserController;
