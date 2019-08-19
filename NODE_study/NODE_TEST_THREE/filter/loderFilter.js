var url = require('url');
var globalConfig = require('../conf.js');

function loginFilter (request, response) {
    var pathName = url.parse(request.url).pathname;
    if (pathName == '/login.html' || patName == '/login' || PositionTypeStatic(pathName)) {
        return true
    }
    if(request.headers.cookie) {
        var cookies = request.headers.cookie.split(';');
        for(var i = 0; i < cookies.length; i++) {
            if (cookies[i].split('=')[0].trim() == 'id') return true;
        }
    }
    response.writeHead(302, {"location": "/login.html"});
    response.end();
    return false;
}

function PositionTypeStatic(pathNames) {
    var static = globalConfig.position_type_static;
    for (var i = 0; i < static.length; i++) {
        if (static[i] == '.html') continue;
        if (pathNames.indexOf(static[i]) == pathNames.length - static[i].length) return true;
    }
    return false
}

module.exports = loginFilter;