const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = [];

let workitems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", function(req, res){

    var today = new Date();
    var currentDay = today.getDay();
 //   var day = "";

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

    /*
    switch (currentDay) {
        case 0:
            day = "Sunday";
            
            break;
            case 1:
            day = "Monday";
            
            break;
            case 2:
            day = "Tuesday";
            
            break;
            case 3:
            day = "Wednesday";
            
            break;
            case 4:
            day = "thursday";
            
            break;
            case 5:
            day = "friday";
            
            break;

            case 6:
            day = "Saturday";
            
            break;
    
        default:
            
    } */
    res.render("list", {
        listtitle: day,
        newItems: items
    });

    app.post("/", function(req, res){


        var item = req.body.newItem;

        if (req.body.list === "work") {
            workitems.push(item);

            res.redirect("/work");
        } else {

            items.push(item);
            
            res.redirect("/");
        }

    });

});

app.get("/work", function(req, res){
    res.render("list", {listtitle: "Work List", newItems: workitems});
});




app.listen(3000, function(){
    console.log("Server started on port 3000");
});