async function unloadController(ctx){


    // TODO: 在ctx中，取到前端上传的文件
    // ctx.req.on('data', (chunk) => {
    //     console.log(chunk.toString('base64'))
    // })

    // // ctx.req.pipe(require('fs').createWriteStream('./upload.png'))
    // console.log('接收到post请求了')
    // ctx.req.on('end', () => {
    //     console.log('文件读取结束')
    // })
    
    // console.log(filepath);
    const {filename} = ctx.query;
    const filepath = ctx.request.files[filename].filepath;
    // console.log(filepath)
    ctx.body = filepath      //一定要
}
module.exports = {
    unloadController
}