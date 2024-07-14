import "./style.css";
import { loadHeaderContent } from "./header";
import { loadHomeContent } from "./home";

document.addEventListener("DOMContentLoaded", () => {
    loadHeaderContent();
    loadHomeContent();
});