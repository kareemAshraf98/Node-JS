var fs = require('fs');
var url = require("url");
var http = require("http");

function request(req, resp){
    let urlDetal = url.parse(req.url,true);
    if(urlDetal.pathname == "/"){
        resp.writeHead(200, {'Content-type': 'text/html'});
        fs.readFile("Home.html", function(error, data){
            console.log(error);
            resp.end(data);
        })
    }else if(urlDetal.pathname == "/about"){
        resp.writeHead(200, {'Content-type': 'text/html'});
        fs.readFile("about.html", function(error,data){
            console.log(error);
            resp.end(data);
        })
    }else if(urlDetal.pathname == "/contact"){
        resp.writeHead(200, {'Content-type': 'text/html'});
        fs.readFile("contact.html", function(error,data){
            console.log(error);
            resp.end(data);
        })
    }
}
http.createServer(request).listen(8080);