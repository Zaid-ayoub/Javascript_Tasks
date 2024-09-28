"use strict"

let arr = [30,45,60,7];
let min = arr[0];
function findSmallest(arr) {
   for (let i = 0; i < arr.length; i++) {
    if(arr[i] < min){
        min=arr[i];

    }
    
   }
    return min;    
}

console.log(findSmallest(arr))

let str="hello";

function AlphabeticalOrder(str){
    var arr = str.split("");
    var res = arr.sort().join("");
    return res;
}

console.log(AlphabeticalOrder(str));

let str2 ="hello from CodingAcademy!";

function countWords (str2){
    const words = str.match(/\S+/g);
    if(words.length!==0){
        return words.length;
    }
    else{
        return 0;
    }
}

console.log(countWords(str2));
