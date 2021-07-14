const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){

    var today = new Date();

    if (today.getDate() === 6 || today.getDate() === 0){
        res.send("ya today is holioday");
    } else {
        res.send("Booo!  I have to work!");
    }
//    res.send("hello");


});


app.listen(3000, function(){
    console.log("Server started on port 3000");
});