import { Controller } from 'egg';

export default class UserController extends Controller {
  public async login() {
    const { ctx } = this;
    const createRule = {
      code: { type: 'string' },
    };
    ctx.validate(createRule);
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
