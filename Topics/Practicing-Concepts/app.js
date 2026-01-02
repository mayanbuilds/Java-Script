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


function greet(){
    const output = document.querySelector("#output")
    output.innerHTML = `
        <p>Function Call</p>
    `
    console.log("How Are You ?");
    
}

const head = document.querySelector("#head")
heading.addEventListener("click" , greet)
heading.addEventListener("change" , function(){
    console.log("Second Function Call");
     const head = document.querySelector("#head")
    head.innerHTML = `
        <p>Second Function Call</p>
    `

})
