var http = require("http");
var s = http.createServer(function(request,response){
	response.write("Hola alejo");
	response.end();
});

s.listen(8000);
console.log("Server Runing!");