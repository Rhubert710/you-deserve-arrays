const prompt = require('prompt-sync')({sigint: true});



let a = 1;
let b = 2;
let c = 3;

let isLongerThan10 = false;
let array = [a, b, c];

if(array.length>=10){
   isLongerThan10 = true;
}

console.log(isLongerThan10);

