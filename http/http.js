const http = require('http')
const path = require('path')

const aimSoureFile = path.join(__dirname,'目标文件')

const fs = require('fs')

const downLoadStream = fs.createReadStream(aimSoureFile)

const server = http.createServer((re,res)=>{

    downLoadStream.pipe(res)
})

server.listen(8080);