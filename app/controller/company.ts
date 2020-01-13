import { Controller } from 'egg';

export default class CompanyController extends Controller {
  public async addCompany() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      message: '注册成功',
    }
  }
  public async getDetail() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      message: '注册成功',
    }
  }
  public async postVote() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      message: '注册成功',
    }
  }
  public async getComments() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      message: '注册成功',
    }
  }
}
