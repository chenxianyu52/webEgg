'use strict';

const Controller = require('egg').Controller;

class UploadController extends Controller {
    async post() {
        const { ctx } = this;
        ctx.body = {
            post: ctx.request.body,
            id: ctx.request.body.id,
            data: ctx.request.body.data
        }
        console.info(post)
        console.info(id)
        console.info(data)
    }
}

module.exports = UploadController;
