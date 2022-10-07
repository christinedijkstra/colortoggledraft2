const bodyBackground = document.querySelector(".body-background");
const dropdown = document.querySelector(".dropdown");
const getSidebar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu");

const whiteBG = document.querySelector(".white");
const redBG = document.querySelector(".red");
const orangeBG = document.querySelector(".orange");
const purpleBG = document.querySelector(".purple");
const greenBG = document.querySelector (".green");
const homeBG = document.querySelector (".home");

menu.addEventListener("click", function() {
    dropdown.classList.toggle("visible");
})

whiteBG.addEventListener("click", function () {
    bodyBackground.className = "white";
    dropdown.classList.remove("visible");
    textBackground.innerHTML = "Dit is een witte achtergrond";
})

redBG.addEventListener("click", function () {
    bodyBackground.className = "red";
    dropdown.classList.remove("visible");
    textBackground.innerHTML = "Dit is een rode achtergrond";
})

orangeBG.addEventListener("click", function () {
    bodyBackground.className = "orange";
    dropdown.classList.remove("visible");
    textBackground.innerHTML = "Dit is een oranje achtergrond";
})

purpleBG.addEventListener("click", function () {
    bodyBackground.className = "purple";
    dropdown.classList.remove("visible");
    textBackground.innerHTML = "Dit is een paarse achtergrond";
})

greenBG.addEventListener("click", function () {
    bodyBackground.className = "green";
    dropdown.classList.remove("visible");
    textBackground.innerHTML = "Dit is een groene achtergrond";
})

homeBG.addEventListener("click", function () {
    bodyBackground.className = "home";
    dropdown.classList.remove("visible");
    textBackground.innerHTML = "Dit is de home pagina";
})
