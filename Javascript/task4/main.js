"use strict"

let arr = ["Coding", "Academy", "By", "Orange”"];

arr.push("Jordan");
console.log(arr);

arr.pop();
arr.pop();
arr.pop();
console.log(arr);

arr.unshift("Welcome","To");
arr.push("By","Orange")
console.log(arr);

arr.shift();
arr.shift();
arr.shift();
console.log(arr);

arr.unshift("Coding")
var str= arr[0];
for (let i = 1; i < arr.length; i++) {
    str = str + " " + arr[i];
    
}
console.log(str);

console.log(arr);

arr.splice(1,2)
console.log(arr);

console.log("-------------------------");

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
console.log(vegetables);

fruit.shift();
console.log(fruit);

let num =fruit.indexOf("orange");
console.log(num);

let num2 = vegetables.length;
vegetables.push(num2);
console.log(vegetables);

let food = fruit.concat(vegetables);
console.log(food);

food.splice(4,2);
console.log(food);

food.reverse();
console.log(food);

food.toString();

console.log(food.toString())