'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = '';
  }
  // async index(query) {
  //   // 定义创建接口的请求参数规则
  //   const createRule = {
  //     uid: { type: 'string' },
  //     // content: { type: 'string' },
  //   };
  //   const ctx = this.ctx;
  //   // 校验 `ctx.request.body` 是否符合我们预期的格式
  //   // 如果参数校验未通过，将会抛出一个 status = 422 的异常
  //   // ctx.validate(createRule);
  //   // 设置响应体和状态码
  //   ctx.body = {
  //     code: 0,
  //     data: {
  //       name: 'rtghj',
  //       count: 5,
  //       query: query.query,
  //     },
  //   };
  //   ctx.status = 201;
  // }
  async uid(params) {
    // 定义创建接口的请求参数规则
    const rule = {
      uid: {
        type: 'string',
      },
    };
    // 如果参数校验未通过，将会抛出一个 status = 422 的异常
    this.ctx.validate(
      {
        uid: {
          type: 'string',
          // format: /\d+/,
          required: true,
        },
      },
      params.query
    );
    // 设置响应体和状态码
    this.ctx.body = {
      code: 0,
      data: {
        uid: params.query.uid,
      },
    };
    this.ctx.status = 201;
  }
}

module.exports = HomeController;
