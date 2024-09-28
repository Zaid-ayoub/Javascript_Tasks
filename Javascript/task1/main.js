//divide the cash and liability to get the cash flow ratio

window.alert("Cash flow ratio")

let cash = prompt("enter the amount of cash:");
let  current_liabilities = prompt("enter  current liabilities:");

let cash_flow = cash/current_liabilities;//division to get cash flow ratio

console.log("the cash flow ratio is:",cash_flow)//print out cash flow division

//Net income

window.alert("Net income")

let revenues = prompt("enter the revenues:");
let  expenses = prompt("enter  expenses:");

let net_income = revenues - expenses;//

console.log("the net income is:",net_income);//print out net income

//Total assets 

window.alert("Total assets")

liabilities = prompt("enter the liabilities:");
let  equity = prompt("enter  equity:");

let total_assets = liabilities + equity;

console.log("the total assests:",total_assets);

//Net income(using profit margin and sales) 

window.alert("Net income(using profit margin and sales)")

let profit = prompt("enter the profit:");
let  sales = prompt("enter  sales:");

net_income = profit*sales;

console.log("Net income(using profit margin and sales):",net_income);

//Average

window.alert("Average");

let number1 = prompt("enter the first number:");
let count=1;

let number2 = prompt("enter the second number:");
count++;

let number3 = prompt("enter the third number:");
count++;

let average = (number1+number2+number3)/count;

console.log("the average is:",average);

//Discount

window.alert("Discount");

let price = prompt("enter the price:");
do {
    let discount = prompt("enter the discount between 0-1 without (%):")
}while(discount>1 && discount<0)

console.log("the discount is:",discount);

//Age limit

widow.alert("Age limit");

let age = prompt("enter your age:");

if(age<30 && age>18){
    console.log("true");
}else console.log("false");

//Exponential 

widow.alert("Exponential");

let  base = prompt("enter the base:");
let power = prompt("enter the power");

let exponential = Math.pow(base,power);

console.log(exponential);

//Remainder

window.alert("Remainder");

let  first_number = prompt("enter the first:");
let second_number = prompt("enter the second:");

let remainder = first_number%second_number;

console.log("the remainder is:",remainder);
