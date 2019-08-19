var fs = require('fs');

var globalConf = require('./config');

var path_name = globalConf.log_path + '/' + globalConf.log_name;

function log(data) {
    console.log(data)
    fs.appendFile(path_name,data + "\n", function(){});
}

module.exports = log;