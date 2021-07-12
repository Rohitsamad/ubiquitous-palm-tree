prompt("What is your name?");
prompt("What is there name?");

var lovescore = Math.random() *100;
lovescore = Math.floor(lovescore) +1 ;

if(lovescore >70){
    alert("Your love score is "+ lovescore + "% You have a perfect match");
}
if (lovescore>30 && lovescore<=70)
{
    alert("Your love score is "+ lovescore + "%");
}
if (lovescore <= 30)
{
    alert("Your love score is "+ lovescore + "% you got together by oil nad water");
}
