var net = require('net');
var fs = require('fs');
var globalConf = require('./conf');

var server = net.createServer();

server.listen(globalConf.port, '192.168.1.75');

server.on('listening', function () {
    console.log('服务已启动')
})

server.on('connection', function (socket) {
    socket.on('data', function (data) {
        var url = data.toString().split('\r\n')[0].split(' ')[1];
        try {
            var dataFile = fs.readFileSync(globalConf.basePath + url);
            socket.write('HTTP/1.1 200OK\r\n\r\n')
            socket.write(dataFile);
        } catch (error) {
            socket.write('HTTP/1.1 404NotFound\r\n\r\n<html><body><h1>404 NOT FOUND</h1></body></html>')
        }
        socket.end();
    })
})