const prompt = require('prompt-sync')({sigint: true});



let a = 1;
let b = 2;
let c = 3;

let firstItemIsNumber = false;
let array = [a, b, c];

if(typeof array[0] == "number"){
    firstItemIsNumber = true;
}

console.log(firstItemIsNumber);

