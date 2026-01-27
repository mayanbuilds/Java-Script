const input = document.querySelector("#input")
const ol = document.querySelector("#ol")

const arr = [];


function renderTodo(){
    ol.innerHTML = "";
    for(let i = 0; i <arr.length ; i++){
        ol.innerHTML += `
        <li>${arr[i]}</li>
        <div>
        <button onclick="deleteTodo(${i})" >Delete</button>
        <button onclick="editTodo(${i})" >Edited</button>
        </div>
        `
    }
}


function add(){
  arr.push(input.value)
    renderTodo()
    input.value = "";
}

function deleteTodo(index){
    arr.splice(index , 1)
    console.log(arr);
    
    renderTodo();
}

function editTodo(index){
    const updateVal = prompt("Enter updated Value" , arr[index])
    arr[index] = updateVal;
    renderTodo()
}

