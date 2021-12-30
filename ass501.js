
 // program to find the factorial of a number

const number = parseInt(prompt('Enter a positive integer: '));
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}
else if (number === 0) {
    console.log('The factorial of ' + number + ' is 1.');
}
else {
    var fact = 1;
    for ( var i = 1; i <= number; i++) {
        fact =fact * i;
        console.log('The factorial of ' + number + ' is ' + fact);    
    }
    
}