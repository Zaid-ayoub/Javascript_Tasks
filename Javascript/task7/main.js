for (let i = 1; i <= 100; i++) {
    const arr = []
    if (i%3==0 && i%5==0) {
        arr.push("FizzBuzz") ;
        
    }else if(i%5==0) {
        arr.push("Fizz") ;
        
    }else if(i%3==0){
        arr.push("Buzz");
    }else arr.push(i.toString()) ;
    console.log(arr);
    
}

function myFunction(number, current = 1, results = []) { 
    if (current > number) { 
        return results; 
    } 
  
    let output = []; 
    if (current % 3 === 0) output.push('Fizz'); 
    if (current % 5 === 0) output.push('Buzz'); 
  
    if (output.length === 0) { 
        results.push(current); 
    } else { 
        results.push(output.join('')); 
    } 
  
    return myFunction(number, current + 1, results); 
} 
const fizzBuzzArray = myFunction(100); 
console.log(fizzBuzzArray);

let temp = prompt("enter string")
let letter = prompt("the character ot word that is in string:")
re = new RegExp(letter,'gi')
var count = (temp.match(re) || []).length;
console.log(count);

for (let i = 0; i <= 20; i++) {
  console.log(i);
}

for (let i = 3; i <= 29; i+=2) {
    console.log(i);
  }

  for (let i = 12; i >= -14; i-=2) {
    if(i!=0)
    console.log(i);
  }

  for (let i = 50; i >= 20; i--) {
    if(i%3==0)
    console.log(i);
  }

let str="CodingAcademy";
let arr= [7, 500, 'KH404','black',36]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);   
}
let newArr=str.split("");
for (let i = newArr.length-1; i >= 0; i--) {
    console.log(newArr[i]);
}

let arr1=[7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
let  mnb = [];
let oddArr = [];
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i]%2==0) {
        evenArr.push(arr1[i]).sort();
    } else {oddArr.push(arr1[i]).sort();}
  
           
    
}