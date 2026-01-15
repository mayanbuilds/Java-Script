const div = document.querySelector("#div")
fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random")
.then((res) => res.json())
.then((res) => {
    console.log(res);

    const data = res.data;

    data.map((item) => {
        div.innerHTML += `
        <p>${item.content}</p>
        
        `
    })
    
})
.catch((err) => {
    console.log(err);
    
})