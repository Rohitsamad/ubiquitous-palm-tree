const express = require("express");

const app = express();

app.get("/", function(request, response){
    response.send("hello");
});

app.get("/contact", function(request, response){
    response.send("contact me at rohitsamad4@gmail.com");
});

app.get("/about", function(request, response){
    response.send("I am developer and a coder");
});

app.listen(3000, function(){
    console.log("server started on port 3000");
});