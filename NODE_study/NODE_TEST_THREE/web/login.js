var path = new Map();
var queryStudent = require('../server/studentServer');
var url = require('url');
function getData(request, response) {   
    queryStudent.queryStudentAll(function (result) {
        console.log(result)
        var resArr = [];
        for (var i = 0; i < result.length; i ++) {
            resArr.push(result[i].name);
        }
        response.write(resArr.toString())
        response.end();
        
    })
}
path.set("/getData", getData);

function login(request, response) {
    request.on('data', function (data) {
        var stuNum = data.toString().split('&')[0].split('=')[1];
        var password = data.toString().split('&')[1].split('=')[1];
        queryStudent.queryStudentStuNum(stuNum, function (result) {
            var res = '';
            if (result == null & result.length == 0) {
                res = 'NO';
            } else {
                if (result[0].pwd == password) {
                    res = 'OK';
                    response.writeHead({"Set-cookie": "id" + result[0]}.id);
                    response.end();
                } else {
                    res = 'NO';
                }
            }
            response.write(res)
            response.end();
        })
    })
   
}
path.set('/login', login);


module.exports.path = path