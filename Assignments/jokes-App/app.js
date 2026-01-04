const ol = document.querySelector("#ol");
const btn = document.querySelector("#btn");

const jokes = [];

btn.addEventListener("click", (e) => {
  e.preventDefault();

  fetch("https://api.freeapi.app/api/v1/public/randomjokes/joke/random")
    .then((res) => res.json())
    .then((res) => {
      jokes.push(res.data);
      renderJokes();
    })
    .catch((err) => {
      console.log(err);
    });
});

function renderJokes() {
  ol.innerHTML = "";

  jokes.map((joke) => {
    ol.innerHTML += `<li>${joke.content}</li>`;
  });
}
