"use strict"; 
var toggleButton = document.querySelector(".btn--theme");
toggleButton.addEventListener("click", toggleCallback);
var activeTheme = localStorage.getItem("theme");
if(activeTheme == "dark"){
    document.body.classList.add("dark");
    toggleButton.checked = true;
}
function toggleCallback(){
    if(document.body.classList.toggle("dark")){
        localStorage.setItem("theme", "dark");
    }else{
        localStorage.setItem("theme", "light");
    }
}
