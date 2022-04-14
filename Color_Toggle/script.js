//HTML elementen
const background = document.querySelector(".body-background");
const dropDownDiv = document.querySelector(".dropdown");
const dropDownMenu = document.querySelector(".ul-menu");
const hamburger = document.querySelector(".hamburger");

//Background elementen
const homeBackground = document.querySelector(".home");
const purpleBackground = document.querySelector(".purple");
const orangeBackground = document.querySelector(".orange");
const greenBackground = document.querySelector(".green");
const textBackground = document.querySelector(".text-background");

//Dropdown menu + bonus click gewijzigd naar mouseover
hamburger.addEventListener("mouseover", function() {
    dropDownMenu.classList.toggle("visible");
})

//Wijzigen achtergrondkleur

homeBackground.addEventListener("click", function (){
    background.classList.add("home");
    dropDownMenu.classList.remove("visible");
    textBackground.innerHTML = "This is the homepage";
});

purpleBackground.addEventListener("click", function (){
    background.classList.add("purple");
    dropDownMenu.classList.remove("visible");
    textBackground.innerHTML = "This background is purple";
});

orangeBackground.addEventListener("click", function (){
    background.classList.add("orange");
    dropDownMenu.classList.remove("visible");
    textBackground.innerHTML = "This background is orange";
});

greenBackground.addEventListener("click", function (){
    background.classList.add("green");
    dropDownMenu.classList.remove("visible");
    textBackground.innerHTML = "This background is green";
});