var globalConfig = require('./config');
var fs = require('fs');
var http = require('http');
var url = require('url');
var loader = require('./loader');
var log = require('./log');

http.createServer(function (request, response) {
    log('请求已接受');
    var pathNames = url.parse(request.url).pathname;
    var params = url.parse(request.url, true).query;
    var staticType = positionStaticType(pathNames);
    log(pathNames)
    log(staticType)
    if (staticType) {
        //请求的静态文件
        try {
            var data = fs.readFileSync(globalConfig["path"] + pathNames);
            response.writeHead(200);
            response.write(data)
            response.end();
        } catch (error) {
            log(error);
            response.writeHead(404);
            response.write('<html><body><h1>404 NOT FOUND</h1></body></html>');
            response.end();
        }
    }else {
        //请求的动态文件
        console.log(loader.get(pathNames))
        if(loader.get(pathNames) != null) {
            log(pathNames)
            try {
                loader.get(pathNames)(request, response)
            } catch (error) {
                response.writeHead(500);
                response.write("server naver");
                response.end();
            }
        }else {
            response.writeHead(404);
            response.write("<html><body><h1>404 NotFound</h1></body></html>");
            response.end();
        }
    }
}).listen(globalConfig['port']);
log("服务已启动")

function positionStaticType(pathNames) {
    var static = globalConfig.position_static_type;
    for(var i = 0; i < static.length; i ++) {
       return pathNames.indexOf(static[i]) == pathNames.length - static[i].length ? true : false;
    }
}