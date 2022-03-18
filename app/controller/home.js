'use strict';

const Controller = require('egg').Controller;
const util = require('../utils/util.js');
class HomeController extends Controller {
  async get() {
    const { ctx } = this;
    console.log('真实请求开始：-------------------------');
    console.log('请求methode:', ctx.request.method);
    console.log('请求时间:', util.timestamp());


    // 获取请求头
    ctx.get('');
    // 设置允许跨源访问相关响应头
    ctx.set('Access-Control-Allow-Origin', 'http://127.0.0.1:7001');

    ctx.body = '===========允许的请求============';
    console.log('请求结束：-------------------------\n');
  }


  async options() {
    const { ctx } = this;
    console.log('预检请求开始：-------------------------');
    console.log('请求methode:', ctx.request.method);
    console.log('请求时间:', util.timestamp());


    // 获取请求头
    ctx.get('');
    // 设置允许跨源访问相关响应头
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type');
    ctx.body = '===========允许的请求============';
    console.log('请求结束：-------------------------\n');
  }

}

module.exports = HomeController;
