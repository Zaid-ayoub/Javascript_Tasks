let inputYear=prompt("enter your year of birth:");
function calculateAge(age) {
    const d = new Date();
    let year = d.getFullYear();
    age = year-inputYear;
    if (age>30 && age<60) {
        console.log("You are not eligible. You may join other programs."
        ); 
    } else if(age>=18 &&age<=30){
        console.log("You are eligible. Start your application.");
        
    } else if(age<18 && age>0){
        console.log("You may join the kids' program.");
        
    }else if (age>60) {
        console.log("You may join the seniors’ program.");
        
    }
}
calculateAge(inputYear);


let str = prompt("enter string that contains uppercase and lower case");


function swapcase(str) {
    return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}
console.log(swapcase(str));

let str2=prompt("enter string sentnece to convert it to camelCase")
function camelize(str2) {
    return str2.split(' ').map((word, index) => index == 0 ? word: word[0].toUpperCase() + word.slice(1)   ).join(''); 

}
  console.log(camelize(str2))

  let arr=["Coding","Academy", "By", "Orange"]
  function remove_array_element(arr, n) {
    var index = arr.indexOf(n);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}
console.log(remove_array_element(arr,"By"));

