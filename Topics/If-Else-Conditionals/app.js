let age1 = 20;
if(age1>=20){
    console.log("Adult");
    }
else{
    console.log("Under 20 Not an Adult");
}



const age2 = 18;
if(age2>=20){
    console.log("Admission successful");
}
else if(age2>=18 && age2<20){
    console.log("1000 Rupees Extra");
}
else {
    console.log("Nikla yahan sa");
    
}



var age3 = prompt("Enter Your age") ;

if(age3 >= 18){
    console.log("gym ma admission milaiga");

    if(age3 >= 60){
        console.log("kiya tum krskta ho bhai?");
        
    } else {
        console.log("ajao tum 60 sa chota ho");
        
    }
    
} else {
    console.log("admission nahi milaiga");
    
}



















// var speed = 50;

// if(speed <= 30){
//     console.log("Too slow");
    
// } else if(speed > 30 && speed <= 60){
//     console.log("Safe speeding");
    
// } else if(speed > 60 && speed <= 100){
//     console.log("Speeding");
    
// } else {
//     console.log("Dangerously Fast");
    
// }


// var returnBook = 15

// if(returnBook === 0){
//     console.log("Koi fine nahi");
// } else if(returnBook >= 1 && returnBook <= 5){
//     console.log("$1 ka fine lagaiga ==> $" , returnBook * 1);
// } else if(returnBook >= 6 && returnBook <= 10){
//     console.log("$2 ka fine lagaiga ==> $" , returnBook * 2);
// } else {
//     console.log("$5 ka fine lagaiga ==> $" , returnBook * 5);
// }



// var ticket = true;
// var age = 12;

// if(ticket && age >= 18){
//     console.log("Welcome to our event");
    
// } else {
//     console.log("Hooo kon bhai tum! kisna bulaya ha");
    
// }



// var battery = -2;

// if(battery >= 80 && battery <= 100){
//     console.log("Fully charge");
    
// } else if(battery >= 50 && battery <= 79){
//     console.log("Good Battery");
    
// } else if(battery >= 20 && battery <= 49){
//     console.log("low battery");
    
// } else if(battery <= 20 && battery >= 0){
//     console.log("Charge krla bhai!");
    
// } else {
//     console.log("kiya chah rha ha");
    
// }



// var customerType = "student";
// var age = 20;

// if(customerType === "senior" && age >= 60){
//     console.log("30% ka discount miljayega");
    
// } else if(customerType === "student" && age >= 20){
//     console.log("Bacha ha tu 20% discount lela");
    
// } else {
//     console.log("lena ha to loo warna aga brho.");
    
// }







// var temperature = -10;

// if(temperature <= 10){
//     console.log("Heavy jacket");
    
// } else if(temperature > 10 && temperature <= 20){
//     console.log("sweater");
    
// } else if(temperature > 20 && temperature <= 30){
//     console.log("Tshirt");
    
// } else {
//     console.log("chaddi banyaan");
    
// }






// 7. Water Intake Reminder
// Based on activity level, suggest water intake:

// Sedentary: 2L
// Moderate: 2.5L
// Active: 3L+
// 8. Exam Result Evaluation
// Given three subject marks, print:

// "Pass" if all marks are 40 or above
// "Fail" if any mark is below 40
// 9. App Theme Selection
// Based on time of day (0–23), select theme:

// 6–17: Light Mode
// Otherwise: Dark Mode
// 10. Meal Type Identifier
// Based on time of day (0–23), identify meal:

// 6–10: Breakfast
// 12–14: Lunch
// 18–21: Dinner
// Any other time: Snack




// var age = 12;
// var country = "Pakistan";
// var ban = false;



// if(age >= 18 && age <= 35 && (country === "Pakistan" || country === "India") && !ban){
//     console.log("eligible");
    
// } else {
//     console.log("not eligible");
    
// }





// if(age >= 18 && age <= 35){
//     if(!ban && (country === "Pakistan" || country === "India")){
//         console.log("eligible");
//     } else {
//         console.log("not eligible due to country or ban");
        
//     }
    
    
// }else {
//     console.log("not eligible");
    
// }





































// // Pthon File Remaining Questions 

// //  Q8;
// var result1=prompt("enter marks of subject 1");
// console.log(result1);
// var result2=prompt("enter marks of subject 2");
// console.log(result2);
// var result3=prompt("enter marks of subject 3");
// console.log(result3);
// if(result1>=40 && result2>=40 && result3>=40){
//     console.log("Pass")
// }else{
//     console.log("fail")
// }


// // Q9:
// var time = 7;
// if(time>=6 && time <= 17){
//     console.log("light mode")
// }else{
//     console.log("dark mode")
// }


// // Q12:
// var mealidentifier = 6;
// if(mealidentifier>=6 && mealidentifier<=10){
//     console.log("Breakfast")
// }else if(mealidentifier>=12 && mealidentifier<=14){
//     console.log("Lunch")
// }else if(mealidentifier>=18 && mealidentifier<=21){
//     console.log(Dinner)
// }else{console.log("Snack")}


// // Python File Remaining Questions Done!!!!

// // Q1:
// var age = 18;
// if(age>=18 && age<=100){
//     console.log("You are an Adult")
// }else if(age>=0 && age<=17){
//     console.log("you are a minor")
// }
// else{console.log("not eligible")}

// // Q2:
// var num = 18;
// if(num>=0 ){
//     console.log("positive")
// }else{
//     console.log("Negative")
// }

// // Q3:
// var num1 = 18;
// if(num1%2==0 ){
//     alert("positive number")
// }else{alert("odd number")}

// // Q4:
// var username = prompt("Enter Your Username")
// console.log("username")
// if(username=="admin"){
//     console.log("Welcome Admin")
// }else{
//     console.log("Access denied")
// }

// // Q5:
// var numA = 11;
// var numB = 12;
// if(numA==numB){
//     console.log("Both numbers are same")
// }else{
//     console.log("The numbers are different")
// }

// // Q6:
// var number1 = 1;
// var number2 = 12;
// if(number1>number2){
//     console.log("First is larger")
// }else{
//     console.log("Second is larger")
// }

// // Q7:
// var numbernew = 12;
// if(numbernew>=100){
//     console.log("Too big")
// }else{
//     console.log("within range")
// }

// // Q8:
// var score = 20;
// if(score>=50){
//     console.log("You Passed!")
// }else{
//     console.log("You Failed")
// }

// // Q9:
// var temp = 13;
// if(temp>=30){
//     console.log("It's Hot")
// }else{
//     console.log("It's Not Hot")
// }

// // Q10:
// var numbersecond = 0;
// if(numbersecond==0){
//     console.log("Zero")
// }else{
//     console.log("Not Zero")
// }