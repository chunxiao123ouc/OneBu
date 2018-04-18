var user = {};
var userdb = require('../sql/userdb');

user.function = function (app) {
    //写个接口123
    app.get('/123', function (req, res) {
        res.status(200)
        var openid = ''; 

        userdb.query(openid,function (result){
            res.send(result);
        })

    });

    //判断用户是否已存在  openid
    app.get('/user/ifexist', function (req, res) {
        res.status(200)
        var openid = req.query.openid;
        userdb.ifexist(1, function (result) {
            res.send('ifexist')
        })

    });

    //查询基本信息  openid
    app.get('/user/qurey', function (req, res) {
        res.status(200)
        var openid = req.query.openid;
        //userdb.qurey(1, function (result) {
        //    res.send('ifexist')
        //})

    });

}

module.exports = user;