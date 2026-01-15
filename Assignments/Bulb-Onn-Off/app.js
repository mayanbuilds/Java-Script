const head = document.querySelector("#head")
const btn = document.querySelector("#btn")
const bulb = document.querySelector("#bulb")

function change(){
    if(head.innerHTML === "Onn"){
        head.innerHTML = "Off" 
        btn.innerHTML = "Turn Onn"
        bulb.src = "https://cdn-icons-png.flaticon.com/512/7774/7774001.png"
    }else{
        head.innerHTML = "Onn"
        btn.innerHTML = "Turn Off"
        bulb.src = "https://cdn-icons-png.flaticon.com/512/4143/4143584.png"
    }
}