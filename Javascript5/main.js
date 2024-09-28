"use strict"

let obj = {
    name : "adam" ,
    age : 25 ,
}

obj.gender = "male";

console.log(obj);

window.alert (" Object.values()");

console.log(Object.values(obj));

window.alert (" Object.entries()");

console.log(Object.entries(obj));

window.alert ("Object.assign()");

let obj2 = {
    dob: "2002"
}

console.log(Object.assign(obj,obj2));

console.log(Object.seal(obj));