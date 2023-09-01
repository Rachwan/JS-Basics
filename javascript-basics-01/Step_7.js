function calculateTheNumber(shoeS, birthY) {
    shoeS *= 2;
    shoeS += 5;
    shoeS *= 50;
    shoeS -= birthY;
    shoeS += 1766;
    return shoeS;
}

var shoeSize = parseFloat(prompt("Enter your shoe size:"));
var birthYear = parseInt(prompt("Enter your birth year:"));

alert(calculateTheNumber(shoeSize, birthYear));