
let str = prompt("enter string to convert is to an array:")
function stringToArray(str) {
    var arr = str.split(" ");
    return arr;
}
console.log (stringToArray(str));


let num = prompt("enter 10 number digits:");
function hiddenForm(num) {
    var arr2 = num.split("");
    if(arr2.length==10){
    for (let i = 0; i <= 6; i++) {
        arr2[i]="*"; 
    }}
    else alert("invalid input")
    num = arr2.join("")
    console.log(num);

}
hiddenForm(num);


let email = prompt("enter email that contains UnderScore and @ and (.):");
function emailHide(email) {
    var underScore = email.split("_");
    var atChar = underScore[1];
    console.log(underScore);
    
}
emailHide(email);

let text = prompt("enter any text");
var newText = [];
function capitalizeFirstLetter(text) {
    let word = text.split(" ")
    for (let i = 0; i < word.length; i++) {
        newText.push(word [i].charAt(0).toUpperCase()+ word[i].slice(1));
        
    }
    return newText.join(" ")
}
console.log(capitalizeFirstLetter(text));

let num2 = prompt("enter series of numbers:");
var newNumArr= [];
function flipNumbers(num2) {
    let arrNum = num2.split("");
    for (let i = arrNum.length-1; i >= 0; i--) {
        newNumArr.push(arrNum[i]); 
        
    }
    return newNumArr.join("");
}
console.log(flipNumbers(num2));

let a = prompt("enter the value of a:");
let b = prompt("enter the value of b:");
function swapVariables(a,b) {
    a=a+b;
    b=a-b;
    a=a-b;
    console.log("a is",a)
    console.log("b is",b)
}
swapVariables(a,b);

let text2 = prompt("enter any text");
let index = prompt("enter the number of the letter that you what to remove");
let newTextArr2 = [];
function indexRemove(text2,index) {
    let textArr = text2.split("");
    textArr.splice((index-1),1)
    return textArr.join("");
}
console.log(indexRemove(text2,index));


let firstText = prompt("enter any text");
let secondText = prompt("enter any text");
function marge(firstText,secondText) {
    let arr3 = firstText.split("");
    let arr4 = secondText.split("");
    arr3.shift();
    arr4.shift();
    let arr5 = arr3.concat(arr4);
    return arr5.join("");
}
console.log(marge(firstText,secondText));

let letter = prompt("enter letter that you want to search");
let text3 = prompt("enter the string to search in it");
function apearLetter(letter,text3) {
    let firstChar = text3.charAt(0);
    let lastChar = text3.charAt(text3.length - 1);
    if (letter==firstChar || letter==lastChar) {
        console.log(true)
    }
    else console.log(false);
    
}
apearLetter(letter,text3);

let str2=prompt("enter paragraph to convert it to array of strings:")

function convertToArray(str2) {
    let convertArr = str2.split(" ");
    console.log(convertArr);
    
}
convertToArray(str2);

let str3=prompt("enter string to sort it by letters")

function sortAlpha(str3) {
    return str3.split("").sort().join("");
}
console.log(sortAlpha(str3));