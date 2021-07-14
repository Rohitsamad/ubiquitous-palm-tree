//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
    const firstname = req.body.Fname;
    const lastname = req.body.Lname;
    const email = req.body.email;

    const data = {
        members: [
            {
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstname,
                LNAME: lastname
            }
        }
        ]
    };

    const jsondata = JSON.stringify(data);

    const url = "https://us6.api.mailchimp.com/3.0/list/c04b75735c";

    const options = {
        method: "POST",
        auth: "rohit1:e7c468ffe1b98431dde62e07937928d4-us6"
    }

    const request = https.request(url, options, function(response) {
        
        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }
        
        response.on("data", function(){
            console.log(JSON.parse(data));
        })
    })

    request.write(jsondata);
    request.end();

});

app.listen(3000, function() {
    console.log("server is running on port 3000");
});

//API Key
//e7c468ffe1b98431dde62e07937928d4-us6

//unique id  c04b75735c