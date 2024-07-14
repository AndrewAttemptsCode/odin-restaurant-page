import pizzaImage from "./images/pizza-main.png";

export function loadHomeContent() {
    const content = document.querySelector("#content");
    content.innerHTML = `
        <div id="hero-content">
            <h1>
                Every slice is a taste sensation!
            </h1>
            <p>
                Enjoy handcrafted pizzas with authentic flavours and premium toppings. Whether you crave a classic Margherita or a gourmet special, our menu promises something delicious for everyone. Join us for a cozy dining experience and exceptional service that will keep you coming back for more.
            </p>
        </div>
        <div id="hero-image">
            <img src="${pizzaImage}" alt="slice of pizza">
        </div>
    `;
}