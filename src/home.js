export function loadHomeContent() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    
    const container = document.createElement("div");
    container.classList.add("hero-content");

    const heroTitleContainer = document.createElement("div");
    heroTitleContainer.classList.add("hero-title-container");

    const heroTitle1 = document.createElement("h1");
    heroTitle1.classList.add("hero-title-1");
    heroTitle1.textContent = "Every slice";

    const heroTitle2 = document.createElement("h1");
    heroTitle2.classList.add("hero-title-2");
    heroTitle2.textContent = "is a";

    const heroTitle3 = document.createElement("h1");
    heroTitle3.classList.add("hero-title-3");
    heroTitle3.textContent = "taste sensation!";

    const heroText = document.createElement("p");
    heroText.textContent = "Enjoy handcrafted pizzas with authentic flavours and premium toppings. Whether you crave a classic Margherita or a gourmet special, our menu promises something delicious for everyone. Join us for a cozy dining experience and exceptional service that will keep you coming back for more."; 

    container.appendChild(heroTitleContainer);
    heroTitleContainer.appendChild(heroTitle1);
    heroTitleContainer.appendChild(heroTitle2);
    heroTitleContainer.appendChild(heroTitle3);
    container.appendChild(heroText);

    content.appendChild(container);
}