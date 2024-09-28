"use strict"

window.alert("password");

let password = prompt("enter your password");

if(password.length>=8){
    console.log("Your password is strong")
}
else console.log("the password is weak");

window.alert("color");

let color = prompt("enter color");

if(color=="red" || color=="blue" || color=="green"){
    console.log("color is a primary color");
}

window.alert("enter number");

let y = prompt("enter valye of y");
if (y<0) {
    console.log("y is a negative number");
}
else     console.log("y is a positive number");

window.alert("array");

let list = [1,2,3];

if(typeof(list)=="object"){
    console.log("It's an array")
}