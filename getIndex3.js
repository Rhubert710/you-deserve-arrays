const prompt = require('prompt-sync')({sigint: true});



let a = 1;
let b = 2;
let c = 3;

let array = [a, b, c];

if(array.length<4){
    console.log(array[3]);
}
else{
    console.log(array[array.length-1]);
}
