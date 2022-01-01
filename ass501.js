
 // program to find the factorial of a number

const number = parseInt(prompt('Enter a positive integer: '));
if (number < 0) {
console.log("False Number");
}
else if (number === 0) {
console.log(" 0");
}
else {
    var fact = 1;
    for ( var i = 1; i <= number; i++) {
        fact =fact * i;
        console.log( fact);    
    }
    
}