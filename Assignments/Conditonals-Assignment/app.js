// # Conditional Practice Problems

//Q1: 
const speed = 33 ; 
if(speed<=30 && speed>0){
    console.log("Too Slow");
}else if(speed>30 && speed<=60){
    console.log("Safe Speed");
}else if(speed>60 && speed<=100){
    console.log("Speeding");
}else if(speed>100){
    console.log("Dangerously Fast");
    
}else{
    console.log("kya karna cha rha ha bahi ? ");
    
};


//Q2:
const days = 22 ;
if(days==0){
    console.log("$0 Or No Fine ");
}else if (days>=1 && days<=5){
    console.log("$1 fine per day");
    console.log(days + " days fine is " + days*1);
    
}else if(days>=6 && days<=10){
    console.log("$2 Per day fine");
    console.log(days + " days fine is " + days*2);

}else if(days>10){
    console.log("$5 per day fine");
    console.log( days + " days fine is " + days*5);

}else{
    console.log("kya karna chata ha bahi ? ");
}


// Q3:
const age = 18 ;
const ticket = false ;
if(age>=18 && ticket==true){
    console.log("Welcome !");
    
}else{
    console.log("Nikal Yahan sa");
    
}

// ## 3. Event Entry Eligibility
// Check if a person (with age and ticket) can enter:
// - Must be 18 or older  
// - Must have a valid ticket  

// ---

// ## 4. Smartphone Battery Status
// Given battery percentage, print:
// - 80–100: "Fully charged"  
// - 50–79: "Good battery"  
// - 20–49: "Low battery"  
// - Below 20: "Charge now!"  

// ---

// ## 5. Discount Eligibility
// Given customer type and age, apply discount:
// - Student: 20%  
// - Senior (60+): 30%  
// - Others: 0%  

// ---

// ## 6. Clothing Recommendation
// Based on temperature (°C), suggest clothing:
// - Below 10: "Heavy jacket"  
// - 10–20: "Sweater"  
// - 21–30: "T-shirt"  
// - Above 30: "Light clothes"  

// ---

// ## 7. Water Intake Reminder
// Based on activity level, suggest water intake:
// - Sedentary: 2L  
// - Moderate: 2.5L  
// - Active: 3L+  

// ---

// ## 8. Exam Result Evaluation
// Given three subject marks, print:
// - "Pass" if all marks are 40 or above  
// - "Fail" if any mark is below 40  

// ---

// ## 9. App Theme Selection
// Based on time of day (0–23), select theme:
// - 6–17: Light Mode  
// - Otherwise: Dark Mode  

// ---

// ## 10. Meal Type Identifier
// Based on time of day (0–23), identify meal:
// - 6–10: Breakfast  
// - 12–14: Lunch  
// - 18–21: Dinner  
// - Any other time: Snack  