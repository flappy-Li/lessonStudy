var path = new Map();
var queryStudent = require('../server/studentServer');

function getData(req, res) {
    queryStudent.queryStudentAll(function (result) {
        var resArr = [];
        for (var i = 0; i < result.length; i ++ ) {
            resArr.push(result[i].name);
        }
        res.write(resArr)
        res.end();
    })
   
}

path.set('/getData', getData);

function login(req, res) {

    queryStudent.queryStudentAll(function (result) {
       
        res.write(resArr)
        res.end();
    })
}   
path.set('/login', login);

module.exports.path = path;