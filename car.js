let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");
let card = document.querySelector(".card"); // Select the card for visibility control

openShopping.addEventListener("click", () => {
  body.classList.add("active");
  card.style.display = "block"; // Show the card when shopping is opened
});

closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
  card.style.display = "none"; // Hide the card when closed
});

// Add an event listener to the checkout button if it exists
let checkoutButton = document.querySelector(".checkoutButton"); // Adjust to your checkout button's class
if (checkoutButton) {
  checkoutButton.addEventListener("click", () => {
    if (card.style.display === "block") {
      card.style.display = "none"; // Hide the card if it's open
    } else {
      card.style.display = "block"; // Show the card if it's closed
    }
  });
}

let products = [
  {
    id: 1,
    name: "Large Popcorn - Mixed",
    image: "4.PNG",
    price: 3000,
  },
  {
    id: 2,
    name: "Fanta Orange 60 cl",
    image: "2.PNG",
    price: 120000,
  },
  {
    id: 3,
    name: "Coca-Cola Coke 60 cl",
    image: "3.PNG",
    price: 1200,
  },
  {
    id: 4,
    name: "PRODUCT NAME 4",
    image: "7.PNG",
    price: 123000,
  },
  {
    id: 5,
    name: "PRODUCT NAME 5",
    image: "5.PNG",
    price: 320000,
  },
  {
    id: 6,
    name: "PRODUCT NAME 6",
    image: "6.PNG",
    price: 120000,
  },
];
let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
            <img src="./images/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
    list.appendChild(newDiv);
  });
}
initApp();
function addToCard(key) {
  if (listCards[key] == null) {
    // copy product form list to list card
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
                <div><img src="./images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}
