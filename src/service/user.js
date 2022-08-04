//使用我们的数据库
const {getUserById} = require('../database/databases')
async function getUserInfoByUserName(username,password){
    //去数据库里面查询
    // if(User[username] &&User[username].password === password){

    //     return User[username]
    // }
    // return null;

    //根据传进来的用户名在函数getUserById中进行查找，若找到就开始
    //对应密码是否正确，这样即可以判断用户名也可以判断密码
    const rows = await getUserById(username);
    if(rows.length !== 1){
        return null;
    }

    const user = rows[0];
    if(user.password === password){
        return user;
    }
    return null;

}

module.exports = {
    getUserInfoByUserName,
}