const Koa = require('koa')

const cors = require('@koa/cors');

const server = new Koa();
server.use(cors())    //解决跨域问题

const { router } = require('./src/router/index.js')

server.use(router.routes()).use(router.allowedMethods())

server.listen(8080, '10.3.22.74',()=>{
    console.log("服务器已启动!")
})




server.use(cors())