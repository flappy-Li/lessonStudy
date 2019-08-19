
var connection = require('./index');

function queryStudentAll(success) {
    var querySql = "select * from student";
    connection.connect();
      connection.query(querySql, function (error, result) {
        if (error !== null) console.log(error);
        success(result);
    })
    connection.end();
}

function queryStudentByClassAndAge(success, classNum, age) {
    var querySql = "select * from student where class = ? and age = ?;";
    query(querySql, success, classNum, age);
}
function queryStudentStuNum(stuNum, success) {
    var querySql = "select * from student where stu_num = ?";
    connection.connect();
    connection.query(querySql, stuNum, function (error, result) {
        if (error !== null) console.log(error);
        success(result);
    })
    connection.end();
}

function query(querySql, ...arg) {
    var params = [...arg];
    connection.connect();
    connection.query(querySql, params, function (error, result) {
        if (error !== null) console.log(error);
        console.log(result);
        // success(result);
    })
    connection.end();
}

module.exports = {
    "queryStudentAll": queryStudentAll,
    "queryStudentByClassAndAge": queryStudentByClassAndAge,
    "queryStudentStuNum": queryStudentStuNum
}