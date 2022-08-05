const { Exist } = require('../service/userName.js');

async function existController(ctx) {

    const { username } = ctx.query;
    const info = await Exist(username)
    if (info) {
        ctx.body = {
            success: true,     //不存在返回ture
        }
    }
    else {
        ctx.body = {
            success: false,
        }
    }
}
module.exports = {
    existController
}