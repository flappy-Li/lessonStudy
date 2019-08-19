var fs = require('fs');
var globalConf = {};
var config = fs.readFileSync('./server.conf')

var confs = config.toString().split('\r\n')
for (let i = 0; i < confs.length; i++) {
    var tempConfig = confs[i].split('=');
    globalConf[tempConfig[0]] = tempConfig[1];
}

if (globalConf.position_type_static) {
    globalConf.position_type_static = globalConf.position_type_static.split('|');
}else {
    throw new Error("配置文件异常, 缺少:position_type_static");
}
module.exports = globalConf;