const div = document.querySelector("#div");

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((res) => {
    console.log(res.products);

    const data = res.products;

    data.forEach((item) => {
  div.innerHTML += `
    <div class="product-card">
      <img src="${item.thumbnail}" alt="${item.title}">
      <h1>${item.title}</h1>
      <h3>${item.brand}</h3>
      <h3>${item.description}</h3>
      <h2>$${item.price}</h2>
    </div>
  `;
});

  });
