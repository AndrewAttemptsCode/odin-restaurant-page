import "./style.css";
import { loadHeaderContent } from "./header";
import { loadHomeContent } from "./home";
import { loadAboutContent } from "./about";
import {loadMenuContent} from "./menu";

document.addEventListener("DOMContentLoaded", () => {
    loadHeaderContent();
    loadHomeContent();
    setLayoutClass("home-layout");

    document.querySelector("header").addEventListener("click", (event) => {
        if (event.target.id === "home") {
            loadHomeContent();
            setLayoutClass("home-layout");
        } else if (event.target.id === "menu") {
            loadMenuContent();
            setLayoutClass("menu-layout");
        } else if (event.target.id === "about") {
            loadAboutContent();
            setLayoutClass("about-layout");
        }
    });

});

function setLayoutClass(layoutClass) {
    const content = document.querySelector("#content");
    content.className = "";
    content.classList.add(layoutClass);
};

