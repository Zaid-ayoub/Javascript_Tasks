"use strict"

let number=prompt("enter the number to get the factorial of it:")
let factorial=1

if(number==0)
{console.log("the factorial is Zero")}

for (number;number>0;number--){
    factorial= factorial*number;
}
console.log(factorial,"factorial")

//Fibonacci

window.alert("Fibonacci");

let fibonacci = prompt("enter Fibonacci");

let number1 = 0;
let number2 = 1;

for (let i = 0; i < fibonacci; i++) {
  let current = number1 + number2;
  number1 = number2;
  number2 = current;
  console.log(current);
}

// prime numbers 

window.alert(" prime numbers ");

let prime_number = prompt("enter prime number");

for (let i = 2; i < prime_number; i++){
    let flag = true;
    for (let j = 2; j < i-1; j++) {
        if (i%j == 0){
            flag = false;
            break;
        }
    }
    if(flag){
        console.log(i)
    }
        
}  

window.alert(" 2D Array ");

let mat = [ [ 1, 2, 3 ],
            [ 4, 5, 6 ],
            [ 7, 8, 9 ] ];


//reverse order

window.alert("reverse order");

let arr = [1,2,3,4,5];

for (let i = arr.length-1; i >= 0; i--) {

    var reverse = reverse + " " +arr[i];
    
}
console.log(reverse);



