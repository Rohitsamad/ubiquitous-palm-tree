
const express = require("express");
const B = require("body-parser");

const app = express();
app.use(B.urlencoded({extended: true}));

app.get("/", function(request, response){
    response.sendFile(__dirname + "/index.html");
});

app.post("/", function(request, response){

    var num1 = Number(request.body.num1);
    var num2 = Number(request.body.num2);

    var result = num1+num2;

    response.send("The result of the calcilation is " + result);
});

app.get("/bmicalculator", function(request, response){
    response.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(request, response){

    var weight = Number(request.body.weight);
    var height = Number(request.body.height);

    var result = weight/height*height;

    response.send("BMI is " + result);
});


app.listen(3000, function(){
    console.log("server started on port 3000");
});