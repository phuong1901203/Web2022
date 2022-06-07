const button = document.getElementById("button");
const menu = document.getElementById("main-menu");

button.addEventListener("click", function () {
    menu.classList.toggle("hidden");
});