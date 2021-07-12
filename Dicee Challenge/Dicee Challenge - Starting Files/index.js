var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomdiceimg = "dice"+ randomNumber1 +".png";
var randomdicesorce = "images/" +randomdiceimg;
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomdicesorce);

var randomNumber2 = Math.floor(Math.random() * 6)+1;
var randomdiceimg1 = "dice"+ randomNumber2 +".png";
var randomdicesorce1 = "images/" +randomdiceimg;
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomdicesorce1);

if (randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 win";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 win";
}
else
{
    document.querySelector("h1").innerHTML = "draw";
}
