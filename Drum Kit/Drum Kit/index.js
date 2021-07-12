var numberofdrumbutton = document.querySelectorAll(".drum").length;

for(var i= 0; i< numberofdrumbutton; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        alert("I got clicked");
    });
}


