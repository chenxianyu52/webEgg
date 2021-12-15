'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const result = await ctx.curl('https://api.oick.cn/lishi/api.php');
    ctx.status = result.status;
    ctx.set(result.headers);
    ctx.body = result.data;
  }
}

module.exports = HomeController;
