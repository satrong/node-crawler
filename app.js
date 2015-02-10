var cp = require('child_process');
var config = require('./config.js');

if (config.mode === 'console') {
    cp.fork('./crawler.js');
    return;
}

var http = require('http');
var net = require('net');
var fs = require('fs');
var path = require('path');
var url = require('url');
var port = 8000;
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ port: 8001 });

var MIME_TYPES = {
    '.txt': 'text/plain',
    '': 'text/plain',  
    '.html': 'text/html',  
    '.css': 'text/css',  
    '.js': 'application/javascript',  
    '.json': 'application/json',  
    '.jpg': 'image/jpeg',  
    '.png': 'image/png',  
    '.gif': 'image/gif'
};

var worker;

http.createServer(function (req, res) {
    var filepath = './res' + (req.url === '/'?'/index.html':req.url);
    console.log(filepath);
    fs.readFile(filepath, function (err, body) {
        if (err) {
            res.writeHead(404);
        } else {
            res.writeHead(200, {
                'Content-Type': MIME_TYPES[path.extname(filepath)],
                'Content-Length': body.length,
                'X-Powered-By': 'chc'
            });
            res.write(body);
        }
        res.end();
    });
}).listen(port, function () {
    console.log('监听端口%s中', port);
});

var worker;
wss.on('connection', function connection(_ws) {
    _ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        if (message === 'start') {
            worker = cp.fork('./crawler.js');
            worker.on("message", function (data) {
                console.log(data)
                _ws.send(data);
            });
            worker.on("close", function (code, signal) {
                !code && _ws.send(JSON.stringify({ color: 'redBG', info: '已手动停止抓取' }));
            });
        } else if (message === "stop") {
            worker.kill();
        }

        //ws.send('you said:' + message);

        /// 对所有客户端发送信息
        /*wss.clients.forEach(function each(client) {
            client.send('you said:' + message);
        });*/
    });
});