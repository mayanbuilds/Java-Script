// Q1:
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addTwoNumbers(5, 3));

// Q2:
function subtractNumbers(num1, num2) {
    return num1 - num2;
}
console.log(subtractNumbers(10, 4));

// Q3:
function multiplyNumbers(num1, num2) {
    return num1 * num2;
}
console.log(multiplyNumbers(6, 3));

// Q4:
function divideNumbers(num1, num2) {
    return num1 / num2;
}
console.log(divideNumbers(10, 2));

// Q5:
function getRemainder(num1, num2) {
    return num1 % num2;
}
console.log(getRemainder(10, 3));

// Q6:
function isPositive(num) {
    if (num > 0) {
        return "Positive";
    } else {
        return "Not Positive";
    }
}
console.log(isPositive(5));

// Q7:
function isNegative(num) {
    if (num < 0) {
        return "Negative";
    } else {
        return "Not Negative";
    }
}
console.log(isNegative(-3));

// Q8:
function checkEven(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(checkEven(8));

// Q9:
function isEqual(num1, num2) {
    if (num1 === num2) {
        return "Equal";
    } else {
        return "Not Equal";
    }
}
console.log(isEqual(5, 5));

// Q10:
function compareNumbers(num1, num2) {
    if (num1 > num2) {
        return "Greater";
    } else {
        return "Smaller";
    }
}
console.log(compareNumbers(10, 7));

// Q11:
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(getFullName("Ali", "Khan"));

// Q12:
function getGrade(score) {
    if (score >= 40) {
        return "Pass";
    } else {
        return "Fail";
    }
}
console.log(getGrade(75));

// Q13:
function isTeenager(age) {
    if (age >= 13 && age <= 19) {
        return "Teenager";
    } else {
        return "Not a Teenager";
    }
}
console.log(isTeenager(16));

// Q14:
function greetUser(name) {
    return "Hello, " + name + "!";
}
console.log(greetUser("Ahmed"));

// Q15:
function isEligibleToVote(age) {
    if (age >= 18) {
        return "Eligible";
    } else {
        return "Not Eligible";
    }
}
console.log(isEligibleToVote(20));

// Q16:
function findAbsoluteValue(num) {
    if (num < 0) {
        return -num;
    } else {
        return num;
    }
}
console.log(findAbsoluteValue(-10));

// Q17:
function checkTemperature(temp) {
    if (temp > 30) {
        return "Hot";
    } else if (temp < 10) {
        return "Cold";
    } else {
        return "Normal";
    }
}
console.log(checkTemperature(25));

// Q18:
function getTriangleType(a, b, c) {
    if (a === b && b === c) {
        return "Equilateral";
    } else if (a === b || b === c || a === c) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}
console.log(getTriangleType(3, 3, 3));

// Q19:
function calculateDiscountedPrice(price, discount) {
    let discountAmount = (price * discount) / 100;
    return price - discountAmount;
}
console.log(calculateDiscountedPrice(1000, 20));

// Q20:
function isPasswordValid(password) {
    if (password.length >= 8) {
        return "Valid Password";
    } else {
        return "Too Short";
    }
}
console.log(isPasswordValid("mypassword"));
