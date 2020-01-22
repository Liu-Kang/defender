import { Controller } from 'egg';

interface UserInfo {
  openid?: string,
  unionid?: string,
}

export default class UserController extends Controller {
  /**
   * 登录
   */
  public async login() {
    const { ctx } = this;

    const createRule = {
      code: { type: 'string' },
    };
    ctx.validate(createRule);

    const result: UserInfo = await ctx.service.user.saveUserInfo(ctx.request.body.code);
    ctx.body = {
      code: 0,
      data: result,
      message: '登录成功',
    };
  }
  /**
   * 更新用户信息
   */
  public async updateUser() {}
  /**
   * 获取用户信息
   */
  public async getInfo() {}
}
