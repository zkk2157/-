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


async function storeDate(username,password){
    const ins = await getMysql();

    await ins.execute(`INSERT INTO user (username, password) VALUES ('${username}', '${password}')`) 
    // const [rows,fields] = await ins.execute('select * from `user` where `username` = ?',[username]) 

    return true
}

// async function text(){

//     await storeDate("zzk87","123");
// }

// text();

module.exports ={
    storeDate
}