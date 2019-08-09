var net = require('net');

var socket = net.connect(610, '192.168.1.75');
socket.setTimeout(2000);
socket.on('connect', function () {
    console.log('客户端连接服务器成功')
    socket.write('hello, service')
});
socket.on("data", function (data) {
    console.log(data.toString());
    socket.end();
});
socket.on('timeout', function(){
    console.log('超时啦');
    socket.end();
})
socket.on('end', function() {
    console.log('客户端已关闭')
})
