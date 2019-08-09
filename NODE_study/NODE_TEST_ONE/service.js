var net = require('net');
var serve = net.createServer();
serve.listen(610, '192.168.1.75');
serve.on('listening', function () {
    console.log('服务已启动');
})

serve.on('connection', function (socket) {
    console.log("有新的连接")
    socket.on("data",function (data) {
        console.log(data.toString());
        socket.write("hello, client");
        serve.close();
    })
})
serve.on('close',function() {
    console.log('服务端已关闭')
})
