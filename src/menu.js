import { createFood } from "./createFood";
import chickenFajitasImage from "./images/chicken-fajitas.jpg";
import chickenFeastImage from "./images/chicken-feast.jpg";
import chickenBaconImage from "./images/chicken-n-bacon-club.jpg";
import hawaiianSizzlerImage from "./images/hawaiian-sizzler.jpg";
import mushroomSweetcornImage from "./images/mushroom-n-sweetcorn.jpg";
import pepperoniNdujaImage from "./images/pepperoni-n-nduja.jpg";
import spicyGoatImage from "./images/the-spicy-goat.jpg";
import cyoImage from "./images/cyo.jpg";

export function loadMenuContent() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const menu = document.createElement("div");
    menu.classList.add("menu-container");

    const foodItems = [
        createFood("Pepperoni 'n' Nduja", "Cup 'n' crisp pepperoni, pepperoni, 'Nduja", 12.99, pepperoniNdujaImage),
        createFood("Chicken Fajita", "Chicken, peppers, red onions, roquito pearl slices, fajita seasoning", 12.99, chickenFajitasImage),
        createFood("Chicken Feast", "Chicken, mushrooms and sweetcorn", 12.99, chickenFeastImage),
        createFood("Chicken & Bacon club", "Chicken, bacon, red onions & sunbraised tomatoe", 12.99, chickenBaconImage),
        createFood("Hawaiian Sizzler", "Ham & pineapple, jalapenos, chilli flakes, red onions and roquito pearl slices", 12.99, hawaiianSizzlerImage),
        createFood("Mushroom & Sweetcorn", "Mushrooms & sweetcorn", 12.99, mushroomSweetcornImage),
        createFood("The spicy GOAT", "Goats cheese, sliced roquitos, red onions, topped with hot honey drizzle", 12.99, spicyGoatImage),
        createFood("Create Your Own", "Go Freestyle! Simply choose your sauce and add any toppings", 12.99, cyoImage),
    ];

    foodItems.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("food-item");

        const foodTitle = document.createElement("h2");
        foodTitle.classList.add("food-title");
        foodTitle.textContent = item.name;

        const foodDesc = document.createElement("p");
        foodDesc.classList.add("food-desc");
        foodDesc.textContent = item.description;

        const foodPrice = document.createElement("p");
        foodPrice.classList.add("food-price");
        foodPrice.textContent = `£${item.price}`;

        const foodImg = document.createElement("img");
        foodImg.classList.add("food-img");
        foodImg.src = item.imagePath;
        foodImg.alt = `${item.name} pizza`;

        menuItem.appendChild(foodImg);
        menuItem.appendChild(foodTitle);
        menuItem.appendChild(foodDesc);
        menuItem.appendChild(foodPrice);

        menu.appendChild(menuItem);
    });

    content.appendChild(menu);
    
}
