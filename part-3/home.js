var express = require("express");
var route = express();

route.get("/",function(req,res){
    res.sendFile(__dirname + "/home.html")
});
route.listen(8080)