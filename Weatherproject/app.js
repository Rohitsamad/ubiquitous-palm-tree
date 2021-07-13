const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
    const city = req.body.cityInput;
    const apikey = "99b5fd3aad5a238aa4ee2019caf2c5cc";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apikey;

    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const desc = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const url = "http://openweathermap.org/img/wn/"+ icon +"@2x.png";
            res.write("<h1>the weather is "+ desc + "</h1>");
            res.write("<h2>The temperature in "+city+" is" + temp+ "</h2>");
            res.write("<img src="+url + ">");
            res.send();
        })
    })
})
    




/*
app.get("/", function(req, res){
    
    

*/
app.listen(3000, function() {
    
})
