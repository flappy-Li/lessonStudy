
var defaultModule = require('./index');

function queryStudentAll(success) {
   var connection = defaultModule.createConnection();
    var querySql = "select * from student;";
    connection.connect();
    connection.query(querySql, function (error, result) {
        if(error == null) {
           success(result)
        }else {
            console.log('报错')
            console.log(error)
        }
    })
    connection.end();
    // query(querySql, success);
}
function queryStudentStuNum(stuNum, success) {
    var connection = defaultModule.createConnection();
    var querySql = "select * from student where stu_num = ?";
    connection.connect();
    connection.query(querySql, stuNum, function (error, result) {
        if (error !== null) console.log(error);
        console.log(result)
        success(result);
    })
    connection.end();
}
// function queryStudentByClassAndAge(classNum, age) {
//     var querySql = "select * from student where class = ? and age = ?;";
//     query(querySql, success, classNum, age);
// }

// function query(querySql, success, ...arg) {
//     var params = [...arg];
//     connection.connect();
//     connection.query(querySql, params, function (error, result) {
//         if (error !== null) console.log(error);
//         // console.log(result);
//         success(result);
//     })
//     connection.end();
// }

module.exports = {
    "queryStudentAll": queryStudentAll,
    "queryStudentStuNum": queryStudentStuNum
}