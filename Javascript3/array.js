"use strict"

window.alert("concat()");

let arr1 = [1,2,3];
let arr2 = [4,5,6];

console.log(arr1.concat(arr2));

window.alert("slice()");

let arr3 = [1,2,3,4,5,6];


console.log(arr3.slice(0,2).concat(arr3.slice(4,7)))

window.alert("splice()");

let arr4 = [1,2,3,4,5];

console.log((arr4.splice(0,2)).length,"splice")

window.alert("print array")


for (let i = 0; i < arr3.length; i++) {
    var print_a = print_a + ", "+ arr3[i];
}

console.log(print_a);

window.alert("forEach()");

let arr5 = [1,2,3,4,5];

const callback = elem => console.log(elem);
arr5.forEach(callback);

