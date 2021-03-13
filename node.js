const http = require('http');

    const requestListener = function (req, res) {
    res.writeHead(200);
    res.end('Sorry the rest of the content is locked behind dlc');
        }

const server = http.createServer(requestListener);
server.listen(8080);