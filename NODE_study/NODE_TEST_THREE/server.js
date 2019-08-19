var http = require('http');
var url = require('url');
var fs = require('fs');
var globalConfig = require('./conf.js');
var loader = require('./loader.js');
var filterSet = require('./filterLoader.js');
var log = require('./log.js');

http.createServer(function (request, response) {
    log('HTTP请求已接受')
    var pathNames = url.parse(request.url).pathname;
    var params = url.parse(request.url, true).query;
    var staticType = PositionTypeStatic(pathNames)
    log(pathNames)
    for (var i = 0; i < filterSet.length; i ++) {
        var flag = filterSet[i](request, response);
        if(!flag) return;
    }
    log(staticType)
    if (staticType) {
        //请求的静态文件
       try {
            var data = fs.readFileSync(globalConfig["page_path"] + pathNames);
            response.writeHead(200);
            response.write(data);
            response.end();
       } catch (error) {
            response.writeHead(404);
            response.write("<html><body><h1>404 NotFound</h1></body></html>");
            response.end();
       }
    }else {
        //请求的动态文件
        if (loader.get(pathNames) != null) {
            try {
                loader.get(pathNames)(request, response);
            } catch (error) {
                response.writeHead(500);
                response.write("server naver");
                response.end();
            }
        } else {
            response.writeHead(404);
            response.write("<html><body><h1>404 NotFound</h1></body></html>");
            response.end();
        }
    }
}).listen(globalConfig['port']);
log("服务已启动")
function PositionTypeStatic(pathNames) {
    var static = globalConfig.position_type_static;
    for (var i = 0; i < static.length; i ++) {
        if (pathNames.indexOf(static[i]) == pathNames.length - static[i].length) return true;
    }
    return false
}