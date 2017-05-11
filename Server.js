var http = require("http");

http.CreateServer(function(request,response){
response.writeHead(200,{"Content-type": "text/plain"});
response.write("Hello world");
response.end;
}).listen(8888);
