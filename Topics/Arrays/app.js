// const myarr = [1, 2, 3 ,4 , 5]

// console.log(myarr.length);

// let mixedArr = [1 , 2 ,"st" , true , function (){
//     console.log("hello world");
//     return "username"

// }]

// console.log(mixedArr[4]());


// const newArr = ["Apple" , "banana" , "Grapes" , "Tomato"]
// console.log(newArr[4]);

let mixedArr = [1 , 2 ,"st" , true , function (){
    console.log("hello world");
    return "username"

}]

// console.log(mixedArr[4]());

const arr = [0, 1, 2, 3, 4];
// arr.shift();
// console.log(arr);
// arr.unshift(11)
// console.log(arr
// 
// );

const newarr = arr.slice(1,3);    //Slice dont manupulates the origional array , and also prints the first 2 indexes 
console.log(newarr);
console.log(arr);

const newarr2 = arr.splice(1,3);  // splice manupulates the origional array , and also prints the first three indexes 
console.log(newarr2);
console.log(arr);











