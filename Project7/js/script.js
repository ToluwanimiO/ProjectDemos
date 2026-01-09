// ========= HOME PAGE GREETING =========
window.addEventListener("load", function () {
  if (document.body.classList.contains("home-page")) {
    let name = prompt("Welcome! Please enter your name:");
    greetUser(name);
  }
});

function greetUser(name) {
  if (!name) name = "Guest";
  let hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  alert(`${greeting}, ${name}! Welcome to Gourmet Restaurant.`);
}

// ========= MENU PAGE FILTER =========
const dishes = [
  { name: "Grilled Salmon", category: "Main", price: 25, img: "salmon" },
  { name: "Beef Steak", category: "Main", price: 30, img: "steak" },
  { name: "Vegan Salad", category: "Starter", price: 18, img: "salad" },
  { name: "Chocolate Cake", category: "Dessert", price: 12, img: "cake" },
  { name: "Pasta Carbonara", category: "Main", price: 22, img: "pasta" },
  { name: "Garlic Bread", category: "Starter", price: 20, img: "bread" },
  { name: "Fried Calamari", category: "Starter", price: 18, img: "calamari" },
  { name: "Macaron", category: "Dessert", price: 15, img: "macaron" },
];

function displayMenu(filter = "All") {
  const menuGrid = document.getElementById("menu-grid");
  menuGrid.innerHTML = ""; // clear previous

  let filtered =
    filter === "All" ? dishes : dishes.filter((d) => d.category === filter);

  filtered.forEach((dish) => {
    let card = document.createElement("div");
    card.classList.add("menu-card");
    card.innerHTML = `
            <img src="images/${dish.img.toLowerCase()}.jpg" alt="${dish.name}">
            <div class="menu-content">
                <h3>${dish.name}</h3>
                <p>${dish.category}</p>
                <div class="price">$${dish.price}</div>
            </div>
        `;
    menuGrid.appendChild(card);
  });
}

if (document.body.classList.contains("menu-page")) {
  displayMenu();

  document
    .getElementById("category-filter")
    .addEventListener("change", function () {
      displayMenu(this.value);
    });
}

// ========= RESERVATION FORM VALIDATION =========
if (document.body.classList.contains("contact-page")) {
  document
    .getElementById("reservation-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      validateForm();
    });
}

function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let guests = document.getElementById("guests").value;

  if (name === "" || email === "" || !email.includes("@") || guests < 1) {
    alert("Please fill all fields correctly.");
  } else {
    alert("Reservation successful!");
    document.getElementById("reservation-form").reset();
  }
}
