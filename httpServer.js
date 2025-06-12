import http from "http";

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Hello Hear");
    res.end();
}).listen(8081);
