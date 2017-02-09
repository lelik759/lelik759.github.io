
var menu=document.querySelector(".header-nav__icon");
console.log(menu);
var buttonClose=document.querySelector(".header-nav-hidden__icon");
console.log(buttonClose);


function openingMenu() {
	document.querySelector(".header-nav-hidden").classList.add("active"); 
	menu.style.opacity="0";
}

function closingMenu() {
	document.querySelector(".header-nav-hidden").classList.remove("active");
	menu.style.opacity="1";
}

menu.addEventListener("click",openingMenu);
buttonClose.addEventListener("click",closingMenu);