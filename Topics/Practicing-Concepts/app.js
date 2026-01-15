// function cal(){
//     const output = document.querySelector("#output")
//     output.innerHTML = `
//     <li>Function Call</li>
//     <li>${2+7}</li>
//     <li>${true}</li>

//         `;
//     console.log("Function Call");
//     console.log(2+5);
//     console.log(true);
// }

// const btn = document.querySelector("#btn")


// function greet(){
//     const output = document.querySelector("#output")
//     output.innerHTML = `
//         <p>Function Call</p>
//     `
//     console.log("How Are You ?");
    
// }

// const head = document.querySelector("#head")
// heading.addEventListener("click" , greet)
// heading.addEventListener("change" , function(){
//     console.log("Second Function Call");
//      const head = document.querySelector("#head")
//     head.innerHTML = `
//         <p>Second Function Call</p>
//     `

// })


// const text = document.querySelector("#text")
// const output = document.querySelector("#output")

// function getval(){
//     console.log(text.value);
//     output.innerHTML += `<li><h2>${text.value}</h2></li>
//     `
// }

const head = document.querySelector("#head")
const btn = document.querySelector("#btn")
const bulb = document.querySelector("#bulb")

function change(){
    if(head.innerHTML === "Onn"){
        head.innerHTML = "Off" 
        btn.innerHTML = "Turn Onn"
        bulb.src = "https://static.vecteezy.com/system/resources/previews/016/730/285/non_2x/light-bulb-icon-illustration-with-coding-suitable-for-programming-idea-icon-icon-related-to-developer-line-icon-style-suitable-for-apps-websites-mobile-apps-simple-design-editable-vector.jpg"
    }else{
        head.innerHTML = "Onn"
        btn.innerHTML = "Turn Off"
        bulb.src = "https://cdn-icons-png.flaticon.com/512/4143/4143584.png"
    }
}