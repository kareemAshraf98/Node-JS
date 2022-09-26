var http = require('http');
var fs = require('fs');
var url = require('url');
function register(req, resp){
    let urlDetails = url.parse(req.url,true);
    if(urlDetails.pathname == "/form" && req.method == "GET"){
        resp.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile("form.html", function(error, data){
            console.log(error);
            resp.end(data);
        })
    }else if(urlDetails.pathname == "/form" && req.method == "POST"){
        req.on("data", (data)=> {
            let check = url.parse("/?" + data.toString(),true).query;
            if(check.psw.length < 8){
                resp.end("password must more than 8 char");
            }else{
                resp.end("Registration Successfully");
            }
        })
    }
}
http.createServer(register).listen(8081);