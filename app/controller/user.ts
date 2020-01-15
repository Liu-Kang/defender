import { Controller } from 'egg';
import http from '../config/http';
import wechat from '../config/wechat';

export default class UserController extends Controller {
  public async login() {
    const { ctx } = this;
    const createRule = {
      code: { type: 'string' },
    };
    ctx.validate(createRule);
    const result = await ctx.curl(http.WX_LOGIN, {
      dataType: 'json',
      timeout: 30000,
      data: {
        appid: wechat.APP_ID,
        secret: wechat.APP_SECRET,
        js_code: ctx.request.body.code,
        grant_type: 'authorization_code'
      }
    });
    ctx.body = {
      code: 0,
      message: '登录成功',
    };
  }
  public async createUser() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      message: '注册成功',
    };
  }
  public async updateUser() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      message: '注册成功',
    };
  }
  public async getInfo() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      message: '注册成功',
    };
  }
}
