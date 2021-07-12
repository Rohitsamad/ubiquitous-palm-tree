var output = [];
var count = 1;

function fizzbuzz() {
    for(count =1; count< 101; count++) {
        if(count % 3 === 0 && count % 5 ===0){
            output.push("Fizzbuzz");
        }
        else if (count % 3 === 0) {
            output.push("fizz");
        } else if(count % 5 === 0){
            output.push("Buzz");
        } 
        else {
            output.push(count);
        }
    }
    console.log(output);
}