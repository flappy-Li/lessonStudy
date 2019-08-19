var queryStudent = require('../dao/queryStudent');

function queryStudentAll(success) {
    queryStudent.queryStudentAll(success)
}
function queryStudentStuNum(stuNum, success) {
    queryStudent.queryStudentStuNum(stuNum, success)
}
// function queryStudentByClassAndAge(success) {
//     queryStudent.queryStudentByClassAndAge(success)
// }


module.exports = {
    "queryStudentAll": queryStudentAll,
    "queryStudentStuNum": queryStudentStuNum
}
