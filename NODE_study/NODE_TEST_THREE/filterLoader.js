const fs = require('fs');
var globalConfig = require('./conf.js');
var files = fs.readdirSync(globalConfig["filter_path"]);
var filterSet = []

for (var i = 0; i < globalConfig.length; i++) {
    var temp = require("./" + globalConfig["filter_path"] + "/" + files[i]);
    filterSet.push(temp);
    
}

module.exports = filterSet;