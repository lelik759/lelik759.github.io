"use strict"

var sliderText=document.getElementsByClassName("slider-text");
var arrowRight=document.querySelector(".arrow-right");
var arrowleft=document.querySelector(".arrow-left");

var i =0;
arrowRight.addEventListener("click", goRight );
arrowleft.addEventListener("click", goLeft );


function goRight ( ) {
	sliderText[i].style.display="none";
	++i;
	if (i>=sliderText.length) {
		i=0
	}
	sliderText[i].style.display="block";
} 


function goLeft ( ) {
	sliderText[i].style.display="none";
	--i;
	if (i<=0) {
		i=sliderText.length-1;
	}
	sliderText[i].style.display="block";
} 






var j=1;
document.onclick=function (event) {
	 var target = event.target;

	if(!target.hasAttribute("data-arrow") ) return;
	j++;
		if(j%2==0) 
		target.style.transform="rotate(180deg)";
	 		if(j%2==1)
			target.style.transform="rotate(0deg)";

		 
	var id = target.getAttribute('data-toggle-id');
    if (!id) return;

    var elem = document.getElementById(id);

    elem.hidden = !elem.hidden;
}



 