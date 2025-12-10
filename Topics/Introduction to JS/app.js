console.log("Hellow world of Java Script");


// Data types

// string "dsad" 'dasdas' "20" 
// number 20 30 40 20.32
// boolean true false



console.log(typeof "muhammad");
console.log(typeof 20);
console.log(typeof true);






// variables


// we can redeclare and reassign var "Its not used now"

var username = "Muhammad Ayan";
console.log(username);
var username = "Khan zada";    // redeclare
username = "call me "   // reassign
console.log(username);



// let vriable... We cant redeclare a let . But we can reassign it 
let username3 = "muhmmad ayan";
console.log(username3);
username3 = "Khan";
console.log(username3);



// const varible once created , never reassign nor redeclre
const greet = "how are you ?";
console.log(greet);
// greet = "hellow"; X
// console.log(greet);  X


// prompt and alert 
const usernameC = prompt("Enter username ");
console.log(usernameC);

alert("Enetring in Danger Area")




// concatination

const username4 = prompt("Enter usernme");
const age = prompt("Enter age");
const city = prompt("Enter City");
const email = "ayankhan99@gmail.com";

console.log("Name of User is " + username4 + " Age is " + age + " He lives in " + city + " Email is " + email);


const num1 = "10";
const num2 = "30";
console.log(Number(num1)  + Number(num2));



