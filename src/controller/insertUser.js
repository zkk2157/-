const { storeDate } = require('../database/getSend.js')

async function InserUser(ctx) {

    const { username, password } = ctx.query;

    const judge = await storeDate(username, password);
    if (judge) {
        ctx.body = {
            success: true,
        }
    }
    else {
        ctx.body = {
            success: false,
        }
    }

}

module.exports = {
    InserUser
}