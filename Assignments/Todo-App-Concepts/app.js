const input = document.querySelector("#input")
const btn = document.querySelector("#btn")

const arr = [];

function renderTodo(){
    ol.innerHTML = "";
    for(let i = 0; i<arr.length; i++){
        ol.innerHTML += `<h3><li>${arr[i]}
        <button onclick="deleteTodo(${i})">Delete</button>
        <button onclick="editTodo(${i})">Edit</button>
        </li></h3>`
    }
}

function addTodo(){
    arr.push(input.value)
    renderTodo()
    input.value = "";
}

function deleteTodo(index){
    arr.splice(index , 1)
    renderTodo()
}

function editTodo(index){
    const updateVal = prompt("Enter Updated Value" , arr[index])
     arr[index] = updateVal
     renderTodo()
}

