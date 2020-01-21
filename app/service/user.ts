// app/service/user.js
import { Service } from 'egg';
import http from '../config/http';
import wechat from '../config/wechat';

// interface UserInfo {
//   openid: string,
//   session_key: string,
//   unionid: string,
// }

export default class UserService extends Service {
  async saveUserInfo(code: string) {
    const { ctx } = this;
    let loginCb = {};
    try {
      loginCb = await ctx.curl(http.WX_LOGIN, {
        dataType: 'json',
        timeout: 30000,
        data: {
          appid: wechat.APP_ID,
          secret: wechat.APP_SECRET,
          js_code: code,
          grant_type: 'authorization_code'
        }
      });
    } catch (error) {
      throw new Error(error);
    }
    return loginCb;
  }
}
