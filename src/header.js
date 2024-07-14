import pizzaLogo from "./images/pizza-logo.png";

export function loadHeaderContent() {
    const header = document.querySelector("header");
    header.innerHTML = `
        <div class="logo">
                <img src="${pizzaLogo}" alt="Pizza logo">
        </div>
            <nav>
                <button>Home</button>
                <button>Menu</button>
                <button>About</button>
            </nav>    
    `;    
}

