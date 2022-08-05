const Router = require('@koa/router');
const router = new Router();
const {LoginController} = require('../controller/login.js')
const {InserUser} = require('../controller/insertUser.js')
const {existController} = require('../controller/judgeExist.js')
//路由和contoller函数的映射关系
router.post('/login',LoginController)

router.post('/exist',existController)

router.post('/send',InserUser)

module.exports = {
    router
}