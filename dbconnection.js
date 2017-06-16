var mysql=require('mysql');
var connection=mysql.createPool({

    host:'localhost',
    user:'root',
    password:'123456',
    database:'mysql'

});
module.exports=connection;