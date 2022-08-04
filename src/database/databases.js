const mysql = require('mysql2/promise');

//设计模式
//单例模式
let connection = null;

async function getMysql(){
    if(connection){
        return connection;
    }
    connection = await mysql.createConnection({
        host:'39.103.184.144',
        user:'root',
        password:'zjy2157ZKK',
        database:'node-mysql'
    });
    return connection;
}

async function getUserById(username){
    const ins = await getMysql();
    const [rows,fields] = await ins.execute('select * from `user` where `username` = ?',[username])
    // console.log(rows)
    return rows;
}

// async function text(){

//     await getUserById('zkk');
// }

// text();


module.exports = {
    getUserById
}
