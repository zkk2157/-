const Koa = require('koa')

const cors = require('@koa/cors');
const koaBody = require('koa-body')
const Path = require('path')
const server = new Koa();
server.use(cors())    //解决跨域问题
server.use(koaBody({
    multipart: true,
    encoding: 'utf-8',
    formidable: {
        uploadDir: Path.join(process.cwd()),  // 上传目录, 默认放置于启动程序的根目录
        keepExtensions: true, // 保持文件的后缀
        maxFieldsSize: 10485760 // 默认文件大小10mb
    }
}))

const { router } = require('./src/router/index.js')



server.use(router.routes()).use(router.allowedMethods())

server.listen(8080, '10.3.22.74',()=>{
    console.log("服务器已启动!")
})




server.use(cors())