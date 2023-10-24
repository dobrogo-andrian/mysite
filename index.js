let burger = document.querySelector(".burgerImg");
let menu = document.querySelector("#menu");

burger.addEventListener("click",()=>{
    menu.classList.toggle("menu-active")
});