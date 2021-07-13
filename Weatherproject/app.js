const express = require("express");
const https = require("https");
const { url } = require("inspector");

const app = express();

app.get("/", function(req, res){
    
    const url = "https://api.openweathermap.org/data/2.5/weather?q=london&appid=99b5fd3aad5a238aa4ee2019caf2c5cc";

    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const desc = weatherData.weather[0].description
            
        })
    })
    res.send("server is up");
})


app.listen(3000, function() {
    console.log("server is running on port 3000.");
})