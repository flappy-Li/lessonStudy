var fs = require('fs');
var globalConfig = {};
var config = fs.readFileSync('./server.conf');

var confs = config.toString().split('\r\n');
for(var i = 0; i < confs.length; i ++){
    var tempConf = confs[i].split('=');
    globalConfig[tempConf[0]] = tempConf[1];
}

if (globalConfig.position_static_type) {
    globalConfig.position_static_type = globalConfig.position_static_type.split('|')
}else {
    throw new Error("配置文件异常: 缺少: position_static_type");
}

module.exports = globalConfig;