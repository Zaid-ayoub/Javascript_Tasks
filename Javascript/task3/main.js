let str = "Welcome to Orange";

console.log(str.toUpperCase());

console.log(str.substring(8,10).toUpperCase());

str.replace("Welcome","Hello");
str.replace("to","from");

console.log(str.replace("Welcome to","Hello from"));

console.log(str.toLowerCase());

console.log(str.length);

console.log(str.replace("Orange","\"Orange\""));

console.log(str.concat(" ","Jordan"));

window.alert("enter word that will replaces all occurrences of the first letter of a string with(*)");

let str2 = prompt("enter the word:");
str2.split("");
character = str2.charAt(0);
for(let i=1;i<str2.length;i++){
    if(str2[i]==character){
        str2=str2.replace(str[i],"*")
    }   
}
console.log(str2)