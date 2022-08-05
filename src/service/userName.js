const {getUserById} = require('../database/databases.js')

async function Exist(username){


    const rows = await getUserById(username);

    if(rows.length === 0){
        return false
    }

    return true;
}

module.exports = {
    Exist,
}