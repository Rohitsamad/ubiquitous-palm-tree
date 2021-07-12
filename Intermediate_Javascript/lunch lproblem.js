function whosPaying(names) {
    var numberofperson = names.length;
    var randompersonposition = Math.floor(Math.random() * numberofperson);
    var randomperson = names[randompersonposition];
    
    return randomperson + " is going to buy lunch today!"
}