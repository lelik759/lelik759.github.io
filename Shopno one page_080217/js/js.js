

var menuButton=document.querySelector(".header-nav__icon");
var buttonClose=document.querySelector(".header-nav-hidden__icon");
var headerNavHidden=document.querySelector(".header-nav-hidden");

function openingMenu() {
	headerNavHidden.style.right="0";
}

function closingMenu() {
	headerNavHidden.style.right="-100%";
	headerNavHidden.style.transition="right 2s"
}

menuButton.addEventListener("click",openingMenu);
buttonClose.addEventListener("click",closingMenu);