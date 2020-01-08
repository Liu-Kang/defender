'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async addCompany() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      message: '注册成功',
    }
  }
  async getDetail() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      message: '注册成功',
    }
  }
  async postVote() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      message: '注册成功',
    }
  }
}

module.exports = HomeController;
