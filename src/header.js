import pizzaLogo from "./images/pizza-logo.png";

export function loadHeaderContent() {
    const header = document.querySelector("header");
    header.innerHTML = "";

    const logoContainer = document.createElement("div");
    logoContainer.classList.add("logo");
    header.appendChild(logoContainer);

    const logo = document.createElement("img");
    logo.src = pizzaLogo;
    logo.alt = "Pizza Logo";
    logoContainer.appendChild(logo);

    const navBar = document.createElement("nav");
    header.appendChild(navBar);

    const homeButton = document.createElement("button");
    homeButton.id = "home";
    homeButton.textContent = "Home";

    const menuButton = document.createElement("button");
    menuButton.id = "menu";
    menuButton.textContent = "Menu";

    const aboutButton = document.createElement("button");
    aboutButton.id = "about";
    aboutButton.textContent = "About";

    navBar.appendChild(homeButton);
    navBar.appendChild(menuButton);
    navBar.appendChild(aboutButton);
}

