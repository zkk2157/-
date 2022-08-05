//承接请求，回应请求
const { getUserInfoByUserName } = require('../service/user')
async function LoginController(ctx) {
    //1.从query拿到查询参数, 前端发起请求，拿到的请求里面有查询参数和路径参数
    const { username, password } = ctx.query;
    
    //查询数据库
    // console.log(username, password)
    // console.log(ctx)
    const uesInfo = await getUserInfoByUserName(username, password)

    // console.log(username,password)
    if (uesInfo) {
        ctx.body = {
            success: true,
            data: uesInfo
        }
    } else {
        ctx.body = {
            success: false,
            data: {
                msg: '此用户不存在或者密码错误'
            }
        }
    }
}

module.exports = {
    LoginController
}