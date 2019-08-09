var http = require('http');
var url = require('url');
var globalConfig = require('./conf.js');


http.createServer(function (request, repsonse) {
    var pathName = url.parse(request.url).pathname;
    var params = url.parse(request.url, true).query;
    
}).listen(globalConfig['port']);

function PositionTypeStatic() {
    var static = globalConfig.position_type_static;
    for (var i = 0; i < static.length; i ++) {
        
    }
}