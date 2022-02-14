const prompt = require('prompt-sync')({sigint: true});



let a = 1;
let b = 2;
let c = "a";

let firstItemIsNumber = false;
let array = [a, b, c];

if(typeof array[2] == "string"){
    if(array[2][1]){
        console.log(array[2][1]);
    }
    else{
        console.log("Third Item is Not long enough");
    }
}
else{
    console.log("Third Item is Not String");
}



