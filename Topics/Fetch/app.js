const div = document.querySelector("#div")
fetch("https://api.freeapi.app/api/v1/public/randomusers")
.then((res) => res.json())
.then((res) => {
    //  console.log(res.data.data);
   const data = res.data.data;
   console.log(data);
   
    data.map((item) => {
        div.innerHTML += `    
        <p>${item.name.title} ${item.name.first} ${item.name.last}</p>
        
        
        `
    })
})

.catch((err) => {
    console.log(err);
    
});