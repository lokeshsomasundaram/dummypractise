const products = [
{
id: 1,
name: "T-Shirt",
price: 500,
image: "https://picsum.photos/200?random=1"
},
{
id: 2,
name: "Shoes",
price: 1500,
image: "https://picsum.photos/200?random=2"
},
{
id: 3,
name: "Watch",
price: 2000,
image: "https://picsum.photos/200?random=3"
},
{
id: 4,
name: "Headphones",
price: 2500,
image: "https://picsum.photos/200?random=4"
}
];

const productDiv = document.getElementById("products");
const cartList = document.getElementById("cart");

let cart = [];

function loadProducts() {
productDiv.innerHTML = "";

products.forEach(p => {
const div = document.createElement("div");
div.className = "product";

```
div.innerHTML = `
  <img src="${p.image}">
  <h3>${p.name}</h3>
  <p>₹${p.price}</p>
  <button onclick="addToCart(${p.id})">Add</button>
`;

productDiv.appendChild(div);
```

});
}

function addToCart(id) {
const item = products.find(p => p.id === id);
cart.push(item);
renderCart();
}

function renderCart() {
cartList.innerHTML = "";
cart.forEach(item => {
const li = document.createElement("li");
li.textContent = `${item.name} - ₹${item.price}`;
cartList.appendChild(li);
});
}

function scrollLeft() {
productDiv.scrollBy({ left: -200, behavior: "smooth" });
}

function scrollRight() {
productDiv.scrollBy({ left: 200, behavior: "smooth" });
}

loadProducts();
