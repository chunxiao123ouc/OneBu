var userdb={};
var db = require('../db') 

userdb.query = function (openid,callback) {
    db.con(function (connect) {
        var  sql = 'SELECT * FROM dota.user_data';
        connect.query(sql, function (err, result) {  
            if (err) {  
                console.log("select username:" + username + " error, the err information is " + err);  
                return callback(err);  
            }  
                console.log(result);
                return callback(result); 
        })  
    })
}

module.exports = userdb; 