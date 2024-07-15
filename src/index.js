import "./style.css";
import { loadHeaderContent } from "./header";
import { loadHomeContent } from "./home";

document.addEventListener("DOMContentLoaded", () => {
    loadHeaderContent();
    loadHomeContent();

    const home = document.querySelector("#home");
    home.addEventListener("click", () => {
    loadHeaderContent();
    loadHomeContent();
    });

    const menu = document.querySelector("#menu");
    menu.addEventListener("click", () => {
        loadHeaderContent();
        loadMenuContent();
    });

    const about = document.querySelector("#about");
    about.addEventListener("click", () => {
        loadHeaderContent();
        loadAboutContent();
    });

});

