var queryStudent = require('../dao/queryStudent');

function queryStudentAll(success) {
    queryStudent.queryStudentAll(success)
}
function queryStudentByClassAndAge(success) {
    queryStudent.queryStudentByClassAndAge(success)
}
    
function queryStudentStuNum(success) {
    queryStudent.queryStudentStuNum(success)
}

module.exports = {
    "queryStudentAll": queryStudentAll,
    "queryStudentByClassAndAge": queryStudentByClassAndAge,
    "queryStudentStuNum": queryStudentStuNum
}
