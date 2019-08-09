var fs = require('fs');
var globalConf = {};
var config = fs.readFileSync('./server.conf')

var confs = config.toString().split('\r\n')
for (let i = 0; i < confs.length; i++) {
    var tempConfig = confs[i].split('=');
    globalConf[tempConfig[0]] = tempConfig[1];
}
console.log(globalConf)
module.exports = globalConf;