var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'127.0.0.2',
    port:'3306',
    user:'root',
    password:'qq139652389',
    database:'school'
})


module.exports = connection;