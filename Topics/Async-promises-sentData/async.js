console.log("Asyncronous");

const user={
    name:"Muhammad Ayan",
    age:20,
    rno:36,
    semester:"third",
    isLogged: true,
}




const btn = document.querySelector("#btn");
btn.addEventListener("click" , ()=>{
    console.log("Button Clicked");
    localStorage.setItem("user" , JSON.stringify(user));
    window.location = "about.html"
    
})


console.log("first");
console.log("second");
setTimeout(() => {
    console.log("third");
}, 0);
console.log("forth"); 


// promises 

let age = 17;

const promiseOne = new Promise((resolve , reject)=>{
    setTimeout(() =>{
        if(age>=18){
            resolve();
        }
        else{
            reject();
        }
    },2000)
});

// // console.log(promiseOne);

promiseOne
.then(()=>{
    console.log("fulfilled");
    
})
.catch(()=>{
    console.log("rejected");
    
})


function match(winning){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            if(winning>=100){                
                resolve("Winners")
            }
            else{
                reject("loosers")
            }
        },2000)
    });
}

match(101)
.then((res)=>{
    console.log("then will run");
    console.log(res);
    return res + "  chaining concept ";
})

 .then((res) => {
    console.log("chaining then");
    console.log(res);
  })

.catch((err)=>{
    console.log("catch will run");
    console.log(err);
    
    
})

.finally(()=>{
    console.log("Always runs ");
    
})


function goForSedan(budget) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (budget > 400000) {
        resolve("Go for sedan");
      } else {
        reject("Go for alto dabba");
      }
    }, 2000);
  });
}

goForSedan(40000000)
.then((res)=>{
    console.log(res);
    
})

.catch((err)=>{
    console.log(err);
    
})

.finally(()=>{
    console.log("runs Always");
    
})

async function executePromise() {
    try {
        const wait = await goForSedan(500000)
        console.log(wait);
    } catch (error) {
        console.error(error)
    }
}

try {
    alert("hello")
}catch(error){
    console.error(error)
}
console.log("console after alert");


executePromise()