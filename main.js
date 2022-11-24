window.addEventListener("DOMContentLoaded", main);


function main() {
    addEventListeners();
}

function addEventListeners(){
    const button = document.getElementById("burger-menu");
    button.onclick = toggleMenu;
}

function toggleMenu() {
    const header = document.querySelector("header");
    header.classList.toggle("open");
}



